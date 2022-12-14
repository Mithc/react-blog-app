import BlogList from "../BlogList/BlogLIst";
import useFetch from "../../customHooks/useFetch";
import { Post } from "../../interfaces/post";

const Home: React.FC = () => {
    const { data: blogs, isPending, error }: { data: Post[] | null, isPending: boolean, error: string | null } = useFetch<Post[]>('http://localhost:4200/blogs')
    // const handleDelete = (id: number) => setBlogs(blogs.filter(blog => blog.id !== id))

    // TODO: fix
    // useEffect(() => {
    //     console.log('on delete');
    // }, [handleDelete])


    return (<div className="home">
        {error && <div className="error"> {error}</div>}
        {isPending && <div className="loading-massage">LOADING.... It would be cool to add loader here :\</div>}
        {!isPending && <BlogList blogs={blogs!} handleDelete={() => null} />}
    </div>);
}

export default Home;