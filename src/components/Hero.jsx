import heroBg from '../assets/hero-bg.png'
import CTAButtons from './CTAButtons'

function Hero({ onNewsletterClick, onInquiryClick }) {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-visual" aria-hidden="true">
        <img className="hero-bg" src={heroBg} alt="" />
      </div>

      <div className="hero-title-group">
        <p className="eyebrow">The Full Issa-Mess Experience</p>
        <h1 id="hero-title">COMING SOON</h1>
      </div>

      <div className="hero-content">
        <div className="hero-title-accent" aria-hidden="true">
          <span></span>
        </div>
        <p className="hero-copy">
          The Issa-Mess you&apos;ve trusted is getting a fresh new look. We&apos;re
          putting the finishing touches on the next chapter of our business,
          with a refreshed website, expanded offerings, and an even better
          client experience. Join our list to be the first to know when we
          launch, consultation bookings open, and exclusive offers, promotions,
          and more become available.
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
