
import Link from "next/link";
import Layout from '../../components/Layout';

export default function index({data}) {
  return (
    <div >
      <Layout href="/blog/primer-post">
      <h1>INICIO </h1>
      {                             // Se recorre el array de objetos y se muestra cada objeto
        data.map(({ id, title, body}) => (
       <div key={id}>
          <h3>
          <Link href={`/blog/${id}`}>  
          <a>{id} - {title}</a>
          </Link>
          </h3>
          <p>{body}</p>
       </div>
        ))
      }
      </Layout>
    </div>
  )
}

// Obteninedo la data de la API
export async function getStaticProps(){ // Metodo para la generacion de paginas estáticas
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
