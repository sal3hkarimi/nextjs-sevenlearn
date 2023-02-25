import axios from "axios"

export const loadPosts = async () => {
    const { data: posts } = await axios.get('http://localhost:5000/posts')
    return posts
}
