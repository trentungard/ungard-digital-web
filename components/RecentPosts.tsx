import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function RecentPosts({
  allPosts,
}) {
  const posts = allPosts.slice(0, 3);
  return (
    <section>
      <div className='flex flex-wrap justify-between flex-col lg:flex-row'>
        { posts.map((post, i) => (
          <div className={`${i === 0 ? 'flex-auto w-full' : 'flex-auto w-full lg:flex-initial lg:w-5/12'}`} key={i}>
            <div className="mb-8 md:mb-16">
              <CoverImage slug={post.slug} title={post.title} imageObject={post.coverImage} priority />
            </div>
            <div className="mb-20 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 md:mb-28">
              <div>
                <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
                  <Link href={`/articles/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <div className="mb-4 text-lg md:mb-0">
                  <Date dateString={post.date} />
                </div>
              </div>
              <div>
                <p className="mb-4 text-lg leading-relaxed">{post.excerpt}</p>
                {post.author && <Avatar name={post.author.name} picture={post.author.picture} />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
