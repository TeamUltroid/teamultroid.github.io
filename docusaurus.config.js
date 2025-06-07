import path from 'path';

/** @type {import('@docusaurus/types').Config} */
export default {
  title: 'Ultroid',
  tagline: 'Ultroid, a pluggable telegram userbot, made in python using Telethon!',
  url: 'https://www.ultroid.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/u.png',
  organizationName: 'TeamUltroid',
  projectName: 'teamultroid.github.io',
  themeConfig: {
    metadata: [{ name: 'yandex-verification', content: 'b8291c7f76165c9d' }],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    image: 'img/metalogo.jpg',
    navbar: {
      title: 'Ultroid',
      logo: {
        alt: 'Ultroid Logo',
        src: 'img/u.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'changelog/',
          activeBasePath: 'changelog/',
          label: 'Changelog',
          position: 'left',
        },
        // { to: 'session-gen', label: 'Session-Gen', position: 'left' },
        {
          href: 'https://github.com/TeamUltroid/Ultroid',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/sponsors/TeamUltroid',
          label: 'Sponsor',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            },
            {
              label: 'pyUltroid',
              to: 'docs/pyUltroid/pyUltroid',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://telegram.dog/UltroidSupportChat',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/Theultroid/',
            },
            {
              label: 'X',
              href: 'https://x.com/TheUltroid',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TeamUltroid/Ultroid',
            },
            // {
            //   label: "URL Shortener",
            //   href: "https://tiny.ultroid.org"
            // }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/TeamUltroid" target="_blank">Team Ultroid</a>, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          path: 'blog',
          showReadingTime: true
        },
        pages: {
          path: 'src/pages'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-DF813CEEN9',
          anonymizeIP: true,
        }
      },
    ],
  ],
};
