import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CTAButtons from './components/CTAButtons'
import ContactStrip from './components/ContactStrip'
import SocialStrip from './components/SocialStrip'
import Footer from './components/Footer'
import ModalManager from './components/ModalManager'

function App() {
  const [activeModal, setActiveModal] = useState(null)

  const openNewsletter = () => setActiveModal('newsletter')
  const openInquiry = () => setActiveModal('inquiry')
  const showConfirmation = () => setActiveModal('confirmation')
  const closeModal = () => setActiveModal(null)

  return (
    <div className="app-shell">
      <Header onInquiryClick={openInquiry} />

      <main>
        <Hero />
        <CTAButtons
          onNewsletterClick={openNewsletter}
          onInquiryClick={openInquiry}
        />
        <ContactStrip />
        <SocialStrip />
      </main>

      <Footer />

      <ModalManager
        activeModal={activeModal}
        onClose={closeModal}
        onConfirm={showConfirmation}
      />
    </div>
  )
}

export default App
