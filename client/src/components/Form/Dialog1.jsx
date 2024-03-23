import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import Signup from "./Signup";
import Signin from "./Signin";

export default function Dialog1({ linkText, children }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <div>
                <Button onClick={handleOpen} variant="gradient">
                    {linkText}
                </Button>
                <Dialog
                    open={open}
                    handler={handleOpen}
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <div className="h-full w-full flex items-center justify-center">
                        {linkText === "Sign In" ? (
                            <Signin />
                        ) : (
                            <Signup />
                        )}
                    </div>
                </Dialog>
            </div>

        </>
    );
}