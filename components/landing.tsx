import { Layout } from '../components/Layout';
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Container from './container'
import Intro from './intro'
import MoreStories from './more-stories'
import RecentPosts from './RecentPosts';

export default function Landing({ allPosts, preview }) {
  const [heroPost, ...morePosts] = allPosts || []
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Ungard Digital | Landing</title>
        </Head>
        <Container>
          <Intro />
          {allPosts && (
            <RecentPosts
              allPosts={allPosts}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
