function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <defs>
        <radialGradient id="instagram-gradient" cx="30%" cy="110%" r="125%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="28%" stopColor="#fa7e1e" />
          <stop offset="54%" stopColor="#d62976" />
          <stop offset="78%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </radialGradient>
      </defs>
      <rect width="42" height="42" x="3" y="3" rx="12" fill="url(#instagram-gradient)" />
      <path
        fill="#fff"
        d="M24 15.6a8.4 8.4 0 1 0 0 16.8 8.4 8.4 0 0 0 0-16.8Zm0 13.7a5.3 5.3 0 1 1 0-10.6 5.3 5.3 0 0 1 0 10.6Z"
      />
      <circle cx="33.4" cy="14.6" r="2" fill="#fff" />
      <path
        fill="#fff"
        d="M33 8H15a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7V15a7 7 0 0 0-7-7Zm3.8 24.8a4 4 0 0 1-4 4H15.2a4 4 0 0 1-4-4V15.2a4 4 0 0 1 4-4h17.6a4 4 0 0 1 4 4v17.6Z"
      />
    </svg>
  )
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <path
        fill="#25f4ee"
        d="M23.2 41.5c-6.4 0-11.1-4.1-11.1-9.8 0-6.2 5.4-10.7 12.2-9.6v6.1c-3.1-.9-5.7.7-5.7 3.3 0 2.2 1.9 3.8 4.5 3.8 2.8 0 4.5-1.7 4.5-5.1V6.8h6.1c.7 4.7 3.5 7.4 8.2 8.1v6.4a15.2 15.2 0 0 1-8.1-2.5v11.5c0 7-4.3 11.2-10.6 11.2Z"
      />
      <path
        fill="#fe2c55"
        d="M25.5 39.3c-6.4 0-11.1-4.1-11.1-9.8 0-6.2 5.4-10.7 12.2-9.6V26c-3.1-.9-5.7.7-5.7 3.3 0 2.2 1.9 3.8 4.5 3.8 2.8 0 4.5-1.7 4.5-5.1V4.6H36c.7 4.7 3.5 7.4 8.2 8.1v6.4a15.2 15.2 0 0 1-8.1-2.5v11.5c0 7-4.3 11.2-10.6 11.2Z"
      />
      <path
        fill="#fff"
        d="M24.2 40.3c-6.4 0-11.1-4.1-11.1-9.8 0-6.2 5.4-10.7 12.2-9.6V27c-3.1-.9-5.7.7-5.7 3.3 0 2.2 1.9 3.8 4.5 3.8 2.8 0 4.5-1.7 4.5-5.1V5.6h6.1c.7 4.7 3.5 7.4 8.2 8.1v6.4a15.2 15.2 0 0 1-8.1-2.5v11.5c0 7-4.3 11.2-10.6 11.2Z"
      />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="24" r="21" fill="#1877f2" />
      <path
        fill="#fff"
        d="M29.8 25.4h-4.1V40h-6.1V25.4h-3v-5.2h3v-3.4c0-2.4 1.2-6.2 6.2-6.2h4.6v5.1h-3.3c-.5 0-1.3.3-1.3 1.4v3.1h4.6l-.6 5.2Z"
      />
    </svg>
  )
}

const socialItems = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/issamessllc',
    Icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@issamessllc',
    Icon: TikTokIcon,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/issamessllc',
    Icon: FacebookIcon,
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

      <p className="social-handle">@IssaMessLLC</p>
    </section>
  )
}

export default SocialStrip
