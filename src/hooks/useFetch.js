import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetch = (url) => {
    const flag = useRef(false);

    const [info, setInfo] = useState({
        data: null,
        error: null,
        loading: true,
    });

    useEffect(() => {
        if (flag.current) {
            return;
        } else {
            fetchData(url);
        }
        flag.current = true;
    }, []);

    const fetchData = async (url) => {
        try {
            const res = await axios.get(url);
            if (res) {
                setInfo({
                    data: res.data,
                    error: null,
                    loading: false,
                });
            }
        } catch (err) {
            setInfo({
                data: null,
                error: err,
                loading: false,
            });
        }
    };

    return { ...info };
};

export default useFetch;
