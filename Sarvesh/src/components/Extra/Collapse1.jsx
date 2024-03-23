import React from "react";
import {
    Collapse,
    Button,
    Card,
    Typography,
    CardBody,
} from "@material-tailwind/react";

export default function Collapse1() {
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);

    return (
        <>
            <div className="m-2">
                <div className="text-center bg-purple-300">
                    collapse
                </div>

                <Button onClick={toggleOpen}>Open Collapse</Button>
                <Collapse open={open}>
                    <Card className="my-4 mx-auto w-8/12">
                        <CardBody>
                            <Typography>
                                Use our Tailwind CSS collapse for your website. You can use if for
                                accordion, collapsible items and much more.
                            </Typography>
                        </CardBody>
                    </Card>
                </Collapse>
                <div className="h-2 m-2 bg-black" />
            </div>

        </>
    );
}