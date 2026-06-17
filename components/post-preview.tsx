import { Post } from './Post'

// Real-time preview was removed when next-sanity dropped definePreview in v5.
// This component is unused — preview prop falls back to static data.
export default function PostPreview({ data }) {
  return <Post data={data?.post} preview />
}
