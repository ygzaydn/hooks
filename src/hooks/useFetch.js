import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [info, setLoading] = useState({
        data: null,
        error: null,
        loading: true,
    });

    const fetchData = async (url) => {
        setLoading((prev) => ({ ...prev, loading: true }));
        try {
            const res = await axios.get(url);
            if (res) {
                setLoading({
                    data: res,
                    error: null,
                    loading: false,
                });
            }
        } catch (err) {
            setLoading({
                data: null,
                error: err,
                loading: false,
            });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { ...info };
};

export default useFetch;
