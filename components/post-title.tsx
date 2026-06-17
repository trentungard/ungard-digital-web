import { type ReactNode } from 'react'

export default function PostTitle({ children }: { children?: ReactNode }) {
  return (
    <h1 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none my-12 text-center md:text-left">
      {children}
    </h1>
  )
}
