import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [info, setInfo] = useState({
        data: null,
        error: null,
        loading: true,
    });

    useEffect(() => {
        fetchData(url);
    }, [url]);

    const fetchData = async (url) => {
        setInfo((prev) => ({ ...prev, loading: true }));

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
