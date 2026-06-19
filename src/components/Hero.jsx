import heroBg from '../assets/hero-bg.png'
import CTAButtons from './CTAButtons'

function Hero({ onNewsletterClick, onInquiryClick }) {
  return (
    <section
      className="hero-section"
      aria-labelledby="hero-title"
      style={{ '--hero-bg-image': `url(${heroBg})` }}
    >
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-bg"></div>
      </div>

      <div className="hero-content">
        <p className="eyebrow">The Full Issa-Mess Experience</p>
        <h1 id="hero-title">COMING SOON</h1>
        <div className="hero-title-accent" aria-hidden="true">
          <span></span>
        </div>
        <p className="hero-copy">
          Our website is currently being refreshed to better serve you. In the
          meantime, join our list to be the first to know when we launch,
          consultations open, and exclusive updates go live.
        </p>
        <CTAButtons
          onNewsletterClick={onNewsletterClick}
          onInquiryClick={onInquiryClick}
        />
      </div>
    </section>
  )
}

export default Hero
