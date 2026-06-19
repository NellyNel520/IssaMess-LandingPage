function ConfirmationModal({ onClose }) {
  return (
    <div className="confirmation-content">
      <div className="confirmation-symbol" aria-hidden="true">
        ✓
      </div>
      <p className="modal-kicker">Request Received</p>
      <h2>You&apos;re All Set!</h2>
      <p className="modal-copy">
        Thank you for connecting with Issa-Mess Cleaning Services. We&apos;ll be in
        touch with updates soon.
      </p>
      <button className="btn btn-primary" type="button" onClick={onClose}>
        Got It
      </button>
    </div>
  )
}

export default ConfirmationModal
