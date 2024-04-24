import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/posts2/postSlice2";

const Post23 = () => {
    const { posts, isLoading, isError } = useSelector(state => state.posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    let content;

    if (isLoading) {
        content = <h1>Loading...</h1>
    }
    if (!isLoading && isError) {
        content = <h1>{content.error.message}</h1>
    }
    if (!isLoading && !isError && posts.length === 0) {
        content = <h1>No Post Found</h1>
    }
    if (!isLoading && !isError && posts.length > 1) {
        content = <ul>
            {
                posts.map(post => <ul key={post.id}>
                    <li> {post.id} {post.name}</li>
                </ul>)
            }
        </ul>
    }
    console.log(posts);



    return <div>{content} </div>
};

export default Post23;