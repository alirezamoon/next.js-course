import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
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
      <h1>Articles</h1>
      <ul>
        <li>
          <Link href="articles/[title]/[id]" as="articles/article-1/1">
            <a>Article 1</a>
          </Link>
        </li>
        <li>
          <Link href="articles/article-2">
            <a>Article 2</a>
          </Link>
        </li>
        <li>
          <Link href="articles/article-3">
            <a>Article 3</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
