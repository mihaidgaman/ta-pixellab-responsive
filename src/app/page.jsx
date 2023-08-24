import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

export default function Home() {
  return (
    <>
      <header className="header container mt-lg-4">
        <Header></Header>
      </header>

      <main className="content"></main>

      <footer className="footer">
        <Footer></Footer>
      </footer>
    </>
  );
}
