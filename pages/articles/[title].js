import { useRouter } from "next/router";

const SingleArticle = () => {
  const router = useRouter();
  return <h1>{router.query.title}</h1>;
};

export default SingleArticle;
