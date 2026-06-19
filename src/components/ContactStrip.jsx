import {
  FaCommentDots,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
} from 'react-icons/fa'

const contactItems = [
  {
    label: 'Call Us',
    value: '(000) 000-0000',
    href: 'tel:+10000000000',
    Icon: FaPhoneAlt,
  },
  {
    label: 'Email Us',
    value: 'hello@issamess.com',
    href: 'mailto:hello@issamess.com',
    Icon: FaEnvelope,
  },
  {
    label: 'Text Us',
    value: '(000) 000-0000',
    href: 'sms:+10000000000',
    Icon: FaCommentDots,
  },
  {
    label: 'Follow Us',
    value: '@ISSAMESSLLC',
    href: 'https://instagram.com/issamessllc',
    Icon: FaInstagram,
  },
]

function ContactStrip() {
  return (
    <section className="contact-strip" aria-label="Contact options">
      {contactItems.map(({ href, Icon, label, value }) => (
        <a className="contact-card" href={href} key={label}>
          <Icon className="icon" aria-hidden="true" focusable="false" />
          <span>{label}</span>
          <strong>{value}</strong>
        </a>
      ))}
    </section>
  )
}

export default ContactStrip
