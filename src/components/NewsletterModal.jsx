import { useState } from 'react'
import { FaRegBell, FaLock } from 'react-icons/fa'

const MAILERLITE_FORM_SELECTOR = '.ml-embedded[data-form="OaF0Fb"] form'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

const waitForMailerLiteForm = () =>
  new Promise((resolve, reject) => {
    const existingForm = document.querySelector(MAILERLITE_FORM_SELECTOR)

    if (existingForm) {
      resolve(existingForm)
      return
    }

    const timeout = window.setTimeout(() => {
      observer.disconnect()
      reject(new Error('MailerLite embedded form did not load.'))
    }, 5000)

    const observer = new MutationObserver(() => {
      const form = document.querySelector(MAILERLITE_FORM_SELECTOR)

      if (!form) {
        return
      }

      window.clearTimeout(timeout)
      observer.disconnect()
      resolve(form)
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })
  })

function NewsletterModal({ onSubmitSuccess }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget

    console.log('[Newsletter] newsletter submit started')

    const trimmedEmail = email.trim()

    if (!trimmedEmail || !EMAIL_PATTERN.test(trimmedEmail)) {
      console.log('[Newsletter] validation failed')
      setStatus('idle')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    console.log('[Newsletter] validation passed')

    setStatus('submitting')
    setErrorMessage('')

    try {
      const embeddedForm = await waitForMailerLiteForm()
      const embeddedEmailInput = embeddedForm.querySelector('input[name="fields[email]"]')

      if (!embeddedEmailInput) {
        throw new Error('MailerLite embedded email field was not found.')
      }

      embeddedEmailInput.value = trimmedEmail

      const payload = new URLSearchParams(new FormData(embeddedForm))
      const subscribeUrl = embeddedForm.action

      if (!subscribeUrl) {
        throw new Error('MailerLite embedded form action was not found.')
      }

      const mailerLiteRequest = fetch(subscribeUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload,
      })

      mailerLiteRequest.catch(() => {})

      console.log('[Newsletter] MailerLite dispatch completed')
      form.reset()
      embeddedForm.reset()
      setEmail('')
      setStatus('idle')
      setErrorMessage('')
      console.log('[Newsletter] opening newsletter success modal')
      onSubmitSuccess()
    } catch (error) {
      console.error('[Newsletter] dispatch failed', error)
      setStatus('idle')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form className="modal-form newsletter-form" onSubmit={handleSubmit} noValidate>
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
        value={email}
        onChange={(event) => setEmail(event.target.value)}
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
