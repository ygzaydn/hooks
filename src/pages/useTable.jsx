import useTable from "../hooks/useTable";
import { data } from "../constants/data";

const UseTablePage = () => {
    const {
        header,
        rows,
        page,
        pagination: { increasePage, decreasePage, maxPage, pageNumber },
    } = useTable({ data, page: 10 });
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {header.map((el) => (
                            <th key={el}>{el}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((el, ind) => (
                        <tr key={ind}>
                            {el.map((el2) => (
                                <td key={el2}>{el2}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {page && (
                <div>
                    <button
                        disabled={pageNumber === 1}
                        onClick={() => decreasePage()}
                    >
                        Decrease
                    </button>
                    <span>
                        Page {pageNumber} of {maxPage}
                    </span>

                    <button
                        disabled={pageNumber === maxPage}
                        onClick={() => increasePage()}
                    >
                        Increase
                    </button>
                </div>
            )}
        </div>
    );
};

export default UseTablePage;
