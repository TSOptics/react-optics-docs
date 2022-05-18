const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'React-Optics',
    tagline: 'Composable state management for react',
    url: 'https://TSOptics.github.io/',
    baseUrl: '/react-optics-docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'TSOptics', // Usually your GitHub org/user name.
    projectName: 'react-optics-docs', // Usually your repo name.
    trailingSlash: false,
    themeConfig: {
        navbar: {
            title: '⚛🔍 react-optics',
            items: [
                {
                    type: 'doc',
                    docId: 'Introduction/getting-started',
                    position: 'left',
                    label: 'Docs'
                },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/TSOptics/react-optics',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorial',
                            to: '/docs/Introduction/getting-started'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus'
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus'
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/TSOptics/react-optics'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Vincent Quillien, Built with Docusaurus.`
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/TSOptics/react-optics-docs/edit/master'
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/TSOptics/react-optics-docs/edit/master/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ]
};
