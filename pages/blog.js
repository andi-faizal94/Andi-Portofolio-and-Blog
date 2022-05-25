import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';
import Navbar from '../components/Navbar';
import Head from 'next/head';

export default function blog({ posts }) {
  console.log(posts);

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Navbar />
      <div className="w-full min-h-full  pt-24">
        <p className="text-green-500 py-2 text-2xl font-semibold">
          Hi, my name is
        </p>
        {/* <p>{posts.frontmatter.title}</p> */}
        <span className="pt-32">
          {posts.map((post, index) => (
            <div
              className="text-green-500 text-3xl bg-blue-100 mt-14"
              key={post.frontmatter}
            >
              <h1>{post.slug}</h1>
              <h1> hallo {post.frontmatter.title}</h1>
              <h1> hallo {post.frontmatter.date}</h1>
            </div>
          ))}
        </span>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)
    console.log({data:frontmatter})

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts,
    },
  }
}
