import { useState } from "react";
import BlogList from "./BlogLIst";
import { Post } from "./interfaces/post";

const Home = () => {
    const [blogs, setBlogs] = useState<Post[]>([
        {
            id: 1,
            title: 'Lorem, ipsum dolor',
            author: 'Mithc',
            date: new Date(),
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam nostrum veritatis ipsum labore odit qui vero sunt id corrupti sit sed odio facere, aliquam deleniti facilis exercitationem quam animi?'
        }, {
            id: 2,
            title: 'Lorem, ipsum dolor',
            author: 'Jake',
            date: new Date(),
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam nostrum veritatis ipsum labore odit qui vero sunt id corrupti sit sed odio facere, aliquam deleniti facilis exercitationem quam animi?'
        }, {
            id: 3,
            title: 'Lorem, ipsum dolor',
            author: 'Vasich',
            date: new Date(),
            body: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aperiam nostrum veritatis ipsum labore odit qui vero sunt id corrupti sit sed odio facere, aliquam deleniti facilis exercitationem quam animi?'
        },
    ]);

    return (<div className="home">
        <BlogList blogs={blogs} />
    </div>);
}

export default Home;