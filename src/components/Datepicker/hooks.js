import { useState } from "react";

export const useDatepickerBusinessLogic = ({ onDateSelected }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => { setIsOpen(true); }
    const handleClose = () => { setIsOpen(false); }
    const handleDateSelected = (val) => {
        onDateSelected(val);
        setIsOpen(false);
    }

    return {
        isOpen,
        onOpen: handleOpen,
        onClose: handleClose,
        onDateSelected: handleDateSelected,
    }
}