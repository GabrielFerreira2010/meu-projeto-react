
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Header />

      <Container>
        <main className={styles.home}>
          <div className={styles.apresentacao}>
            <p>
              Olá, somos <br />
              <span>Gabriel Ferreira e Ueliton</span> <br />
              Devs Full Stack
            </p>

            <Link
              to="/sobre"
              className={`${styles.btn} ${styles.btn_red}`}
            >
              Saiba mais sobre nós!
            </Link>
          </div>

          <figure>
            <img
              className={styles.img_home}
              src={`${import.meta.env.BASE_URL}imagem.svg`}
              alt="Ilustração da página inicial"
            />
          </figure>
        </main>
      </Container>

      <Footer />
    </>
  );
}

export default Home;
