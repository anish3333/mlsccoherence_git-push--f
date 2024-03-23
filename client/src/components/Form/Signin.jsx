import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Dialog1 from "./Dialog1";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/slices/User.slices.js";

export default function Form1() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        alert("Form submitted");
        e.preventDefault();
        // console.log(formData);
        try {
            const response = await axios.post(
                '/api/v1/user/login',
                formData,
            );

            if (response.data && response.data.message) {
                // console.log(response.data)
                alert(response.data.message);

                const user = await axios.get(
                    '/api/v1/user/getuser',
                );
                // console.log(user.data.data)

                dispatch(setUser(user.data.data));
                navigate("/main");
            } else {
                // Handle error response properly
                alert("An error occurred while submitting the form");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form");
        }
    };
    return (
        <form action="" onSubmit={handleSubmit}>
            <div className="m-12 mt-12 mb-4">

                <Card className="w-96"
                    shadow={false} >
                    <CardHeader
                        variant="gradient"
                        color="gray"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Sign In
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            name="email"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={handleChange}
                        />

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Password
                        </Typography>
                        <Input
                            name="password"
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            onChange={handleChange}
                        />
                        <div className="-ml-2.5">
                            <Checkbox label="Remember Me" />
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>

                    </CardFooter>
                </Card>
            </div>
        </form>

    );
}