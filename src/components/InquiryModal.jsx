import { FaEnvelope, FaLock } from 'react-icons/fa'

function InquiryModal({ onSubmitSuccess }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitSuccess()
  }

  return (
    <form className="modal-form inquiry-form" onSubmit={handleSubmit}>
      <span className="inquiry-icon" aria-hidden="true">
        <FaEnvelope />
      </span>
      <h2>Need Our Services?</h2>
      <p className="modal-copy">
        Tell us a little about your space, timing, and service needs. The
        Issa-Mess team will follow up when inquiries open.
      </p>

      <label htmlFor="inquiry-name">Name</label>
      <input id="inquiry-name" name="name" type="text" placeholder="Your name" required />

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
        required
      />

      <label htmlFor="inquiry-message">Message</label>
      <textarea
        id="inquiry-message"
        name="message"
        placeholder="Tell us about your space, timing, and service needs."
        rows="5"
        required
      ></textarea>

      <button className="btn btn-primary inquiry-submit" type="submit">
        SUBMIT INQUIRY
      </button>

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
