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
  //url: 'https://chisel-lang.org',
  url: 'https://jackkoenig.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/chisel/',

  // GitHub pages deployment config.
  organizationName: 'chipsalliance',
  projectName: 'chisel',

  onBrokenLinks: 'warn', // TODO change to throw
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
      image: 'img/chisel-tool.svg',
      navbar: {
        title: 'Chisel',
        logo: {
          alt: 'Chisel Logo',
          src: 'img/chisel-tool.svg',
        },
        items: [
          {to: '/docs/introduction', label: 'Docs', position: 'left'},
          {to: '/community', label: 'Community', position: 'left'},
          {to: '/api', label: 'API', position: 'left'},
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
              {
                label: 'ScalaDoc',
                href: 'https://javadoc.io/doc/org.chipsalliance/chisel_2.13/latest/index.html'
              }
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

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          //{
          //  to: 'https://s01.oss.sonatype.org/service/local/repositories/snapshots/archive/org/chipsalliance/chisel_2.13/6.0.0-M3+55-6dbbc73c-SNAPSHOT/chisel_2.13-6.0.0-M3+55-6dbbc73c-SNAPSHOT-javadoc.jar/!/index.html',
          //  from: ['/chisel/api/latest'],
          //},
        ],
      },
    ],
  ],
};


module.exports = config;

