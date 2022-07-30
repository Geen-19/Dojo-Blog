const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;
    return(
        <div className="blog-list" key= {blogs.id}>
            <h2>{title} </h2>
            {blogs.map((blog) =>  (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                   
                </div>
           ))}
        </div>
    );
}
export default BlogList;