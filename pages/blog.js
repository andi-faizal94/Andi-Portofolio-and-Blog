import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { sortByDate } from '../utils';

export default function Blog({ posts, src }) {
  const [image, setImage] = useState('/defaultImage');
  console.log(posts);
  useEffect(() => {
    if (src) {
      setImage(src);
    }
  }, [src]);

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
        <span className="pt-32">
          {posts.map((post, index) => (
            <div
              className="text-green-500 text-3xl bg-blue-100 mt-14"
              key={post.frontmatter}
            >
              <h1>{post.slug}</h1>
              <h1> hallo {post.frontmatter.title}</h1>
              <h1> hallo {post.frontmatter.date}</h1>
              <h1> hallo {post.frontmatter.excerpt}</h1>

              {src && (
                <Image
                  className="object-cover absolute h-screen z-0"
                  src={post.frontmatter.image_cover}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              )}
            </div>
          ))}
        </span>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    console.log({ data: frontmatter });

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
