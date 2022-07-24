import type { NextPage } from "next";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";

type PostData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPostData = async () =>
  await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();

const Home: NextPage = () => {
  const { data, isLoading } = useQuery(["posts"], getPostData);

  if (isLoading) return <h2>Loading...</h2>;
  if (!data) return <h2>No Data...</h2>;
  return (
    <div className="ml-4 grid grid-cols-3  gap-4 ">
      {data.map((post) => (
        <div
          key={post.id}
          className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-300 dark:text-white">
            {post.title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {post.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<PostData>(["posts"], getPostData);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
