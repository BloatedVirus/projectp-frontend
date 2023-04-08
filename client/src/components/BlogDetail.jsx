//create new component
import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';

const BlogDetail = (props) => {

    const { id } = props;
    const [blog, setBlog] = useState();


    useEffect(() => {
        fetch(`http://localhost:1337/api/blogs/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }, []);

    return (
        <div>
        <h1>{}</h1>
        <p>{}</p>
        </div>
    );
    }
