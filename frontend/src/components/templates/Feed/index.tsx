import Head from 'next/head'

import Style from './style'

import Navbar from 'components/organisms/Navbar'

const Feed = () => {
  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>

      <Style>
        <Navbar />

        <div>
          <h1>Feed</h1>
        </div>
      </Style>
    </>
  )
}

export default Feed
