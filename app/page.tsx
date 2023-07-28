
import ContactForm from './components/Form';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import styles from './page.module.css'

export default function Home() {

  return (<>
    <div className="container">
      <main>
        <Header title="Coming soon!" />
        <p className="description">
          Licensed childcare in Saskatoon.
        </p>
      </main>

      <div className={styles.formWrap}>
      </div>

    </div>

    <Footer />
  </>)
}
