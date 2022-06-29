import useWindow from "../hooks/useWindow";

const UseWindowPage = () => {
    const { width, height } = useWindow();

    return (
        <div>
            <span>window width is : {width}px</span>
            <br />
            <span>window height is : {height}px</span>
            <br />
            <span>Resize the page to see the difference.</span>
        </div>
    );
};

export default UseWindowPage;
