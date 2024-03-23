import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export default function Faq() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const CUSTOM_ANIMATION = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };
    return (
        <>
            <div id="1" className="m-2">


                <Accordion animate={CUSTOM_ANIMATION} open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className={`border-b-0 transition-colors ${open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
                        }`} onClick={() => handleOpen(1)}>This is mostly an educated guess, based on some</AccordionHeader>
                    <AccordionBody>
                        This is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on some
                    </AccordionBody>
                </Accordion>
                <Accordion animate={CUSTOM_ANIMATION} open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader className={`border-b-0 transition-colors ${open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
                        }`} onClick={() => handleOpen(2)}>
                        This is mostly an educated guess, based on some
                    </AccordionHeader>
                    <AccordionBody>
                        This is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on some
                    </AccordionBody>
                </Accordion>
                <Accordion animate={CUSTOM_ANIMATION} open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader className={`border-b-0 transition-colors ${open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
                        }`} onClick={() => handleOpen(3)}>
                        This is mostly an educated guess, based on some
                    </AccordionHeader>
                    <AccordionBody>
                        This is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on someThis is mostly an educated guess, based on some
                    </AccordionBody>
                </Accordion>
            </div>

        </>
    );
}