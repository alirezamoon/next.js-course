import Link from "next/link";

const Pages = (props) => {
    console.log(props)
  return (
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
  );
};

export default Pages;
