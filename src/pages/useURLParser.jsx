import useURLParser from "../hooks/useURLParser";

const UseURLParserPage = () => {
    const { hash, host, href, origin, pathname, protocol } = useURLParser();

    return (
        <div>
            <span>Host: {host}</span> <br />
            <span>Href: {href}</span> <br />
            <span>Origin: {origin}</span> <br />
            <span>Pathname: {pathname}</span> <br />
            <span>Protocol: {protocol}</span> <br />
            <span>Hash: {hash}</span> <br />
        </div>
    );
};

export default UseURLParserPage;
