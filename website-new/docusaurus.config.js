// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chisel',
  tagline: 'Software-defined hardware',
  favicon: 'img/chisel-tool-icon.svg',

  // Set the production url of your site here
  url: 'https://chisel-lang.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'chipsalliance',
  projectName: 'chisel',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Use function to avoid extra 'docs/' in relative path of doc
          editUrl: (params) => {
            return (
              'https://github.com/chipsalliance/chisel/tree/main/docs/src/' +
              params.docPath
            );
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Chisel',
        logo: {
          alt: 'Chisel Logo',
          src: 'img/chisel-tool.svg',
        },
        items: [
          {to: '/docs/introduction', label: 'Docs', position: 'left'},
          //{
          //  type: 'docSidebar',
          //  sidebarId: 'tutorialSidebar',
          //  position: 'left',
          //  label: 'Docs',
          //},
          {
            href: 'https://github.com/chipsalliance/chisel',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/chisel',
              },
              {
                label: 'Gitter',
                href: 'https://gitter.im/freechipsproject/chisel3',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/chisel_lang',
              },
            ],
          },
          {
            title: 'More',
            items: [
              //{
              //  label: 'Blog',
              //  to: '/blog',
              //},
              {
                label: 'GitHub',
                href: 'https://github.com/chipsalliance/chisel',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ChipsAlliance. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
          // The Scala grammar extends the java one
          // prism requires manually loading java first
          'java',
          'scala',
          'verilog',
        ],
      },
    }),
};

module.exports = config;

