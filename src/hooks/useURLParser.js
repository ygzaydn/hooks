const useURLParser = () => {
    const url = new URL(window.location.href);

    return {
        hash: url.hash === "" ? "null" : url.hash,
        host: url.host,
        href: url.href,
        origin: url.origin,
        pathname: url.pathname,
        protocol: url.protocol.split(":")[0],
    };
};

export default useURLParser;
