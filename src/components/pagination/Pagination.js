const Pagination = ({ current, pages }) => {
    const pageNumbers = [];
    for (let i = Math.max(1, current - 4); i <= Math.min(current + 4, pages); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.length > 0 && (
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mt-5">
                        {current === 1 ? (
                            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                        ) : (
                            <li className="page-item"><a className="page-link" href="/dashboard">First</a></li>
                        )}

                        {current > 5 && (
                            <li className="page-item"><a className="page-link" href="#">...</a></li>
                        )}

                        {pageNumbers.map((pageNumber) => (
                            <li className={`page-item ${pageNumber === current ? 'active' : ''}`} key={pageNumber}>
                                {pageNumber === current ? (
                                    <a className="page-link" href="#">{pageNumber}</a>
                                ) : (
                                    <a className="page-link" href={`/dashboard/?page=${pageNumber}`}>{pageNumber}</a>
                                )}
                            </li>
                        ))}

                        {current === pages ? (
                            <li className="page-item disabled"><a className="page-link">Last</a></li>
                        ) : (
                            <li className="page-item"><a href={`/dashboard/?page=${pages}`} className="page-link">Last</a></li>
                        )}
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default Pagination;