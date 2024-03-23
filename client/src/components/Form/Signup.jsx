import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    CardHeader,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Dialog1 from "./Dialog1";

export default function Signup() {
    return (
        <div className="m-2 p-4 mt-12" >

            <Card
                shadow={false}
                className="w-fit p-5">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign Up
                    </Typography>
                </CardHeader>

                <form className="mt-8 mb-2 mx-auto max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <div variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </div>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                        sign up
                    </Button>
                    {/* <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <Link to="/signin" className="font-medium text-gray-900">
                            Sign In
                        </Link>
                        <Dialog1 linkText={"Sign In"} />
                    </Typography> */}
                </form>
            </Card>
        </div>

    );
}