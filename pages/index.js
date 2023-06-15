import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="歡迎來到我的頁面app!" />
        <p className="description">
          阿羅哈!五木可樂果炒麵</p>
      </main>

      <Footer />
    </div>
  )
}
