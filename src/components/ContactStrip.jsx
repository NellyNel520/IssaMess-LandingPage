import { useState } from 'react'
import {
  FaCommentDots,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaRegCommentDots,
} from 'react-icons/fa'

const contactItems = [
  {
    label: 'Call Us',
    value: '(201) 676-0616',
    href: 'tel:2016760616',
    Icon: FaPhoneAlt,
    MobileIcon: FaPhoneAlt,
  },
  {
    label: 'Email Us',
    value: 'issamess315@gmail.com',
    href: 'mailto:issamess315@gmail.com',
    Icon: FaEnvelope,
    MobileIcon: FaEnvelope,
  },
  {
    label: 'Text Us',
    value: '(201) 676-0616',
    href: 'sms:2016760616',
    Icon: FaCommentDots,
    MobileIcon: FaRegCommentDots,
  },
  {
    label: 'Follow Us',
    value: 'Stay connected!',
    href: 'https://instagram.com/issamessllc',
    Icon: FaInstagram,
    MobileIcon: FaInstagram,
  },
]

function ContactStrip() {
  const [openItem, setOpenItem] = useState(null)

  const toggleItem = (label) => {
    setOpenItem((current) => (current === label ? null : label))
  }

  return (
    <section className="contact-strip" aria-label="Contact options">
      {contactItems.map(({ href, Icon, MobileIcon, label, value }) => (
        <div className={`contact-card${openItem === label ? ' is-open' : ''}`} key={label}>
          <a className="contact-desktop-link" href={href}>
            <Icon className="icon" aria-hidden="true" focusable="false" />
            <span className="contact-text">
              <span>{label}</span>
              <strong>{value}</strong>
            </span>
          </a>

          <button
            className="contact-mobile-trigger"
            type="button"
            aria-expanded={openItem === label}
            onClick={() => toggleItem(label)}
          >
            <MobileIcon className="icon" aria-hidden="true" focusable="false" />
            <span>{label}</span>
          </button>

          <a className="contact-detail" href={href}>
            {value}
          </a>
        </div>
      ))}
    </section>
  )
}

export default ContactStrip
