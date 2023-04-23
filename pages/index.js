import Head from 'next/head';
import Footer from '../components/Footer';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/test-data';
import { client } from '../lib/apollo';
import { gql, useQuery } from '@apollo/client';


const GET_POSTS = gql`
  query GetAllPosts {
    posts {
      nodes {
        title
        content
        uri
        date
      }
    }
  }
`;

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const posts = data.posts.nodes;

  return (

    <div className="container">
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <h1 className="title">
          Headless WordPress Next.js Starter
        </h1>

        <div className="grid">
        {
          posts.map((post) => (
            <PostCard key={post.uri} post={post}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>{post.date}</p>
            </PostCard>
          ))
        }
        </div>
      </main>

      <Footer></Footer>
    </div>
    
  );
}

export default Posts;

// export default function Home({ posts }) {
//   return (
//     <div className="container">
//       <Head>
//         <title>Headless WP Next Starter</title>
//         <link rel="icon" href="favicon.ico"></link>
//       </Head>

//       <main>
//         <h1 className="title">
//           Headless WordPress Next.js Starter
//         </h1>

//         <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p>

//         <div className="grid">
//           {
//             posts.map((post) => {
//               return (
//                 <PostCard key={post.uri} post={post}></PostCard>
//               )
//             })
//           }
//         </div>
//       </main>

//       <Footer></Footer>
//     </div>
//   )
// }

// export async function getStaticProps(){
//   const GET_POSTS = gql`
//     query GetAllPosts {
//       posts {
//         nodes {
//           title
//           content
//           uri
//           date
//         }
//       }
//     }
//   `
//   const response = await client.query({
//     query: GET_POSTS
//   })
//   // const response = await getAllPosts()
//   const posts = response?.data?.posts?.nodes
//   return {
//     props: {
//       posts
//     }
//   }
// }


