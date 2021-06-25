import axios from "axios";

const Post = (props) => {
  console.log(props);
  return (
    <>
      <h2>{props.posts.title}</h2>
      <h5>{props.posts.body}</h5>
    </>
  );
};

export async function getServerSideProps({ params }) {
  let res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  let posts = await res.data;

  return {
    props: {
      posts,
    },
  };
}

export default Post;
