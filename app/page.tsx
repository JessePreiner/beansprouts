
import styles from '../app/page.module.css';
import ContactForm from './components/Form';
import FacilityCarousel from './components/carousel/FacilityCarousel';
import Footer from './components/footer/Footer';

export default function Home() {

  return (<>
    <div className="container">
      <main style={{
        width: '100%',
        color: 'rgba(10,10,10,1)',
        background: 'rgba(138,25,23,0.1)',
        paddingBottom: '0',
        borderRadius: '0.5rem',
      }}>
        <div style={{
          display: 'flex', flexDirection: 'column'
        }}>
          <p style={{ marginBottom: '1rem', fontSize: '1.6rem', textAlign: 'center', color: 'white' }}>
            Licensed childcare in
          </p>
          <p style={{ marginTop: 0, fontSize: '2rem', textAlign: 'center', color: 'white' }}>
            Saskatoon
          </p>
        </div>
        <FacilityCarousel />
      </main>

      <div className={styles.formWrap}>
        <ContactForm />
      </div>

    </div>

    <Footer />
  </>)
}
