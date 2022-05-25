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
        <p>{posts.data.frontmatter}</p>
        <span className="pt-32">
          {/* {posts.map((post, index) => (
            <div
              className="text-green-500 text-3xl bg-blue-100 mt-14"
              key={post.frontmatter}
            >
              <h1>{post.slug}</h1>
              <h1> hallo {post.frontmatter.date}</h1>
            </div>
          ))} */}
        </span>
      </div>
    </>
  );
}

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getStaticProps() {
  // Get files from the posts dir
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const slug = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const { data } = matter(fileContents);
    // console.log(data.title);

    return {
      slug,
      data,
    };
  });

  return {
    props: {
      posts: postsDirectory,
    },
  };
}
