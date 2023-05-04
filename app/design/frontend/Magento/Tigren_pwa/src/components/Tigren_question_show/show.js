import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import './styles.css';

const Show = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const GET_QUESTION_DATA = gql`
    query GetQuestionData($offset: Int!, $limit: Int!) {
      getQuestionData(offset: $offset, limit: $limit) {
        id
        customer_name
        title
        content
      }
    }
  `;
    const { loading, error, data } = useQuery(GET_QUESTION_DATA, {
        variables: { offset: (currentPage - 1) * itemsPerPage, limit: itemsPerPage },
    });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    const totalPages = Math.ceil(data.getQuestionData.length / itemsPerPage);
    const currentItems = data.getQuestionData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Customer Name</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {currentItems.map(({ id, customer_name, title, content }) => (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{customer_name}</td>
                        <td>{title}</td>
                        <td>{content}</td>
                        <td>
                            <Link to={`/tigren_question/edit/${id}`}>
                                <button className="btn">Edit</button>
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="pagination">
                <button
                    className="btn-pagination"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(1)}
                >
                    Start
                </button>
                <button
                    className="btn-pagination"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    pre
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                        className="btn-pagination"
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={currentPage === page ? "active" : ""}
                    >
                        {page}
                    </button>
                ))}
                <button
                    className="btn-pagination"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    next
                </button>
                <button
                    className="btn-pagination"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                >
                    End
                </button>
            </div>
            <Link to="/tigren_question/create">
                <button className="btn">Go to Create Question Page</button>
            </Link>
        </div>
    );
};
export default Show;
