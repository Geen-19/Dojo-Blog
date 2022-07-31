import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs]  = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(Res => {
                console.log(Res);
                if(!Res.ok){
                    throw Error('could not fetch data for that resource')
                }
                return Res.json();
            })
            .then(data => {
                setError(null);
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, []);
        //[] this is used in useEffect so that this fun is executed only once when we rerender and not when a state is changed.

    return (
        //Hooks helps us to make a reactive value; Therefore we use useState
        <div className="home">
            {error && <div>{error}</div> }
            {isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs= {blogs} title = "All Blogs!"/>}
        </div>
      );
}


export default Home;