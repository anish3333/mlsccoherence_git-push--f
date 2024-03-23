import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import Signup from "./Signup";

export default function Dialog1() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <div>
                <Button onClick={handleOpen} variant="gradient">
                    Open Dialog
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
                        <Signup />
                    </div>
                </Dialog>
            </div>

        </>
    );
}