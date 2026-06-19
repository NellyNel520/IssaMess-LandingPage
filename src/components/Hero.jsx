import logo from '../assets/logo.png'
import heroBg from '../assets/hero-bg.png'

function Hero() {
  return (
    <section
      className="hero-section"
      aria-labelledby="hero-title"
      style={{ '--hero-bg-image': `url(${heroBg})` }}
    >
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-content">
        <div className="hero-logo-wrap">
          <img
            className="hero-logo"
            src={logo}
            alt="Issa-Mess Cleaning Services"
          />
        </div>

        <p className="eyebrow">The Full Issa-Mess Experience</p>
        <h1 id="hero-title">COMING SOON</h1>
        <p className="hero-copy">
          Our website is currently being refreshed to better serve you. In the
          meantime, join our list to be the first to know when we launch,
          consultations open, and exclusive updates go live.
        </p>
      </div>
    </section>
  )
}

export default Hero
