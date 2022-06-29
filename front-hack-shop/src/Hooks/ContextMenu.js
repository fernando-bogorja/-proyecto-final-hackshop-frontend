import { useEffect, useState, useCallback } from 'react';

export default function useContextMenu() {
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
    const [show, setShow] = useState(false);

    const toggleMenu = (shouldShow) => {
        return setShow(shouldShow);
    }

    const handleContextMenu = useCallback(
        (event) => {
            event.preventDefault();
            setAnchorPoint({ x: event.pageX, y: event.pageY });
            setShow(true);
        },
        [setAnchorPoint, setShow]
    );

    useEffect(() => {
        document.addEventListener("contextmenu", handleContextMenu);
        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
        };
    });

    return [show, toggleMenu, anchorPoint];
}