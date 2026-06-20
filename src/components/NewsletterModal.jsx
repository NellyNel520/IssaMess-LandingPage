import { useState } from 'react'
import { FaRegBell, FaLock } from 'react-icons/fa'

const MAILERLITE_SUBSCRIBE_URL =
  'https://assets.mailerlite.com/jsonp/2458500/forms/OaF0Fb/subscribe'

function NewsletterModal({ onSubmitSuccess }) {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    const payload = new URLSearchParams()

    payload.append('fields[email]', email)
    payload.append('ml-submit', '1')
    payload.append('anticsrf', 'true')

    setStatus('submitting')
    setErrorMessage('')

    try {
      await fetch(MAILERLITE_SUBSCRIBE_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload,
      })

      onSubmitSuccess()
    } catch {
      setStatus('idle')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form className="modal-form newsletter-form" onSubmit={handleSubmit}>
      <span className="newsletter-icon" aria-hidden="true">
        <FaRegBell />
      </span>
      <h2>
        Stay <span>In The Loop</span>
      </h2>
      <p className="modal-copy">
        Be the first to know about our official website launch, new services,
        and exclusive updates.
      </p>

      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        placeholder="Email Address"
        required
      />

      <button
        className="btn btn-primary newsletter-submit"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'SENDING...' : 'COUNT ME IN'}
      </button>

      {errorMessage && (
        <p className="modal-error" role="alert">
          {errorMessage}
        </p>
      )}

      <p className="privacy-note">
        <FaLock aria-hidden="true" />
        <span>
          Your information stays private and will only be used for Issa-Mess
          updates.
        </span>
      </p>
    </form>
  )
}

export default NewsletterModal
