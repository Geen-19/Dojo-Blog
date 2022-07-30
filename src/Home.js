import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]  = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(Res => {
                return Res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            });
    }, []);
        //[] this is used in useEffect so that this fun is executed only once when we rerender and not when a state is changed.
    return (
        //Hooks helps us to make a reactive value; Therefore we use useState
        <div className="home">
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs= {blogs} title = "All Blogs!"/>}
        </div>
      );
}


export default Home;