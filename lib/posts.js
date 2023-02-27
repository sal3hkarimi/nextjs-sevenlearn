import axios from "axios"

export const loadPosts = async () => {
    const { data: posts } = await axios.get('http://localhost:5000/posts')
    return posts
}


export const getPost = async (slug) => {
    const { data: posts } = await axios.get('http://localhost:5000/posts', {
        params: {
            slug
        }
    })
    return posts
}