import React, { useState, useEffect } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import './styles.css';


const Edit = ({ questionId }) => {
    const { id } = useParams();
    const [customerName, setCustomerName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const GET_QUESTION = gql`
      query getQuestion($id: Int!) {
        getQuestion(id: $id) {
          id
          customer_name
          title
          content
        }
      }
    `;
    const { loading, error, data } = useQuery(GET_QUESTION, {
        variables: { id: Number(id) },
    });

    useEffect(() => {
        if (data) {
            setCustomerName(data.getQuestion[0].customer_name);
            setTitle(data.getQuestion[0].title);
            setContent(data.getQuestion[0].content);
        }
    }, [data]);
    const EDIT_QUESTION = gql`
    mutation EditQuestion($input: QuestionInput!) {
      editQuestion(input: $input) {
        message
      }
    }
  `;

    const [editQuestion] = useMutation(EDIT_QUESTION);

    const handleSubmit = (e) => {
        e.preventDefault();
        editQuestion({
            variables: {
                input: {
                    id: id,
                    customer_name: customerName,
                    title: title,
                    content: content,
                },
            },
        }).then(() => {
            // handle success
        }).catch((error) => {
            // handle error
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label>Customer Name:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
                    </div>
                    <div className="col-25">
                        <label>Title:</label>
                    </div>
                    <div className="col-75">
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="col-25">
                        <label>Content:</label>
                    </div>
                    <div className="col-75">
                        <textarea value={content} style={{
                            height:'200px'
                        }} onChange={(e) => setContent(e.target.value)} />
                    </div>
                    <button type="submit">Save Changes</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;
