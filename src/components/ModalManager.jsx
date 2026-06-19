import { useEffect } from 'react'
import NewsletterModal from './NewsletterModal'
import InquiryModal from './InquiryModal'
import ConfirmationModal from './ConfirmationModal'

function ModalManager({ activeModal, onClose, onConfirm }) {
  useEffect(() => {
    if (!activeModal) {
      return undefined
    }

    const scrollY = window.scrollY
    const originalStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
      left: document.body.style.left,
      right: document.body.style.right,
    }

    document.body.classList.add('modal-open')
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'
    document.body.style.left = '0'
    document.body.style.right = '0'

    return () => {
      document.body.classList.remove('modal-open')
      document.body.style.overflow = originalStyles.overflow
      document.body.style.position = originalStyles.position
      document.body.style.top = originalStyles.top
      document.body.style.width = originalStyles.width
      document.body.style.left = originalStyles.left
      document.body.style.right = originalStyles.right
      window.scrollTo(0, scrollY)
    }
  }, [activeModal])

  if (!activeModal) {
    return null
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div
        className={`modal-panel modal-panel-${activeModal}`}
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
