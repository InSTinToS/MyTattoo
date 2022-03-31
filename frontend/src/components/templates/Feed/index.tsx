import Head from 'next/head'

import Style from './style'

import Navbar from 'components/organisms/Navbar'
import Posts from 'components/organisms/Posts'

const Feed = () => {
  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>

      <Style>
        <Navbar />

        <aside></aside>

        <Posts />

        <aside></aside>
      </Style>
    </>
  )
}

export default Feed
