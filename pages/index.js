import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

import { useEffect, useState } from "react";
import axios from "axios";

function Home(props) {
  console.log(props);
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setPosts(res.data));
  // }, []);

  return (
    <div>
      <h1>navbar</h1>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/courses">
            <a>Courses</a>
          </Link>
        </li>
      </ul>
      <h1>Posts</h1>
      <ul>
        {props.posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href="/articles/[id]" as={`/articles/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  let posts = await res.data;

  return {
    props: {
      posts,
    },
  };
}

export default Home;
