import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    // <div >
      <div className="container">

      <Head>
        <title>Bean Sprouts Childcare Co-Op</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Coming soon!" />
        <p className="description">
          Licensed childcare in Saskatoon.
        </p>
      </main>
      <div className='contact'>
        <form>
          <input type='text' placeholder='hello' />
        </form>
      </div>
      {/* </div> */}
      <Footer />
    </div>
  )
}
