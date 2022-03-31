import { FeedStyle } from './style'

import Navbar from 'components/organisms/Navbar'
import Posts from 'components/organisms/Posts'

import Head from 'next/head'

const Feed = () => (
  <>
    <Head>
      <title>Feed</title>
    </Head>

    <FeedStyle>
      <Navbar />

      <aside></aside>

      <Posts />

      <aside></aside>
    </FeedStyle>
  </>
)

export default Feed
