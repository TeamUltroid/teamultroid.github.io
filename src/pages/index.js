import React from 'react';
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
        Ultroid has been written from scratch, making it more stable and less of crashes
      </>
    ),
  },
  {
    title: 'Safety First',
    imageUrl: 'img/undraw_Security_on_ff2u.svg',
    description: (
      <>
        Ultroid warns you when you try to install/execute dangerous stuff
        (people nowadays make plugins to hack user accounts, Ultroid is safe)
      </>
    ),
  },
  {
    title: 'Deployable to Heroku',
    imageUrl: 'img/undraw_cloud_hosting_aodd.svg',
    description: (
      <>
        Unlike many others userbots* which are being suspended by heroku, Ultroid doesn't get suspended.
      </>
    ),
  },
];

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
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Ultroid Userbot`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'margin-horiz--xs button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
            {/* <Link
              className={clsx(
                'margin-horiz--xs button button--bg button--success button--lg',
                styles.deploy,
              )}
              to={useBaseUrl('docs/installation/heroku')}>
              Deploy Now
            </Link> */}
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
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
