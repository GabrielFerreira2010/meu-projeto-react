import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';

function Page404() {
  return (
    <>
      <Header />
      <Container>
        <h1>Erro 404</h1>
        <h2>Página não encontrada!</h2>
        <p>O endereço que você acessou não existe.</p>
      </Container>
      <Footer />
    </>
  );
}

export default Page404;
