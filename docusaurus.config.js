module.exports = {
  title: 'Ultroid',
  tagline: 'Ultroid, a pluggable telegram userbot, made in python using Telethon!',
  url: 'https://teamultroid.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/u.png',
  organizationName: 'TeamUltroid',
  projectName: 'teamultroid.github.io',
  themeConfig: {
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
        // { to: 'docs/pyUltroid', label: 'pyUltroid', position: 'left' },
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
      copyright: `Copyright © ${new Date().getFullYear()} Team Ultroid, Inc.`,
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
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
