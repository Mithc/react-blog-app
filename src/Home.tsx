import { useEffect, useState } from "react";
import BlogList from "./BlogLIst";
import { Post } from "./interfaces/post";

const Home = () => {
    const [blogs, setBlogs] = useState<Post[]>([]);

    useEffect(() => {
        fetch('http://localhost:4200/blogs')
            .then(data => {
                data.json().then(data => setBlogs(data as Post[]))
            });
    }, [])

    const handleDelete = (id: number) => setBlogs(blogs.filter(blog => blog.id !== id))

    useEffect(() => {
        console.log('on delete');
    }, [handleDelete])


    return (<div className="home">
        <BlogList blogs={blogs} handleDelete={handleDelete} />
    </div>);
}

export default Home;