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
        Ultroid has been written from scratch, making it more stable and less prone to crashes.
      </>
    ),
  },
  {
    title: 'Safety First',
    imageUrl: 'img/undraw_Security_on_ff2u.svg',
    description: (
      <>
        Ultroid warns you when you try to install/execute dangerous stuff
        (people nowadays make plugins to hack user accounts, Ultroid is safe).
      </>
    ),
  },
  {
    title: 'Deployable to Heroku',
    imageUrl: 'img/undraw_cloud_hosting_aodd.svg',
    description: (
      <>
        Unlike many other userbots which are suspended by Heroku, Ultroid doesn’t get suspended.
      </>
    ),
  },
  {
    title: 'Ultroid on Termux',
    imageUrl: 'img/undraw_mobile-app_qxev.svg',
    description: (
      <>
        Run Ultroid on Termux with just a few clicks — everything is automated for you. Fast, simple, beginner-friendly, and designed to work seamlessly on mobile devices.
      </>
    ),
    downloadLinks: [
      {
        label: 'arm64',
        size: '32.00 MB',
        href: 'https://github.com/TeamUltroid/Ultroid-Termux/releases/download/v0.118.0%2Bc579131-apt-android-7-github-debug/termux-app_v0.118.0+c579131-apt-android-7-github-debug_arm64-v8a.apk'
      },
      {
        label: 'armeabi',
        size: '30.20 MB',
        href: 'https://github.com/TeamUltroid/Ultroid-Termux/releases/download/v0.118.0%2Bc579131-apt-android-7-github-debug/termux-app_v0.118.0+c579131-apt-android-7-github-debug_armeabi-v7a.apk'
      },
      {
        label: 'universal',
        size: '107.0 MB',
        href: 'https://github.com/TeamUltroid/Ultroid-Termux/releases/download/v0.118.0%2Bc579131-apt-android-7-github-debug/termux-app_v0.118.0+c579131-apt-android-7-github-debug_universal.apk'
      }
    ],

  },
  {
    title: 'Support Ultroid',
    imageUrl: 'img/undraw_new-entries_xw4m.svg',

    description: (
      <>
        If you liked our work and want to sponsor or fund the project, your support means the world to us! It helps us keep improving Ultroid for the community.
      </>
    ),
    sponsor: true,
    sponsorLinks: [
      {
        label: 'Sponsor on GitHub',
        href: 'https://github.com/sponsors/TeamUltroid',
        type: 'primary',
      }
    ],
  },
];

function Feature({ imageUrl, title, description, downloadLinks, sponsor, sponsorLinks }) {
  const imgUrl = useBaseUrl(imageUrl);
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

  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}

      <h3>{title}</h3>
      <p className={styles.justifyText}>{description}</p>

      {(downloadLinks || sponsorLinks) && (
        <div className={styles.buttonRow}>
          {downloadLinks && !sponsor && (
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
                {downloadLinks.map(({ label, size, href }, i) => (
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
          )}

          {sponsor && sponsorLinks && (
            <div className={styles.termuxDownloadWrapper}>
              {sponsorLinks.map(({ label, href }, idx) => (
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
          )}
        </div>
      )}


    </div>
  );
}


function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
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
      </main>
    </Layout>
  );
}

export default Home;
