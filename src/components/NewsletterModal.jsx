import { FaRegBell, FaLock } from 'react-icons/fa'

function NewsletterModal({ onSubmitSuccess }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitSuccess()
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

      <button className="btn btn-primary newsletter-submit" type="submit">
        COUNT ME IN
      </button>

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
