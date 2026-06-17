import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import PostBody from '../../components/post-body'

const makeBlock = (text: string, key = 'block1') => ({
  _type: 'block' as const,
  _key: key,
  style: 'normal',
  markDefs: [],
  children: [{ _type: 'span', _key: `${key}-span`, text, marks: [] }],
})

describe('PostBody', () => {
  it('renders a single block of text', () => {
    render(<PostBody content={[makeBlock('Hello world')]} />)
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('renders multiple blocks', () => {
    const content = [
      makeBlock('First paragraph', 'b1'),
      makeBlock('Second paragraph', 'b2'),
    ]
    render(<PostBody content={content} />)
    expect(screen.getByText('First paragraph')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph')).toBeInTheDocument()
  })

  it('wraps content in a max-width container', () => {
    const { container } = render(<PostBody content={[makeBlock('Test')]} />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('max-w-2xl')
  })
})
