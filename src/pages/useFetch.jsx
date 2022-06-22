import useFetch from "../hooks/useFetch";

const UseFetchPage = () => {
    const { loading, error, data } = useFetch(
        "https://api.agify.io?name=michael"
    );
    return (
        <div>
            {loading && <span>Loading...</span>}
            {error && <span>Data</span>}
            {data && <span>Error</span>}
        </div>
    );
};

export default UseFetchPage;
