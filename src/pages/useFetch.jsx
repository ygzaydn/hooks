import useFetch from "../hooks/useFetch";

const UseFetchPage = () => {
    const { loading, error, data } = useFetch(
        "https://api.agify.io?name=michael"
    );

    return (
        <div>
            {loading && <span>Loading...</span>}
            {error && <span>Error</span>}
            {data && (
                <span>
                    name: {data.name} <br />
                    age: {data.age} <br />
                </span>
            )}
        </div>
    );
};

export default UseFetchPage;
