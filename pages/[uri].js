import Head from 'next/head';
import Footer from '../components/Footer';
import { client } from '../lib/apollo';
import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

const GET_POST_BY_URI = gql`
  query GetPostByURI($id: ID!) {
    post(id: $id, idType: URI) {
      title
      content
      uri
    }
  }
`;

export default function SlugPage() {
  const router = useRouter();
  const { uri } = router.query;

  const { loading, error, data } = useQuery(GET_POST_BY_URI, {
    variables: { id: uri },
    skip: !uri,
  });

  if (!uri) return null;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const post = data.post;

  return (
    <div>
      <Head>
        <title>Headless WP Next Starter</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <div className="siteHeader">
          <h1 className="title">{post.title}</h1>
        </div>
        <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </main>

      <Footer></Footer>
    </div>
  );
}

// export default function SlugPage({ post }) {

//   return (
//     <div>
//       <Head>
//         <title>Headless WP Next Starter</title>
//         <link rel="icon" href="favicon.ico"></link>
//       </Head>

//       <main>
//           <div className="siteHeader">
//             <h1 className="title">
//                 {post.title}
//             </h1>
//             {/* <p>✍️  &nbsp;&nbsp;{`${post.author.node.firstName} ${post.author.node.lastName}`} | 🗓️ &nbsp;&nbsp;{ new Date(post.date).toLocaleDateString() }</p> */}
//           </div>
//             <article dangerouslySetInnerHTML={{__html: post.content}}>   
//             </article>
//       </main>

//       <Footer></Footer>

//     </div>
//   )
// }


// export async function getStaticProps({ params }){
//   const GET_POSTS_BY_URI = gql`
//     query GetPostByURI($id: ID!) {
//       post(id: $id, idType: URI) {
//         title
//         content
//         uri
//       }
//     }
//   `
//   const response = await client.query({
//     query: GET_POSTS_BY_URI,
//     variables: {
//       id: params.uri
//     }
//   })
//   const post = response?.data?.post
//   return {
//     props: {
//       post
//     }
//   }
// }

// export async function getStaticPaths(){
//     const paths = []
//     return {
//         paths,
//         fallback: 'blocking'
//     }
// }