module.exports = {
  title: 'Ultroid',
  tagline: 'Ultroid, a pluggable telegram userbot, made in python using Telethon!',
  url: 'https://www.ultroid.tech',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/u.png',
  organizationName: 'TeamUltroid',
  projectName: 'teamultroid.github.io',
  themeConfig: {
    metadatas: [{ name: 'yandex-verification', content: 'b8291c7f76165c9d' }],
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
        // { to: 'session-gen', label: 'Session-Gen', position: 'left' },
        {
          href: 'https://github.com/TeamUltroid/Ultroid',
          label: 'GitHub',
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
              to: 'docs/pyUltroid',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://telegram.dog/UltroidSupport',
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/TeamUltroid/Ultroid-Docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
