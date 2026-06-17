import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '../../components/ContactForm'
import axios from 'axios'

vi.mock('axios', () => ({ default: vi.fn() }))
const mockedAxios = vi.mocked(axios)

describe('ContactForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders email, message, and submit button', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/email \(required\)/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message \(required\)/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('shows "Submitting..." and disables the button while the request is in flight', async () => {
    mockedAxios.mockReturnValue(new Promise(() => {}))
    render(<ContactForm />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/email \(required\)/i), 'test@example.com')
    await user.type(screen.getByLabelText(/message \(required\)/i), 'Hello there')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    expect(screen.getByRole('button', { name: /submitting/i })).toBeDisabled()
  })

  it('shows a success message after a successful submission', async () => {
    mockedAxios.mockResolvedValue({ status: 200, data: {} })
    render(<ContactForm />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/email \(required\)/i), 'test@example.com')
    await user.type(screen.getByLabelText(/message \(required\)/i), 'Hello there')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      expect(screen.getByText(/thank you/i)).toBeInTheDocument()
    })
  })

  it('clears all inputs after a successful submission', async () => {
    mockedAxios.mockResolvedValue({ status: 200, data: {} })
    render(<ContactForm />)
    const user = userEvent.setup()
    const emailInput = screen.getByLabelText(/email \(required\)/i)

    await user.type(emailInput, 'test@example.com')
    await user.type(screen.getByLabelText(/message \(required\)/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => expect(emailInput).toHaveValue(''))
  })

  it('shows an error message when the submission fails', async () => {
    mockedAxios.mockRejectedValue({
      response: { data: { error: 'Service unavailable' } },
    })
    render(<ContactForm />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/email \(required\)/i), 'test@example.com')
    await user.type(screen.getByLabelText(/message \(required\)/i), 'Hello')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      expect(screen.getByText(/service unavailable/i)).toBeInTheDocument()
    })
  })

  it('posts to the correct formspree endpoint with the form data', async () => {
    mockedAxios.mockResolvedValue({ status: 200, data: {} })
    render(<ContactForm />)
    const user = userEvent.setup()

    await user.type(screen.getByLabelText(/email \(required\)/i), 'test@example.com')
    await user.type(screen.getByLabelText(/message \(required\)/i), 'Test message')
    await user.click(screen.getByRole('button', { name: /submit/i }))

    await waitFor(() => {
      expect(mockedAxios).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'POST',
          url: 'https://formspree.io/f/xqkokjwz',
          data: expect.objectContaining({
            email: 'test@example.com',
            message: 'Test message',
          }),
        })
      )
    })
  })
})
