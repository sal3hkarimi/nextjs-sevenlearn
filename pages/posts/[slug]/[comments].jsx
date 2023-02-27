import { useRouter } from "next/router"

export default function Comments() {
    const router = useRouter()
    const { slug, Comments } = router.query
    return (
        <>{slug}/{Comments}</>
    )
}

// http://localhost:3000/posts/mobile/thisiscomment