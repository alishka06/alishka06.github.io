import { useTranslation } from 'react-i18next'

import { languages } from '@/types/Languages'

const LANGUAGE_LABELS = {
  ru: 'RU',
  kk: 'KZ',
  en: 'EN',
} as const

const LanguageSwitch = () => {
  const { i18n, t } = useTranslation('portfolio')
  const currentLanguage = (i18n.resolvedLanguage ?? i18n.language).slice(0, 2)

  return (
    <div className="language-list" aria-label={t('languageSelector')}>
      {languages.map((language) => (
        <button
          aria-pressed={currentLanguage === language}
          className={currentLanguage === language ? 'selected' : ''}
          key={language}
          onClick={() => void i18n.changeLanguage(language)}
          type="button"
        >
          {LANGUAGE_LABELS[language]}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitch