/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: "Create React App",
  tagline: "Set up a modern web app by running one command.",
  url: "https://create-react-app.dev",
  baseUrl: "/",
  projectName: "create-react-app",
  organizationName: "facebook",
  favicon: "img/favicon/favicon.ico",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          sidebarPath: require.resolve("./sidebars.json"),
          editUrl:
            "https://github.com/facebook/create-react-app/edit/main/docusaurus/website",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/logo-og.png",
    algolia: {
      appId: "KJPVZ9JPYR",
      apiKey: "0b0c78741c0164e6e3745d31007e43d9",
      indexName: "crawler_Github Action Demo"
    },
    navbar: {
      title: "Create React App",
      logo: {
        alt: "Create React App Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "docs/getting-started", label: "Docs", position: "right" },
        {
          href: "https://reactjs.org/community/support.html",
          label: "Help",
          position: "right",
        },
        {
          href: "https://www.github.com/facebook/create-react-app",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get Started",
              to: "docs/getting-started",
            },
            {
              label: "Learn React",
              href: "https://reactjs.org/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/create-react-app",
            },
            {
              label: "GitHub Discussions",
              href: "https://github.com/facebook/create-react-app/discussions",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/reactjs",
            },
            {
              label: "Contributor Covenant",
              href: "https://www.contributor-covenant.org/version/1/4/code-of-conduct",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://www.github.com/facebook/create-react-app",
            },
          ],
        },
      ],
      logo: {
        alt: "Facebook Open Source Logo",
        src: "img/oss_logo.png",
      },
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc.`,
    },
  },
};

module.exports = siteConfig;
