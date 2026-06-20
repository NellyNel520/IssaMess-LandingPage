import { useEffect, useState } from 'react'
import {
  FaChevronRight,
  FaCommentDots,
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'

const FACEBOOK_URL =
  'https://www.facebook.com/people/Issa-Messllc/61590894630991/?mibextid=wwXIfr&rdid=ksXKbykbrObu47Kv&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F1UMw2EdgZn%252F%253Fmibextid%253DwwXIfr'

const socialLinks = [
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
    href: FACEBOOK_URL,
    Icon: FaFacebookF,
  },
]

function Header({ onInquiryClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isMobileMenuOpen])

  const openInquiryFromMenu = () => {
    setIsMobileMenuOpen(false)
    onInquiryClick()
  }

  return (
    <header className="site-header">
      <a className="brand-mark" href="/" aria-label="Issa-Mess Cleaning Services home">
        <img src={logo} alt="Issa-Mess Cleaning Services" />
      </a>

      <div className="header-actions">
        <nav className="header-socials" aria-label="Social links">
          {socialLinks.map(({ href, Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="icon" aria-hidden="true" focusable="false" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </nav>

        <span className="header-divider" aria-hidden="true"></span>

        <a className="call-link" href="tel:+12016760616">
          <FaPhoneAlt className="call-icon" aria-hidden="true" focusable="false" />
          <span className="call-copy">
            <span>Call Us</span>
            <strong>(201) 676-0616</strong>
          </span>
        </a>
      </div>

      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
      >
        {isMobileMenuOpen ? (
          <HiX aria-hidden="true" focusable="false" />
        ) : (
          <FaBars aria-hidden="true" focusable="false" />
        )}
      </button>

      {isMobileMenuOpen && (
        <>
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="Close mobile menu"
            onClick={() => setIsMobileMenuOpen(false)}
          ></button>

          <div className="mobile-menu" aria-label="Mobile menu">
            <p className="mobile-menu-heading">Follow Us</p>
            <div className="mobile-menu-group">
              {socialLinks.map(({ href, Icon, label }) => (
                <a className="mobile-menu-row" key={label} href={href} target="_blank" rel="noopener noreferrer">
                  <span className="mobile-menu-icon">
                    <Icon aria-hidden="true" focusable="false" />
                  </span>
                  <span className="mobile-menu-label">{label}</span>
                  <FaChevronRight className="mobile-menu-chevron" aria-hidden="true" focusable="false" />
                </a>
              ))}
            </div>

            <p className="mobile-menu-heading">Contact Us</p>
            <div className="mobile-menu-group">
              <a className="mobile-menu-row mobile-menu-contact" href="tel:2016760616">
                <span className="mobile-menu-icon">
                  <FaPhoneAlt aria-hidden="true" focusable="false" />
                </span>
                <span>
                  <span className="mobile-menu-kicker">Call Us</span>
                  <span className="mobile-menu-primary">(201) 676-0616</span>
                </span>
                <FaChevronRight className="mobile-menu-chevron" aria-hidden="true" focusable="false" />
              </a>

              <button className="mobile-menu-row mobile-menu-contact" type="button" onClick={openInquiryFromMenu}>
                <span className="mobile-menu-icon">
                  <FaCommentDots aria-hidden="true" focusable="false" />
                </span>
                <span>
                  <span className="mobile-menu-kicker">Request Info</span>
                  <span className="mobile-menu-primary">Submit Service Request</span>
                </span>
                <FaChevronRight className="mobile-menu-chevron" aria-hidden="true" focusable="false" />
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
