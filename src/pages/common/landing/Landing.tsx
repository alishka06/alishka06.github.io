import { useTranslation } from 'react-i18next'

import LanguageSwitch from '@/components/i18n/LanguageSwitch'
import DitherVeil from '@/components/react-bits/DitherVeil'

import ContactSection from './ContactSection'

const Landing = () => {
  const { t } = useTranslation('portfolio')
  const COPY = {
    wordmark: 'BAKYT ALI',
    nameFirst: 'Bakyt',
    nameLast: 'Ali',
    home: t('nav.home'),
    about: t('nav.about'),
    stack: t('nav.stack'),
    projects: t('nav.projects'),
    contacts: t('nav.contacts'),
    headlineFirst: t('home.headlineFirst'),
    headlineSecond: t('home.headlineSecond'),
    homeIndex: t('home.index'),
    description: t('home.description'),
    action: t('home.action'),
    established: t('home.established'),
    lab: t('home.lab'),
    east: t('home.east'),
    kazakhstan: t('home.kazakhstan'),
    ticker: t('home.ticker'),
    copyright: t('common.copyright'),
    arrowUp: t('common.arrowUp'),
    arrowDown: t('common.arrowDown'),
    arrowDoubles: t('common.arrowDoubles'),
    slashes: t('common.slashes'),
    aboutHeading: t('about.heading'),
    aboutIntro: t('about.intro'),
    aboutStudy: t('about.study'),
    aboutGrowth: t('about.growth'),
    scrollStack: t('about.scroll'),
    estEquation: t('about.equation'),
    aboutNumber: t('about.index'),
    eastLabel: t('home.east'),
    kazakhstanLabel: t('home.kazakhstan'),
    hello: t('common.hello'),
    stackTitle: t('stack.title'),
    stackLead: t('stack.lead'),
    stackLanguages: t('stack.languages'),
    stackData: t('stack.data'),
    stackWeb: t('stack.web'),
    stackTools: t('stack.tools'),
    advanced: t('stack.advanced'),
    intermediate: t('stack.intermediate'),
    scrollProjects: t('stack.scroll'),
    projectFilterAll: t('projects.all'),
    projectFilterAi: t('projects.filterAi'),
    projectFilterWeb: t('projects.filterWeb'),
    projectFilterBots: t('projects.filterBots'),
    projectTitle: t('projects.title'),
    projectOne: t('projects.one'),
    projectTwo: t('projects.two'),
    projectThree: t('projects.three'),
    projectOneDescription: t('projects.oneDescription'),
    projectTwoDescription: t('projects.twoDescription'),
    projectThreeDescription: t('projects.threeDescription'),
    viewProject: t('projects.view'),
    clickHere: t('projects.click'),
    newLabel: t('projects.new'),
    scrollContacts: t('projects.scroll'),
  }
  const STACK_GROUPS = [
    {
      number: '01',
      title: COPY.stackLanguages,
      items: [
        ['Python', COPY.advanced],
        ['C++', COPY.intermediate],
        ['SQL', COPY.advanced],
        ['JavaScript', COPY.intermediate],
      ],
    },
    {
      number: '02',
      title: COPY.stackData,
      items: [
        ['PyTorch', COPY.intermediate],
        ['TensorFlow', COPY.intermediate],
        ['Pandas & NumPy', COPY.advanced],
        ['scikit-learn', COPY.intermediate],
      ],
    },
    {
      number: '03',
      title: COPY.stackWeb,
      items: [
        ['Django / FastAPI', COPY.advanced],
        ['React', COPY.intermediate],
        ['Node.js', COPY.intermediate],
        ['HTML5 / CSS3', COPY.advanced],
      ],
    },
    {
      number: '04',
      title: COPY.stackTools,
      items: [
        ['Git & GitHub', COPY.advanced],
        ['Docker', COPY.intermediate],
        ['PostgreSQL', COPY.advanced],
        ['Linux', COPY.intermediate],
      ],
    },
  ]

  return (
    <main className="portfolio">
      <section className="home-page" id="home">
        <header className="site-header">
          <a className="wordmark" href="#home" aria-label={t('nav.homeLink')}>
            {COPY.wordmark}
          </a>

          <nav className="main-nav" aria-label={t('nav.primary')}>
            <a className="active" href="#home">
              {COPY.home}
            </a>
            <a href="#about">{COPY.about}</a>
            <a href="#stack">{COPY.stack}</a>
            <a href="#projects">{COPY.projects}</a>
            <a href="#contacts">{COPY.contacts}</a>
          </nav>

          <LanguageSwitch />
        </header>

        <div className="hero-layout">
          <div className="hero-copy">
            <h1 className="hero-name">
              <span>{COPY.nameFirst}</span>
              <span className="orange">{COPY.nameLast}</span>
            </h1>
            <div className="hero-headline-row">
              <h2>
                {COPY.headlineFirst}
                <br />
                {COPY.headlineSecond}
              </h2>
              <span className="section-tag">{COPY.homeIndex}</span>
            </div>
            <p className="hero-description">{COPY.description}</p>
            <a className="work-button" href="#contacts">
              {COPY.action} <span aria-hidden="true">{COPY.arrowUp}</span>
            </a>
          </div>

          <div className="portrait-scene" aria-label={t('home.portrait')}>
            <div className="portrait-frame">
              <DitherVeil
                src="/images/head-silhouette.svg"
                className="portrait-dither"
                pattern="noise"
                pixelSize={2}
                levels={2}
                inkColor="#080b18"
                paperColor="#f7f1df"
                revealRadius={175}
                softness={0.65}
                linger={0.6}
                rimColor="#fa3b0b"
                rim={0.1}
              />
            </div>
            <span className="est-stamp">{COPY.established}</span>
            <span className="lab-stamp">{COPY.lab}</span>
            <span className="location-stamp">
              {COPY.east}
              <br />
              {COPY.kazakhstan}
            </span>
            <span className="portrait-tag">{COPY.homeIndex}</span>
            <svg
              className="doodle-arrow"
              viewBox="0 0 180 180"
              aria-hidden="true"
            >
              <path d="M81 9 96 93 139 64 112 111 166 115 105 133 123 170 77 139 29 166 54 125 8 112 61 103 27 62 75 87Z" />
            </svg>
            <svg
              className="doodle-star star-one"
              viewBox="0 0 60 60"
              aria-hidden="true"
            >
              <path d="m29 3 5 18 20-9-13 17 16 9-20-1-4 19-6-19-20 8 14-16L5 17l20 5Z" />
            </svg>
            <svg
              className="doodle-star star-two"
              viewBox="0 0 60 60"
              aria-hidden="true"
            >
              <path d="m29 3 5 18 20-9-13 17 16 9-20-1-4 19-6-19-20 8 14-16L5 17l20 5Z" />
            </svg>
            <svg
              className="doodle-line"
              viewBox="0 0 180 35"
              aria-hidden="true"
            >
              <path d="M3 20h150m-29-15 31 15-32 13" />
            </svg>
          </div>
        </div>

        <div className="grid-doodle" aria-hidden="true" />
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>{COPY.ticker}</span>
            <span>{COPY.ticker}</span>
            <span>{COPY.ticker}</span>
          </div>
        </div>

        <footer className="home-footer">
          <span>{COPY.copyright}</span>
          <span className="footer-down" aria-hidden="true">
            {COPY.arrowDown}
          </span>
          <span className="footer-down footer-down-right" aria-hidden="true">
            {COPY.arrowDoubles}
          </span>
        </footer>
      </section>

      <section className="next-page" id="about" aria-label={COPY.about}>
        <header className="site-header">
          <a className="wordmark" href="#home" aria-label={t('nav.homeLink')}>
            {COPY.wordmark}
          </a>
          <nav className="main-nav" aria-label={t('nav.primary')}>
            <a href="#home">{COPY.home}</a>
            <a className="active" href="#about">
              {COPY.about}
            </a>
            <a href="#stack">{COPY.stack}</a>
            <a href="#projects">{COPY.projects}</a>
            <a href="#contacts">{COPY.contacts}</a>
          </nav>
          <LanguageSwitch />
        </header>
        <div className="about-layout">
          <div className="about-copy">
            <h2 className="about-title">
              <span>{COPY.aboutNumber}</span>
              <i aria-hidden="true">{COPY.slashes}</i>
              <span>{COPY.aboutHeading}</span>
            </h2>
            <h3>{COPY.aboutIntro}</h3>
            <p>{COPY.aboutStudy}</p>
            <p>{COPY.aboutGrowth}</p>
            <a className="scroll-stack" href="#stack">
              {COPY.scrollStack}{' '}
              <span aria-hidden="true">{COPY.arrowDown}</span>
            </a>
          </div>
          <div className="about-collage" aria-hidden="true">
            <div className="about-paper about-paper-back" />
            <div className="about-paper about-paper-front">
              <img src="/images/about-portrait.png" alt="Bakyt Ali" />
              <span className="about-equation">{COPY.estEquation}</span>
              <span className="about-grid" />
            </div>
            <span className="about-east-stamp">
              {COPY.eastLabel}
              <br />
              {COPY.kazakhstanLabel}
            </span>
            <span className="about-hello-stamp">{COPY.hello}</span>
            <span className="about-est-stamp">{COPY.established}</span>
            <span className="about-lab-stamp">{COPY.lab}</span>
            <svg className="about-doodle" viewBox="0 0 100 100">
              <path d="M8 52c24-4 39-20 58-43m-18 2 22-4-5 23M5 76c19-2 30-8 43-22" />
            </svg>
          </div>
        </div>
      </section>

      <section className="stack-page" id="stack" aria-label={COPY.stack}>
        <header className="site-header">
          <a className="wordmark" href="#home" aria-label={t('nav.homeLink')}>
            {COPY.wordmark}
          </a>
          <nav className="main-nav" aria-label={t('nav.primary')}>
            <a href="#home">{COPY.home}</a>
            <a href="#about">{COPY.about}</a>
            <a className="active" href="#stack">
              {COPY.stack}
            </a>
            <a href="#projects">{COPY.projects}</a>
            <a href="#contacts">{COPY.contacts}</a>
          </nav>
          <LanguageSwitch />
        </header>
        <div className="stack-heading">
          <h1 className="stack-title">
            <span>{'03'}</span>
            <i aria-hidden="true">{COPY.slashes}</i>
            <span>{COPY.stackTitle}</span>
          </h1>
          <p>{COPY.stackLead}</p>
        </div>
        <div className="stack-filters" aria-hidden="true">
          <span className="selected">{COPY.projectFilterAll}</span>
          <span>{COPY.stackLanguages}</span>
          <span>{COPY.stackData}</span>
          <span>{COPY.stackWeb}</span>
          <span>{COPY.stackTools}</span>
        </div>
        <div className="stack-groups">
          {STACK_GROUPS.map((group) => (
            <article className="stack-group" key={group.number}>
              <h2>
                <span>{group.number}</span>
                <i aria-hidden="true">{' / '}</i>
                {group.title}
              </h2>
              <div className="stack-items">
                {group.items.map(([name, level]) => (
                  <div className="stack-item" key={name}>
                    <strong>{name}</strong>
                    <span
                      className={
                        level === COPY.advanced ? 'level advanced' : 'level'
                      }
                    >
                      {level}
                    </span>
                    <span className="level-meter" aria-hidden="true">
                      <i />
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
        <a className="scroll-stack stack-scroll" href="#projects">
          {COPY.scrollProjects} <span aria-hidden="true">{COPY.arrowDown}</span>
        </a>
        <footer className="home-footer">
          <span>{COPY.copyright}</span>
          <span className="footer-down" aria-hidden="true">
            {COPY.arrowDown}
          </span>
          <span className="footer-down footer-down-right" aria-hidden="true">
            {COPY.arrowDoubles}
          </span>
        </footer>
      </section>

      <section
        className="projects-page"
        id="projects"
        aria-label={COPY.projects}
      >
        <header className="site-header">
          <a className="wordmark" href="#home" aria-label={t('nav.homeLink')}>
            {COPY.wordmark}
          </a>
          <nav className="main-nav" aria-label={t('nav.primary')}>
            <a href="#home">{COPY.home}</a>
            <a href="#about">{COPY.about}</a>
            <a href="#stack">{COPY.stack}</a>
            <a className="active" href="#projects">
              {COPY.projects}
            </a>
            <a href="#contacts">{COPY.contacts}</a>
          </nav>
          <LanguageSwitch />
        </header>
        <div className="projects-heading">
          <h1>
            <span>{'04'}</span>
            <i aria-hidden="true">{COPY.slashes}</i>
            <span>{COPY.projects}</span>
          </h1>
          <p>{COPY.projectTitle}</p>
          <div className="project-filters" aria-hidden="true">
            <span className="selected">{COPY.projectFilterAll}</span>
            <span>{COPY.projectFilterAi}</span>
            <span>{COPY.projectFilterWeb}</span>
            <span>{COPY.projectFilterBots}</span>
          </div>
        </div>
        <div className="project-cards">
          <article className="project-card bot-project">
            <div className="project-art bot-art" aria-hidden="true">
              <div className="bot-head">
                <i />
                <i />
                <span />
              </div>
              <span className="bot-mark">{'✈'}</span>
            </div>
            <h2>
              <span>{'01'}</span>
              <i>{' / '}</i>
              {COPY.projectOne}
            </h2>
            <div className="project-tags">
              <span>{'Python'}</span>
              <span>{'API'}</span>
              <span>{'Data'}</span>
            </div>
            <p>{COPY.projectOneDescription}</p>
            <a className="project-button" href="#projects">
              {COPY.viewProject}
              <span>{COPY.arrowUp}</span>
            </a>
          </article>
          <article className="project-card ai-project">
            <div className="project-art ai-art" aria-hidden="true">
              <span className="math-formula">{'f(x) = ∑ wᵢxᵢ + b'}</span>
              <div className="math-orb">
                <i />
                <i />
                <i />
                <i />
              </div>
              <span className="math-nodes">{'◈ · · · ◈'}</span>
            </div>
            <h2>
              <span>{'02'}</span>
              <i>{' / '}</i>
              {COPY.projectTwo}
            </h2>
            <div className="project-tags">
              <span>{'PyTorch'}</span>
              <span>{'ML'}</span>
              <span>{'Math'}</span>
            </div>
            <p>{COPY.projectTwoDescription}</p>
            <a className="project-button" href="#projects">
              {COPY.viewProject}
              <span>{COPY.arrowUp}</span>
            </a>
          </article>
          <article className="project-card web-project">
            <div className="project-art web-art" aria-hidden="true">
              <div className="dashboard-window">
                <span />
                <span />
                <span />
                <i />
                <i />
                <i />
              </div>
              <div className="dashboard-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
            <h2>
              <span>{'03'}</span>
              <i>{' / '}</i>
              {COPY.projectThree}
            </h2>
            <div className="project-tags">
              <span>{'React'}</span>
              <span>{'Node.js'}</span>
              <span>{'JS'}</span>
            </div>
            <p>{COPY.projectThreeDescription}</p>
            <a className="project-button" href="#projects">
              {COPY.viewProject}
              <span>{COPY.arrowUp}</span>
            </a>
          </article>
        </div>
        <span className="project-note">{COPY.clickHere}</span>
        <span className="project-new">{COPY.newLabel}</span>
        <a className="scroll-stack projects-scroll" href="#contacts">
          {COPY.scrollContacts} <span aria-hidden="true">{COPY.arrowDown}</span>
        </a>
        <footer className="home-footer">
          <span>{COPY.copyright}</span>
          <span className="footer-down" aria-hidden="true">
            {COPY.arrowDown}
          </span>
          <span className="footer-down footer-down-right" aria-hidden="true">
            {COPY.arrowDoubles}
          </span>
        </footer>
      </section>
      <ContactSection />
    </main>
  )
}

export default Landing