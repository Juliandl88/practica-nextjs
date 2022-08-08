
import Layout from '../../components/Layout';

export default function primerPost({data}) {
  return (
    <Layout>
      <h1>
        {data.id} - {data.title}
      </h1>
      <p>{data.body}</p>
      
    </Layout>
  );
}

// Método para hacer las rutas dinamicas y acceder a cada uno de los posts
export async function getStaticPaths({}) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id : `${id}` } }));
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.error(error);
  }
    
  }

  // Obteninedo la data de la API especifica de cada post
export async function getStaticProps({params}){ // Metodo para la generacion de paginas estáticas
  try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
      const data = await res.json();
      return {
        props: {
          data,
        },
      }
  } catch (error) {
      console.error(error);
  }
}

