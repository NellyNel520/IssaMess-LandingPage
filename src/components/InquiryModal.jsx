import { useState } from 'react'
import { FaEnvelope, FaLock } from 'react-icons/fa'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjgdnlqa'

function InquiryModal({ onSubmitSuccess }) {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      onSubmitSuccess()
    } catch {
      setStatus('idle')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <form className="modal-form inquiry-form" onSubmit={handleSubmit}>
      <span className="inquiry-icon" aria-hidden="true">
        <FaEnvelope />
      </span>
      <h2>Need Our Services?</h2>
      <p className="modal-copy">
        The Issa-Mess team will follow up when inquiries open.
      </p>

      <label htmlFor="inquiry-name">First &amp; Last Name</label>
      <input
        id="inquiry-name"
        name="firstLastName"
        type="text"
        placeholder="Your first and last name"
        required
      />

      <label htmlFor="inquiry-phone">Phone number</label>
      <input
        id="inquiry-phone"
        name="phone"
        type="tel"
        placeholder="(000) 000-0000"
        required
      />

      <label htmlFor="inquiry-email">Email address</label>
      <input
        id="inquiry-email"
        name="email"
        type="email"
        placeholder="you@example.com"
      />

      <label htmlFor="inquiry-property">Property Type / Size</label>
      <select id="inquiry-property" name="propertyTypeSize" defaultValue="" required>
        <option value="" disabled>
          Select property type / size
        </option>
        <option value="Studio / Efficiency">Studio / Efficiency</option>
        <option value="1 Bedroom">1 Bedroom</option>
        <option value="2 Bedroom">2 Bedroom</option>
        <option value="3 Bedroom">3 Bedroom</option>
        <option value="4+ Bedroom">4+ Bedroom</option>
        <option value="Commercial Space">Commercial Space</option>
        <option value="Not Sure">Not Sure</option>
      </select>

      <label htmlFor="inquiry-message">Message</label>
      <textarea
        id="inquiry-message"
        name="message"
        placeholder="Please provide any additional details about your cleaning needs, pets, frequency of service, or anything else you'd like us to know."
        rows="5"
        required
      ></textarea>

      <button
        className="btn btn-primary inquiry-submit"
        type="submit"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
      </button>

      {errorMessage && (
        <p className="modal-error" role="alert">
          {errorMessage}
        </p>
      )}

      <p className="privacy-note">
        <FaLock aria-hidden="true" />
        <span>
          Your information stays private and will only be used to respond to
          your service inquiry.
        </span>
      </p>
    </form>
  )
}

export default InquiryModal
