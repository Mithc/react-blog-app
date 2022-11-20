import { useParams } from "react-router-dom";
import useFetch from "./customHooks/useFetch";
import { Post } from "./interfaces/post";


const PostDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending }: { data: Post | null, isPending: boolean, error: string | null } = useFetch<Post>(`http://localhost:4200/blogs/${id}`);

    return (
        <div className="post-details">
            <h2>Post details - {id}</h2>
        </div>
    );
}

export default PostDetails;