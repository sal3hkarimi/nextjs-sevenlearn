import { useRouter } from "next/router"
import { getPost, loadPosts } from "../../lib/posts"


function Blog({ post }) {
    const router = useRouter()
    const { slug } = router.query

    if(router.isFallback){
        return <div>Loading...</div>
    }

    return (
        <div>
            <div>Blog Slug: {slug}</div>
            <h4>Content</h4>
            <p>{post.content}</p>
        </div>
    )
}

export async function getStaticPaths() {
    const posts = await loadPosts()
    const paths = posts.map(post => ({
        params: { slug: post.slug }
    }))

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const post = await getPost(params.slug)

    if(!post[0]){
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: post[0]
        }
    }
}

export default Blog