import * as React from "react";
import { useNavigate } from "react-router-dom";

function useRedirect(timer) {
    const [counter, setCounter] = React.useState(timer);
    const navigate = useNavigate();

    React.useEffect(() => {
        setInterval(() => {
            setCounter(counter - 1);
        }, 1000);
        if (counter === 0) {
            navigate("/");
        }
    }, [counter, navigate]);

    return counter;
};

function useFastRedirect(path) {
    const navigate = useNavigate();

    const redirect = () => {
        navigate(path);
    }

    return redirect;
}

export { useRedirect, useFastRedirect }