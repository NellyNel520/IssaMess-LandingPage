import NewsletterModal from './NewsletterModal'
import InquiryModal from './InquiryModal'
import ConfirmationModal from './ConfirmationModal'

function ModalManager({ activeModal, onClose, onConfirm }) {
  if (!activeModal) {
    return null
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose}>
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close modal</span>
        </button>

        {activeModal === 'newsletter' && (
          <NewsletterModal onSubmitSuccess={onConfirm} />
        )}

        {activeModal === 'inquiry' && <InquiryModal onSubmitSuccess={onConfirm} />}

        {activeModal === 'confirmation' && <ConfirmationModal onClose={onClose} />}
      </div>
    </div>
  )
}

export default ModalManager
