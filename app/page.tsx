
import ContactForm from './components/Form';
import FormWrap from './components/FormWrap';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';


export default function Home() {

  return (<>
    <div className="container">
      <main>
        <Header title="Coming soon!" />
        <p className="description">
          Licensed childcare in Saskatoon.
        </p>
      </main>


    </div>
    <div className="form-container">
      <ContactForm />

    </div>

<Footer />
  </>)
}
