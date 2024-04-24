import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/posts/postSlice";

const Post = () => {
    const { posts, isLoading, isError, error } = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    let content;

    if (isLoading) {
        content = <h1>Loading...</h1>
    }
    if (!isLoading && isError) {
        content = <h1>{error.message}</h1>
    }
    if (!isLoading && !isError && posts.length === 0) {
        content = <h1>No Post Found.</h1>
    }
    if (!isLoading && !isError && posts.length > 1) {
        content = <ul>
            {
                posts.map(post => <ul key={post.id}>
                    <li> {post.id} {post.title}</li>
                </ul>)
            }
        </ul>
    }

    return <div>{content}</div>
};

export default Post;