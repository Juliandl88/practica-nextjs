import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout
    title="Home | NextJS"
    description="Descripcion del Home"
    >
    <section className={utilStyles.headingMd}>
        <h1>Página de inicio de Blog</h1>
        <p>
          Ejercicio de prueba - Blog de práctica
        </p>
      </section>

    </Layout>
  )
}
