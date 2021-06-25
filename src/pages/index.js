import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";
import Error from 'next/error'

import { useEffect, useState } from "react";
import axios from "axios";

//components
import Posts from "./../components/posts";
import Navbar from "./../components/navbar";

function Home(props) {

  console.log(props.errorCode);
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setPosts(res.data));
  // }, []);


  if(props.errorCode){
    // return <Error statusCode={props.errorCode} />
    return <h1>erorrrrrrrrrrrrrrrrrrrrrrrrrrr</h1>
  }


  return (
    <div>
      <Head>
        <title>دوره آموزشی راکت</title>
      </Head>
      <h1>navbar</h1>
      <Navbar />
      <h1>Posts</h1>
      <Posts posts={props.posts} />
    </div>
  );
}

export async function getServerSideProps() {
  let res = await axios.get("https://jsonplaceholder.typicode.com/post");
  let errorCode = res.status===200 ? false : res.status;
  let posts = await res.data;

  return {
    props: {
      posts,
      errorCode
    },
  };
}

export default Home;
