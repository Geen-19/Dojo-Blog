import { useParams } from "react-router-dom";

const BlogDetails = () => {
    // useParams allows to grab route parameters
    const {id} = useParams();
    return ( 
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
        </div>
     );
}
 
export default BlogDetails;