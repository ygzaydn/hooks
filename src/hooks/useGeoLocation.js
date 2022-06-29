import { useState, useRef, useEffect } from "react";

const useGeoLocation = () => {
    const [geoLocation, setGeoLocation] = useState({ grant: false });
    const flag = useRef(false);

    const locationHelper = async (position) => {
        if (navigator?.geolocation) {
            const res = await fetch("https://api.db-ip.com/v2/free/self").then(
                (res) => res.json()
            );

            if (res) {
                const ip = res.ipAddress;
                const city = res.city;
                const country = res.countryName;

                setGeoLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    ip,
                    city,
                    country,
                    grant: true,
                });
            } else {
                alert("Your browser does not support geolocation");
            }
        }
    };
    const getLocation = async () => {
        navigator.geolocation.getCurrentPosition(locationHelper);
    };

    useEffect(() => {
        if (flag.current) {
            return;
        }
        getLocation();
        flag.current = true;
    }, []);

    return { ...geoLocation };
};
export default useGeoLocation;
