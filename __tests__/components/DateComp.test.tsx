import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DateComp } from '../../components/DateComp'

describe('DateComp', () => {
  it('formats a valid ISO date string', () => {
    render(<DateComp dateString="2024-01-15" />)
    expect(screen.getByText('January 15, 2024')).toBeInTheDocument()
  })

  it('renders a <time> element with the correct dateTime attribute', () => {
    render(<DateComp dateString="2024-06-01" />)
    const time = screen.getByRole('time')
    expect(time).toHaveAttribute('dateTime', '2024-06-01')
  })

  it('formats dates in the middle of the year correctly', () => {
    render(<DateComp dateString="2023-07-04" />)
    expect(screen.getByText('July 4, 2023')).toBeInTheDocument()
  })

  it('formats a date at the end of the year', () => {
    render(<DateComp dateString="2022-12-31" />)
    expect(screen.getByText('December 31, 2022')).toBeInTheDocument()
  })

  it('applies a custom className to the time element', () => {
    render(<DateComp dateString="2024-01-01" className="text-sm text-gray-500" />)
    const time = screen.getByRole('time')
    expect(time).toHaveClass('text-sm', 'text-gray-500')
  })
})
