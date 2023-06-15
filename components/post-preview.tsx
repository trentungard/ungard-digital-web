import { usePreview } from '../lib/sanity'
import { postQuery } from '../lib/queries'
import { Post } from './Post'

export default function PostPreview({ data }) {
  const slug = data?.post?.slug;
  const previewData = usePreview(null, postQuery, { slug });
  const { post } = data;
  return <Post data={previewData ?? post} preview />
}
