import { useState } from "react";

const useTable = ({ data, page }) => {
    const [pageIndex, setPageIndex] = useState(0);

    const header = Object.keys(data[0]);
    const allRows = data.map((el) => header.map((el2) => el[el2]));

    const rows = page
        ? allRows.slice(page * pageIndex, page * (1 + pageIndex))
        : allRows;

    const increasePage = () => setPageIndex(pageIndex + 1);
    const decreasePage = () =>
        pageIndex > 0 ? setPageIndex(pageIndex - 1) : null;

    const maxPage = Math.ceil(allRows.length / page);

    return {
        header,
        rows,
        page,
        pagination: {
            increasePage,
            decreasePage,
            maxPage,
            pageNumber: pageIndex + 1,
        },
    };
};

export default useTable;
