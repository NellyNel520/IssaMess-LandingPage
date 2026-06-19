function NewsletterModal({ onSubmitSuccess }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmitSuccess()
  }

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <p className="modal-kicker">Launch Updates</p>
      <h2>Be The First To Know</h2>
      <p className="modal-copy">
        Join the Issa-Mess list for launch news, consultation openings, and
        exclusive service updates.
      </p>

      <label htmlFor="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        placeholder="you@example.com"
        required
      />

      <button className="btn btn-primary" type="submit">
        Count Me In
      </button>

      <p className="privacy-note">
        Your information stays private and will only be used for Issa-Mess
        Cleaning Services updates.
      </p>
    </form>
  )
}

export default NewsletterModal
