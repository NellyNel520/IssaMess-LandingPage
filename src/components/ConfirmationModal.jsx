const successContent = {
  inquiry: {
    eyebrow: 'Request Received',
    heading: "You're All Set!",
    body: 'Thank you for contacting Issa-Mess Cleaning Services. We received your request and will follow up within 2–3 business days.',
    button: 'Got It',
  },
  newsletter: {
    eyebrow: 'Success',
    heading: "You're In!",
    body: "Thank you for joining the Issa-Mess newsletter. We'll keep you updated on cleaning tips, special offers, and service updates.",
    button: 'Got It',
  },
}

function ConfirmationModal({ successType = 'inquiry', onClose }) {
  const content = successContent[successType] ?? successContent.inquiry

  return (
    <div className="confirmation-content">
      <div className="confirmation-symbol" aria-hidden="true">
        ✓
      </div>
      <p className="modal-kicker">{content.eyebrow}</p>
      <h2>{content.heading}</h2>
      <p className="modal-copy">{content.body}</p>
      <button className="btn btn-primary" type="button" onClick={onClose}>
        {content.button}
      </button>
    </div>
  )
}

export default ConfirmationModal
