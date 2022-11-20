import { useEffect, useState } from "react";
import BlogList from "./BlogLIst";
import { Post } from "./interfaces/post";

const Home: React.FC = () => {
    const [blogs, setBlogs] = useState<Post[]>([]);
    const [isPending, setIsPending] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:4200/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error('Data couldn\'t be fatched')
                    }
                    res.json().then(data => {
                        setBlogs(data as Post[])
                        setIsPending(false)
                    })
                })
                .catch(e => {
                    setError(e)
                    setIsPending(false)
                });
        }, 500)
    }, [])

    const handleDelete = (id: number) => setBlogs(blogs.filter(blog => blog.id !== id))

    useEffect(() => {
        console.log('on delete');
    }, [handleDelete])


    return (<div className="home">
        {error && <div className="error"> {error}</div>}
        {isPending && <div className="loading-massage">LOADING.... It would be cool to add loader here :\</div>}
        {!isPending && <BlogList blogs={blogs} handleDelete={handleDelete} />}
    </div>);
}

export default Home;