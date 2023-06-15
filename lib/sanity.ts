import createImageUrlBuilder from '@sanity/image-url'
import { definePreview } from 'next-sanity/preview'
import { sanityConfig } from './config'


export const imageBuilder  = source => createImageUrlBuilder(sanityConfig).image(source);

// export const urlForImage = (source) =>
//   imageBuilder().image(source).auto('format').fit('max')

export const usePreview = definePreview({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
})
