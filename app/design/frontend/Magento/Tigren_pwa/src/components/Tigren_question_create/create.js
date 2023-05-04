import React from "react";
import { useState } from "react";
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Create = () => {
    const CREATE_QUESTION = gql`
      mutation CreateQuestion($input: QuestionInput!) {
        createQuestion(input: $input) {
          message
        }
      }
    `;

    const [input, setInput] = useState({
        customer_name: '',
        title: '',
        content: ''
    });

    const history = useHistory();

    const [createQuestion, { loading, error }] = useMutation(CREATE_QUESTION, {
        onCompleted: () => {
            console.log("ok");
            history.push('/tigren_question/index');
        },
        onError: (error) => {
            console.log("not ok");
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        createQuestion({
            variables: {
                input: input,
            },
        });
    };

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setInput({
            ...input,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="customer_name">Customer Name:</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="text"
                            id="customer_name"
                            name="customer_name"
                            placeholder="Your name.."
                            value={input.customer_name}
                            onChange={handleInputChange}
                            style={{
                                padding: '5px',
                                fontSize: '16px',
                                borderRadius: '3px',
                                border: '1px solid #ccc'
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="title">Title:</label>
                    </div>
                    <div className="col-75">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Your title.."
                            value={input.title}
                            onChange={handleInputChange}
                            style={{
                                padding: '5px',
                                fontSize: '16px',
                                borderRadius: '3px',
                                border: '1px solid #ccc'
                            }}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="content">Content:</label>
                    </div>
                    <div className="col-75">
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Write your question.."
                        value={input.content}
                        onChange={handleInputChange}
                        style={{
                            height:'200px'
                        }}
                    />
                    </div>
                </div>
                <button type="submit">Create new Question</button>
            </form>
        </div>
    );
}

export default Create;
