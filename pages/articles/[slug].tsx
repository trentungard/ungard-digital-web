import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/post-body';
import MoreStories from '../../components/more-stories';
import { Header } from '../../components/Headers';
import PostHeader from '../../components/post-header';
import Comments from '../../components/Comments';
import SectionSeparator from '../../components/section-separator';
import { Layout } from '../../components/Layout';
import { getAllPostsForHome, getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/post-title';
import Head from 'next/head';
import { CMS_NAME } from '../../lib/constants';
import Form from '../../components/Form';

export default function Post({ post, allPosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Header />
      <Container className='mx-auto max-w-4xl'>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Ungard Digital
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>

            {/* <Comments comments={post.comments} /> */}
            {/* <Form _id={post._id} /> */}

            <SectionSeparator />
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  const data = await getPostAndMorePosts(params.slug, preview)
  return {
    props: {
      preview,
      post: data?.post || null,
      allPosts,
    },
    revalidate: 1
  }
}

export async function getStaticPaths({slug}) {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
};