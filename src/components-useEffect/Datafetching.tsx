import axios from "axios";
import React, { useEffect, useState } from "react";

const Datafetching = () => {
    const [post, setPost] = useState<any>({});
    const [id, setId] = useState<any>(1);
    const [idfromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id);
    };

    useEffect(() => {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts/${idfromButtonClick}`
            )
            .then((res) => {
                console.log(res);
                setPost(res.data);
            })
            .catch((err) => console.log(err));
    }, [idfromButtonClick]);

    return (
        <div>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            ></input>
            <button type="button" onClick={handleClick}>
                Fetch Post
            </button>
            <li key={post.id}>{post.title}</li>
            {/* <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    );
};

export default Datafetching;
