import createImageUrlBuilder from '@sanity/image-url'
import { sanityConfig } from './config'

export const imageBuilder = (source) =>
  createImageUrlBuilder(sanityConfig).image(source)
