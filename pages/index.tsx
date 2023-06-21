import { Header } from '../components/Headers';
import Hero from '../components/Hero';
import { Layout } from '../components/Layout';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import { ContentContainer } from '../components/ContentContainer';
import ungardDigitalOne from '../public/ungard-digital-one.png';
import { MaintenanceMode } from '../components/MaintenanceMode';
import { ArrowRight } from "../components/icons/ArrowRight";
import RecentPosts from '../components/RecentPosts';
import { all } from 'axios';

export default function Index({ allPosts, preview }) {
  return ( 
    <Layout preview={preview}>
      <Head>
        <title>Ungard Digital</title>
      </Head>
      <Header />
      <Hero />
      <section className='py-20 bg-gradient-to-br from-avenue-blue via-ungard-blue to-moonbeam text-white text-center'>
        <ContentContainer>
          <h2 className='text-4xl font-bold'>What We Do</h2>
          <p className='text-2xl py-4'>We provide a wide range of digital services, but specialize in the following areas.</p>
          <ul className='text-2xl font-light'>
            <li className='py-2'>Ecommerce Website Development</li>
            <li className='py-2'>Web Application/Software Development</li>
            <li className='py-2'>Website Development</li>
            <li className='py-2'>Digital Marketing Consulting</li>
            <li className='py-2'>Technology Consulting</li>
          </ul>
        </ContentContainer>
      </section>
      <section className='py-20'>
        <ContentContainer>
          <div className='flex flex-col xl:flex-row gap-10 items-center'>
            <div className='flex-1'>
              <img src={ungardDigitalOne.src} />
            </div>
            <div className='flex-1'>
              <p className='text-4xl font-bold'>We help businesses of all sizes, but our best fit is with businesses that are:</p>
              <ul className='text-2xl font-light list-disc p-5'>
                <li>Currently "offline" and looking to establish a digital presence</li>
                <li>Small to medium sized companies looking to revitalize existing digital presence</li>
                <li>Need a fully custom website or web application built from scratch</li>
                <li>Looking for tech consulting</li>
              </ul>
            </div>
          </div>
        </ContentContainer>
      </section>
      <section className='py-20 bg-kinda-white'>
        <ContentContainer className='flex flex-col gap-5'>
          <h2 className='text-4xl font-bold max-w-2xl leading-relaxed'>Want To DIY? We Can Help With That Too! See Our Educational Resources Below.</h2>
          {allPosts && (
              <RecentPosts
                allPosts={allPosts}
              />
          )}
          {/* <div className='grid grid-rows-3 lg:grid-rows-2 grid-cols-1 lg:grid-cols-2  gap-5 lg:max-h-[500px] pb-5 auto-rows-max'>
            {morePosts && (
              <MoreStories 
                posts={morePosts}
              />
            )}
          </div> */}
          <a className='text-xl m-auto p-4 flex gap-2 items-center hover:cursor-pointer hover:text-gray-500'>
            View All Articles
            <ArrowRight width={20} />
          </a>
        </ContentContainer>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1
  }
}
