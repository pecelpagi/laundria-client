import { useState } from "react";

export const useAccountMenuBusinessLogic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggleMenu = () => { setIsOpen(!isOpen); };

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleClickOutside = (e) => {
        if (e.target.id !== "dot-menu-button" && e.target.id !== "dot-menu-icon") setIsOpen(false);
    }

    return {
        isOpen,
        onToggleMenu: handleToggleMenu,
        onClose: handleClose,
        onClickOutside: handleClickOutside,
    }
}