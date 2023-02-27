import {useRouter} from 'next/router'

export default function Post() {
    const router = useRouter()
    const {slug, id} = router.query
    console.log(router);
    return (
        <div>{slug}/{id}</div>
    )
}

// http://localhost:3000/posts/mobile?id=123