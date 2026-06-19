import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'

const socialItems = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/issamessllc',
    Icon: FaInstagram,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@issamessllc',
    Icon: FaTiktok,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/issamessllc',
    Icon: FaFacebookF,
  },
]

function SocialStrip() {
  return (
    <section className="social-section" aria-labelledby="social-title">
      <h2 id="social-title">Follow Us On Social Media</h2>

      <div className="social-grid">
        {socialItems.map(({ href, Icon, label }) => (
          <a href={href} target="_blank" rel="noreferrer" key={label}>
            <Icon className="icon" aria-hidden="true" focusable="false" />
            <span>{label}</span>
          </a>
        ))}
      </div>

      <p className="social-handle">@ISSAMESSLLC</p>
    </section>
  )
}

export default SocialStrip
