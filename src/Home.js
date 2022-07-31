import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./usefetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch( 'http://localhost:8000/blogs')
        //[] this is used in useEffect so that this fun is executed only once when we rerender and not when a state is changed.

    return (
        //Hooks helps us to make a reactive value; Therefore we use useState
        <div className="home">
            {error && <div>{ error}</div> }
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs= {blogs} title = "All Blogs!"/>}
        </div>
      );
}


export default Home;