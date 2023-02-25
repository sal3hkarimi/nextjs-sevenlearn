// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {
  const postTitle = posts.map(post => <p key={post.id}>{post.title}</p>)

  return (
    <>
      <div>
        {postTitle}
      </div>
    </>
  )
}


export async function getStaticProps() {
  const posts = [
    { id: 1, title: 'post 1' },
    { id: 2, title: 'post 2' },
  ]

  return {
    props: {
      posts
    }
  }
}