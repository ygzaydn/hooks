import useGeoLocation from "../hooks/useGeoLocation";

const UseGeoLocationPage = () => {
    const { grant, ip, city, country, latitude, longitude } = useGeoLocation();
    console.log(grant);
    return (
        <div>
            {!grant && (
                <span>
                    Please enable location preferences for browser, if you have
                    already done it please wait.
                </span>
            )}
            {grant && (
                <div>
                    <span>IP Address: {ip}</span> <br />
                    <span>City: {city}</span> <br />
                    <span>Country: {country}</span> <br />
                    <span>Latitude: {latitude}</span> <br />
                    <span>Longitude: {longitude}</span> <br />
                </div>
            )}
        </div>
    );
};

export default UseGeoLocationPage;
