import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

interface PostPlugProps {
  title: string
  coverImage: any
  date: string
  excerpt: string
  author?: { name: string; picture: string }
  slug: string
}

export default function PostPlug({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: PostPlugProps) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} imageObject={coverImage} priority={false} />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/articles/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
