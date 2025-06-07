import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Built From Scratch',
    imageUrl: 'img/undraw_pair_programming_njlp.svg',
    description: (
      <>
        Ultroid is built from the ground up for stability, performance, and a seamless user experience. No recycled code, just pure innovation.
      </>
    ),
  },
  {
    title: 'Safety First',
    imageUrl: 'img/undraw_Security_on_ff2u.svg',
    description: (
      <>
        Your security is our priority. Ultroid has built-in safeguards to protect you from malicious plugins and keep your account safe.
      </>
    ),
  },
  {
    title: 'Plugin Power',
    imageUrl: 'img/undraw_building-blocks.svg',
    description: (
      <>
        Unleash your creativity with a vast library of official and community-made plugins. From fun utilities to powerful automation, tailor Ultroid to your exact needs.
      </>
    ),
  },
  {
    title: 'Deploy to Heroku & More',
    imageUrl: 'img/undraw_cloud_hosting_aodd.svg',
    description: (
      <>
        Get up and running in minutes. Ultroid is optimized for one-click deployment on Heroku, while avoiding platform suspensions.
      </>
    ),
  },
  {
    title: 'Always-On Support',
    imageUrl: 'img/undraw_active-support.svg',
    description: (
      <>
        Join our friendly community on Telegram. Get help, share your creations, and connect with fellow Ultroid users from around the world.
      </>
    ),
  },
  {
    title: 'Open Source Spirit',
    imageUrl: 'img/undraw_open-source.svg',
    description: (
      <>
        Ultroid is free, open-source, and community-driven. Contribute on GitHub, suggest new features, and help us shape the future of userbots.
      </>
    ),
  },
];

const mobileCardData = {
  title: 'Ultroid on Mobile',
  imageUrl: 'img/undraw_mobile-app_qxev.svg',
  description: (
    <>
      Run Ultroid on Termux with just a few clicks — everything is automated for you. Fast, simple, beginner-friendly, and designed to work seamlessly on mobile devices.
    </>
  ),
  downloadLinks: [
    {
      label: 'arm64',
      size: '32.80 MB',
      href: 'https://github.com/TeamUltroid/Ultroid-Termux/releases/download/v0.118.0%2Bc579131-apt-android-7-github-debug/termux-app_v0.118.0+c579131-apt-android-7-github-debug_arm64-v8a.apk'
    },
    {
      label: 'armeabi',
      size: '31.00 MB',
      href: 'https://github.com/TeamUltroid/Ultroid-Termux/releases/download/v0.118.0%2Bc579131-apt-android-7-github-debug/termux-app_v0.118.0+c579131-apt-android-7-github-debug_armeabi-v7a.apk'
    },
    {
      label: 'universal',
      size: '108.0 MB',
      href: 'https://github.com/TeamUltroid/Ultroid-Termux/releases/download/v0.118.0%2Bc579131-apt-android-7-github-debug/termux-app_v0.118.0+c579131-apt-android-7-github-debug_universal.apk'
    }
  ],
};

const sponsorCardData = {
  title: 'Become a Sponsor',
  imageUrl: 'img/undraw_loving-it_hspq.svg',
  description: (
    <>
      Our passion project is fueled by you. Your sponsorship helps us cover server costs, drive innovation, and continue building the best userbot experience. Join our amazing backers!
    </>
  ),
  sponsorLinks: [
    {
      label: 'Sponsor on GitHub',
      href: 'https://github.com/sponsors/TeamUltroid',
    }
  ],
};


function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p className={styles.justifyText}>{description}</p>
    </div>
  );
}


function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);


  const mobileImgUrl = useBaseUrl(mobileCardData.imageUrl);
  const sponsorImgUrl = useBaseUrl(sponsorCardData.imageUrl);

  return (
    <Layout title="Ultroid Userbot" description="Ultroid Userbot Documentation">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'margin-horiz--xs button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className={styles.features}>
          <div className="container">
            <div className={styles.sponsorCard}>
              <div className={styles.sponsorImageWrapper}>
                <img src={mobileImgUrl} alt={mobileCardData.title} className={styles.sponsorImage} />
              </div>
              <div className={styles.sponsorContent}>
                <h3>{mobileCardData.title}</h3>
                <p className={styles.justifyText}>{mobileCardData.description}</p>
                <div className={styles.buttonRow}>
                  <div className={styles.termuxDownloadWrapper} ref={dropdownRef}>
                    <Link
                      className={clsx('button button--primary button--lg', styles.downloadButton)}
                      to="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(!menuOpen);
                      }}
                    >
                      Download{' '}
                      <span
                        className={clsx(styles.downloadArrow, {
                          [styles.rotated]: menuOpen,
                        })}
                      >
                        ▼
                      </span>

                    </Link>
                    <ul
                      className={clsx(styles.termuxDropdownMenu, {
                        [styles.open]: menuOpen,
                        [styles.closed]: !menuOpen,
                      })}
                      style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
                    >
                      {mobileCardData.downloadLinks.map(({ label, size, href }, i) => (
                        <li key={i}>
                          <Link
                            className={styles.termuxDropdownItem}
                            to={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className={styles.itemName}>{label}</span>
                            <span className={styles.itemSize}>{size}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <div className={styles.sponsorCard}>
              <div className={styles.sponsorImageWrapper}>
                <img src={sponsorImgUrl} alt={sponsorCardData.title} className={styles.sponsorImage} />
              </div>
              <div className={styles.sponsorContent}>
                <h3>{sponsorCardData.title}</h3>
                <p className={styles.justifyText}>{sponsorCardData.description}</p>
                <div className={styles.buttonRow}>
                  {sponsorCardData.sponsorLinks.map(({ label, href }, idx) => (
                    <a
                      key={idx}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={clsx('button button--primary button--lg', styles.downloadButton)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
