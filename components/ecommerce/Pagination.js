import React from "react";
// import "./styles.css";

function Pagination({
    prev,
    currentPage,
    getPaginationGroup,
    next,
    pages,
    handleActive,
}) {
    return (
        <>
            <ul className="pagination justify-content-start">
                {getPaginationGroup.length <= 0 ? null : (
                    <li onClick={prev} className="page-item">
                        {currentPage === 1 ? null : (
                            <a className="page-link">
                                <i className="fi-rs-angle-double-small-left"></i>
                            </p>
                        )}
                    </li>
                )}

                {getPaginationGroup.map((item, index) => {
                    return (
                        <li
                            onClick={() => handleActive(item)}
                            key={index}
                            className={
                                currentPage === item
                                    ? "page-item active"
                                    : "page-item"
                            }
                        >
                            <a className="page-link">{item}</p>
                        </li>
                    );
                })}

                {getPaginationGroup.length <= 0 ? null : (
                    <li onClick={next} className="page-item">
                        {currentPage >= pages ? null : (
                            <a className="page-link">
                                <i className="fi-rs-angle-double-small-right"></i>
                            </p>
                        )}
                    </li>
                )}
            </ul>

            {getPaginationGroup.length <= 0 ? null : (
                <p>
                    show {currentPage} of {pages}
                </p>
            )}
        </>
    );
}

export default Pagination;
