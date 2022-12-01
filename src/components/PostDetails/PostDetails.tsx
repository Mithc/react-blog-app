import { useParams } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import { Post } from "../../interfaces/post";
import './style.scss';


const PostDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending }: { data: Post | null, isPending: boolean, error: string | null } = useFetch<Post>(`http://localhost:4200/blogs/${id}`);

    const getDate: (date: string) => string = (date) => {
        const parsedDate = new Date(Date.parse(date))
        const day = parsedDate.getDay() > 9 ? `${parsedDate.getDay()}` : `0${parsedDate.getDay()}`
        const month = parsedDate.getMonth() > 9 ? `${parsedDate.getMonth()}` : `0${parsedDate.getMonth()}`

        return day + '-' + month + '-' + parsedDate.getFullYear()
    }
    return (<>
        {error && <div className="error"> {error}</div>}
        {isPending && <div className="loading-massage">LOADING.... It would be cool to add loader here :\</div>}

        {!isPending && <div className="post-details">

            <h2 className="post-details-title">{blog?.title}</h2>
            <p className="post-details-body">{blog?.body}</p>
            <div className="post-details-info">
                <p>{blog?.author}</p>
                <div>{getDate(blog!.date)}</div>
            </div>
        </div>}
    </>
    );
}

export default PostDetails;