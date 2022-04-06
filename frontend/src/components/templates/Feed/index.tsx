import { FeedContext, useFeed } from './logic'

import { FeedStyle } from './style'

import LeftSide from 'components/organisms/LeftSide'
import Navbar from 'components/organisms/Navbar'
import Posts from 'components/organisms/Posts'
import RightSide from 'components/organisms/RightSide'

import Head from 'next/head'

const Feed = () => {
  const { showLeftSide, contextValue } = useFeed()

  return (
    <>
      <Head>
        <title>Feed</title>
      </Head>

      <FeedStyle>
        <FeedContext.Provider value={contextValue}>
          <Navbar />

          {showLeftSide && <LeftSide />}

          <Posts />

          <RightSide />
        </FeedContext.Provider>
      </FeedStyle>
    </>
  )
}

export default Feed
