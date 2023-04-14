import React, { Component,useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cover  from "../assets/img/start-evenment.jpeg"

const  Blog = () => {

    const [data , setData] = useState();
    useEffect(() => {
      fetch("http://localhost:1337/api/blogs?populate=*")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }, []);
    return (
      <div>
        <section className="fullheight container">
          <h2 className="mb-2">Ontdek hier onze acties!</h2>
          <h3 className="mb-5 light">Plus zo leer je ons ook een beetje kennen!</h3>
          <article className="blogs">
            {data?.data?.map((blog) => (
              console.log(blog.attributes),
              
              <div key={blog.id}>
            <div class="card blog">
              <img src={cover} class="card-img-top" alt="..."/>
            <h5 class="card-title">{blog?.attributes?.title}</h5>
              <div class="card-body">
                <p class="card-text semi-light">{blog?.attributes?.description}</p>
                {/* <Link to={`blog/${blog?.attributes?.id}`}><a class="btn btn-primary">Lees meer</a></Link> */}
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
