// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
// const inter = Inter({ subsets: ['latin'] })

import { loadPosts } from '../lib/posts'
import Link from 'next/link'

type homeProps = {
  posts?: any
  post?: any
}

export default function Home({ posts }: homeProps) {
  const postTitle = posts ? posts.map((post: any) => (
    <Link 
    prefetch={true}
    href={{
      pathname: 'posts/[slug]',
      query: {
        slug: post.slug,
        foo: 'fooo'
      }
    }}>
      <p key={post.id}>{post.title}</p>
    </Link>
  )) : <p>No Post</p>

  return (
    <>
      <div>
        {postTitle}
      </div>
    </>
  )
}


export async function getStaticProps() {
  const posts = await loadPosts()

  return {
    props: {
      posts
    }
  }
}