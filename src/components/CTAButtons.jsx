import { FaBell, FaEnvelope } from 'react-icons/fa'

function CTAButtons({ onNewsletterClick, onInquiryClick }) {
  return (
    <section className="cta-section" aria-label="Primary actions">
      <button className="btn btn-primary" type="button" onClick={onNewsletterClick}>
        <FaBell className="btn-icon" aria-hidden="true" />
        <span className="btn-copy">
          <span className="btn-main">Be The First To Know</span>
          <span className="btn-subtext">Get updates &amp; exclusive offers</span>
        </span>
      </button>
      <button className="btn btn-secondary" type="button" onClick={onInquiryClick}>
        <FaEnvelope className="btn-icon" aria-hidden="true" />
        <span className="btn-copy">
          <span className="btn-main">Need Our Services?</span>
          <span className="btn-subtext">Submit a service request</span>
        </span>
      </button>
    </section>
  )
}

export default CTAButtons
