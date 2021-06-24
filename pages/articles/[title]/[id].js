import { route } from "next/dist/next-server/server/router";
import { useRouter } from "next/router";

const SingleArticle = () => {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <h1>title: {router.query.title}</h1>
      <h2>id: {router.query.id}</h2>
    </>
  );
};

export default SingleArticle;
