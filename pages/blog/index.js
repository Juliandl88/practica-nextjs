
import Link from "next/link";
import Layout from '../../components/Layout';

export default function index({data}) {
  return (
    <div >
      <Layout href="/blog/primer-post">
      <h1>INICIO</h1>
      {
        data.map(({ id, title, body}) => (
       <div key={id}>
          <h3>{id} - {title}</h3>
          <p>{body}</p>
       </div>
        ))
      }
      </Layout>
    </div>
  )
}

export async function getStaticProps(){
  try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      return {
        props: {
          data
        }
      }
  } catch (error) {
      console.error(error);
  }
}
