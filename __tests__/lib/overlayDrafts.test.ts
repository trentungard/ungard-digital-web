import { describe, it, expect, vi } from 'vitest'

vi.mock('next-sanity', () => ({
  createClient: vi.fn(() => ({})),
}))

import { overlayDrafts } from '../../lib/sanity.server'

describe('overlayDrafts', () => {
  it('returns an empty array for null input', () => {
    expect(overlayDrafts(null)).toEqual([])
  })

  it('returns an empty array for undefined input', () => {
    expect(overlayDrafts(undefined)).toEqual([])
  })

  it('returns non-draft documents unchanged', () => {
    const docs = [
      { _id: 'doc1', title: 'Hello' },
      { _id: 'doc2', title: 'World' },
    ]
    const result = overlayDrafts(docs)
    expect(result).toHaveLength(2)
    expect(result[0]._id).toBe('doc1')
    expect(result[1]._id).toBe('doc2')
  })

  it('overlays a draft over its published counterpart', () => {
    const docs = [
      { _id: 'abc', title: 'Published' },
      { _id: 'drafts.abc', title: 'Updated in Draft' },
    ]
    const result = overlayDrafts(docs)
    expect(result).toHaveLength(1)
    expect(result[0]._id).toBe('drafts.abc')
    expect(result[0].title).toBe('Updated in Draft')
  })

  it('keeps a draft that has no published counterpart', () => {
    const docs = [{ _id: 'drafts.brand-new', title: 'New Draft' }]
    const result = overlayDrafts(docs)
    expect(result).toHaveLength(1)
    expect(result[0]._id).toBe('drafts.brand-new')
  })

  it('handles a mix of published, overlaid, and draft-only documents', () => {
    const docs = [
      { _id: 'post-1', title: 'Post 1 Published' },
      { _id: 'post-2', title: 'Post 2 Published' },
      { _id: 'drafts.post-2', title: 'Post 2 Draft' },
      { _id: 'drafts.post-3', title: 'Post 3 Draft Only' },
    ]
    const result = overlayDrafts(docs)
    expect(result).toHaveLength(3)

    const ids = result.map((d) => d._id)
    expect(ids).toContain('post-1')
    expect(ids).toContain('drafts.post-2')
    expect(ids).toContain('drafts.post-3')
    expect(ids).not.toContain('post-2')
  })

  it('throws if any document is missing _id', () => {
    const docs = [{ title: 'No ID' }]
    expect(() => overlayDrafts(docs)).toThrow('Ensure that `_id` is included')
  })
})
