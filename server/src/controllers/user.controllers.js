import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js";

//User section
const generateAccessandRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        
        user.refreshToken = refreshToken                
        await user.save({ validateBeforeSave: false })  
         
        return {accessToken, refreshToken}           

    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating Refresh and Access Tokens");
    }
}

const registerUser = asyncHandler(async (req, res) => {
    const { userchannel, email, password } = req.body

    if ([username, email, password].some((field) => String(field).trim() === "")) {
        throw new ApiError(400, "All fields are Required")
    }

    const alreadyExistingUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    // console.log(alreadyExistingUser)
    if (alreadyExistingUser) {
        throw new ApiError(409, "Username or Email already in Use")
    }

    // const avatarLocalPath = req.file?.path
    // if(!avatarLocalPath){
    //     avatarLocalPath = "../assets/default.png"
    // }

    // const avatar = uploadOnCloudinary(avatarLocalPath)
    // if(!avatar){
    //     throw new ApiError(400,"Uploading Avatar to cloudinary Failed")
    // }

    const user = await User.create({
        username: String(username).toLowerCase(),
        email,
        password,
    })

    const createdUser = await User.findById(user._id).select(" -password, -refreshToken")

    return res
        .status(201)
        .json(new ApiResponse(200, createdUser, "User registered Successfully"))

})

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body

    if (!email) {
        throw new ApiError(400, "Username & Email is required")
    }

    const user = await User.findOne({
        email
    });

    if (!user) {
        throw new ApiError(404, "User doesnt Exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid User Credentials")
    }

    const { accessToken, refreshToken } = await generateAccessandRefreshTokens(user._id)
    const loggedInUser = await User.findById(user._id).
        select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60),
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    user: loggedInUser, accessToken, refreshToken
                },
                "User logged in Successfully"
            )
        )
})

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1
            }
        },
        {
            new: true
        },
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged OUT"))
})

//contollers for if user is authenticated

const getUserData = asyncHandler(async (req, res) => {
    const user = req.user;

    if (!user) {
        throw new ApiError(409, "urlser not logged in")
    }
    return res
        .status(200)
        .json(new ApiResponse(200, user, "User Data fetched Successfully"))

})



//Controllers Based on Problem Statement
const addToHistory = asyncHandler(async (req, res)=>{
    const {name}  = req.body;
    if(!name){
        throw new ApiError(409, "Need an history to add")
    }
    const user = await User.findByIdAndUpdate(req.user._id, {history: {$push: {name}}})

    return res
    .status(200)
    .json(new ApiResponse(200, user, "added to the history Successfully"))
})

const addToChannels = asyncHandler(async (req, res)=>{
    const {channel}  = req.body;
    if(!channel){
        throw new ApiError(409, "Need an channel to add")
    }
    const user = await User.findByIdAndUpdate(req.user._id, {channels: {$push: {channel}}})

    return res
    .status(200)
    .json(new ApiResponse(200, user, "added to the channels Successfully"))
})


const fetchHistory = asyncHandler(async (req, res)=>{
    const user = await User.findById(req.user._id)
    return res
    .status(200)
    .json(new ApiResponse(200, user.history, "fetched history Successfully")); 
}

const fetchChannels = asyncHandler(async (req, res)=>{
    const user = await User.findById(req.user._id)
    return res
    .status(200)
    .json(new ApiResponse(200, user.channels, "fetched channels Successfully")) 
}

export {
    registerUser,
    loginUser,
    logoutUser,
    getUserData,
    addToHistory,
    addToChannels,
    fetchChannels,
    fetchHistory,
}