import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="scrollbar-hide h-screen overflow-y-scroll bg-gray-50">
      <Head>
        <title>Instagram 2.0 DK</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* {Header} */}
      <Header />

      {/* {Feed} */}
      <Feed />

      {/* {Modal} */}
    </div>
  )
}

export default Home
