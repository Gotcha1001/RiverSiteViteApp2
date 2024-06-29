import React from 'react';

const Pagination = ({ requestsPerPage, totalRequests, paginate, currentPage, nextPage, prevPage }) => {
    return (
        <nav>
            <ul className="flex justify-center mt-4">
                <li>
                    <button
                        onClick={prevPage}
                        className={`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === 1 ? 'cursor-not-allowed text-gray-500' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => paginate(currentPage)}
                        className={`page-link px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === 1 ? 'bg-teal-500 text-white' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                    >
                        {currentPage}
                    </button>
                </li>
                <li>
                    <button
                        onClick={nextPage}
                        className={`page-link mx-2 px-4 py-2 rounded shadow-md border border-teal-500 ${currentPage === Math.ceil(totalRequests / requestsPerPage) ? 'cursor-not-allowed text-gray-500' : 'text-teal-500 hover:text-white hover:bg-teal-500 transition transform hover:translate-y-1 hover:shadow-lg'}`}
                        disabled={currentPage === Math.ceil(totalRequests / requestsPerPage)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
