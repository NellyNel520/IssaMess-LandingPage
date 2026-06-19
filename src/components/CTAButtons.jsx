function CTAButtons({ onNewsletterClick, onInquiryClick }) {
  return (
    <section className="cta-section" aria-label="Primary actions">
      <button className="btn btn-primary" type="button" onClick={onNewsletterClick}>
        Be The First To Know
      </button>
      <button className="btn btn-secondary" type="button" onClick={onInquiryClick}>
        Need Our Services?
      </button>
    </section>
  )
}

export default CTAButtons
