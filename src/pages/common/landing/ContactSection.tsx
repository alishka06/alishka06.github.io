/* oxlint-disable react/jsx-no-literals, react/jsx-no-comment-textnodes */

import { useTranslation } from 'react-i18next'

import LanguageSwitch from '@/components/i18n/LanguageSwitch'

const ContactSection = () => {
  const { t } = useTranslation('portfolio')

  return (
    <section
      className="contact-page"
      id="contacts"
      aria-label={t('nav.contacts')}
    >
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label={t('nav.homeLink')}>
          BAKYT ALI
        </a>
        <nav className="main-nav" aria-label={t('nav.primary')}>
          <a href="#home">{t('nav.home')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#stack">{t('nav.stack')}</a>
          <a href="#projects">{t('nav.projects')}</a>
          <a className="active" href="#contacts">
            {t('nav.contacts')}
          </a>
        </nav>
        <LanguageSwitch />
      </header>

      <div className="contact-layout">
        <div className="contact-copy">
          <h1 className="contact-title">
            <span className="contact-number">05</span>
            <i aria-hidden="true">//</i>
            <span>{t('contact.title')}</span>
          </h1>
          <p className="contact-question">
            {t('contact.idea')}
            <br />
            <span>{t('contact.talk')}</span>
          </p>
          <svg
            className="contact-scribble scribble-left"
            viewBox="0 0 90 150"
            aria-hidden="true"
          >
            <path d="M68 4C26 26 15 67 52 103l-22-7m22 7-2-23M5 145c29-17 48-34 63-57" />
          </svg>
          <svg
            className="contact-scribble scribble-right"
            viewBox="0 0 90 150"
            aria-hidden="true"
          >
            <path d="M10 10c41 22 52 63 15 99l22-7m-22 7 2-23M73 145C44 128 25 111 10 88" />
          </svg>
          <p className="contact-reach">{t('contact.reach')}</p>
          <div className="social-links">
            <a href="#contacts">
              {t('contact.social.github')}
              <span>↗</span>
            </a>
            <a href="#contacts">
              {t('contact.social.instagram')}
              <span>↗</span>
            </a>
            <a href="#contacts">
              {t('contact.social.telegram')}
              <span>↗</span>
            </a>
            <a href="#contacts">
              {t('contact.social.email')}
              <span>↗</span>
            </a>
          </div>
        </div>

        <div className="contact-form-wrap">
          <div className="contact-tape" aria-hidden="true" />
          <form className="contact-form">
            <label>
              <span className="sr-only">{t('contact.name')}</span>
              <input placeholder={t('contact.name')} />
            </label>
            <label>
              <span className="sr-only">{t('contact.emailPlaceholder')}</span>
              <input placeholder={t('contact.emailPlaceholder')} />
            </label>
            <label>
              <span className="sr-only">{t('contact.message')}</span>
              <textarea placeholder={t('contact.message')} />
            </label>
            <button type="button">
              {t('contact.send')} <span>↗</span>
            </button>
          </form>
        </div>

        <div className="contact-side-notes" aria-hidden="true">
          <span className="contact-location">{t('contact.location')}</span>
          <span className="contact-est">{t('home.established')}</span>
          <span className="contact-work">{t('contact.work')} ↗</span>
        </div>
        <div className="contact-grid" aria-hidden="true" />
        <div className="contact-bottom-grid" aria-hidden="true" />
        <svg className="contact-star" viewBox="0 0 60 60" aria-hidden="true">
          <path d="m29 3 5 18 20-9-13 17 16 9-20-1-4 19-6-19-20 8 14-16L5 17l20 5Z" />
        </svg>
      </div>

      <footer className="contact-footer">
        <span>{t('common.copyright')}</span>
        <a href="#home">
          {t('contact.backTop')} <span>↗</span>
        </a>
        <span className="contact-footer-arrows" aria-hidden="true">
          {t('common.arrowDoubles')}
        </span>
      </footer>
    </section>
  )
}

export default ContactSection