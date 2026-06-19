import { FaBell, FaEnvelope } from 'react-icons/fa'

function CTAButtons({ onNewsletterClick, onInquiryClick }) {
  return (
    <section className="cta-section" aria-label="Primary actions">
      <button className="btn btn-primary" type="button" onClick={onNewsletterClick}>
        <FaBell className="btn-icon" aria-hidden="true" />
        <span>Be The First To Know</span>
      </button>
      <button className="btn btn-secondary" type="button" onClick={onInquiryClick}>
        <FaEnvelope className="btn-icon" aria-hidden="true" />
        <span>Need Our Services?</span>
      </button>
    </section>
  )
}

export default CTAButtons
