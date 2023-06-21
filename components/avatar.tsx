import Image from 'next/image'
import { imageBuilder } from '../lib/sanity'

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <div className="relative w-12 h-12 mr-4">
        <Image
          src={imageBuilder(picture).height(96).width(96).fit('crop').url()}
          className="rounded-full"
          height={96}
          width={96}
          alt={name}
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}
