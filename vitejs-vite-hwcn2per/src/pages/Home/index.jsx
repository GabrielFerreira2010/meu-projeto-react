import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Header />

      <main className="container">
        <div className="apresentacao">
          <p>
            Olá, somos <br />
            <span>Gabriel Ferreira e Ueliton</span> <br />
            Devs Full Stack
          </p>

          <Link to="/sobre" className="btn btn-red">
            Saiba mais sobre nós!
          </Link>
        </div>

        <figure>
          <img
            className="img-home"
            src="/imagem.svg"
            alt="Ilustração da página inicial"
          />
        </figure>
      </main>

      <Footer />
    </>
  );
}

export default Home;