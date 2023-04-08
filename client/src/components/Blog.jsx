import React, { Component,useState, useEffect } from "react";
import { Link } from "react-router-dom";

const  Blog = () => {

    const [data , setData] = useState();
    useEffect(() => {
      fetch("http://localhost:1337/api/blogs")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, []);
    return (
      <div>
        <section>
          <h2>Ontdek onze acties!</h2>
          <article>
            {data?.data.map((blog) => (
              
              <div key={blog.id}>
                {console.log(blog)}
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{blog.attributes.Title}</h5>
                <p class="card-text">{blog.attributes.Description}</p>
                <Link to={`blog/${blog.attributes.id}`}><a class="btn btn-primary">Bekijk blog</a></Link>
              </div>
            </div>
              </div>
            ))}
          </article>
        </section>
      </div>
    );
}

export default Blog;
