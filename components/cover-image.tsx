import cn from 'classnames'
import Link from 'next/link'
import { imageBuilder } from '../lib/sanity'
import Image from 'next/image'

interface CoverImageProps {
  title: string;
  url?: string;
  imageObject: any;
  slug?: string;
  priority: boolean;
}

export default function CoverImage({ title, url, imageObject, slug, priority = false }: CoverImageProps) {
  const image = (
    <Image
      height={540}  
      width={1240}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small h-full', {
        'hover:shadow-medium transition-shadow duration-200 h-full': slug,
      })}
      src={imageBuilder(imageObject).width(1240).height(540).url()}
      priority={priority}
    />
  )

  return (
    <>
      {slug ? (
        <Link aria-label={title} as={`/articles/${slug}`} href="/articles/[slug]">
          {image}
        </Link>
      ) : (
        image
      )}
    </>
  )
}

