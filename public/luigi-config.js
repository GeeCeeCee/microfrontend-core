Luigi.setConfig({
  navigation: {
    contextSwitcher: false,
    nodes: () => [
      {
        pathSegment: "home",
        label: "Home",
        icon: "home",
        viewUrl: "/home",
        children: [
          {
            pathSegment: "sample1",
            label: "First",
            icon: "nutrition-activity",
            viewUrl: "/sample1",
          },
          {
            pathSegment: "sample2",
            label: "Second",
            icon: "paper-plane",
            viewUrl: "/sample2",
          },
          {
            pathSegment: "sample3",
            label: "Next",
            icon: "paper-plane",
            viewUrl: "http://localhost:3000/about-me",
            loadingIndicator: {
              enabled: false,
            },
            context: {
              user: "Gourab",
              name: "Chattopadhyay",
            },
          },
          {
            pathSegment: "sample4",
            label: "About me",
            icon: "paper-plane",
            viewUrl: "https://portfolio-woad-zeta.vercel.app/about-me",
            loadingIndicator: {
              enabled: false,
            },
          },
          {
            category: { label: "Links", icon: "cloud" },
            label: "Luigi Project",
            externalLink: {
              url: "https://luigi-project.io/",
            },
          },
          {
            category: "Links",
            label: "Next.js",
            externalLink: {
              url: "https://nextjs.org/",
            },
          },
        ],
      },
    ],
  },
  routing: {
    useHashRouting: true,
  },
  settings: {
    header: {
      title: "Luigi Nextjs",
      favicon: "/favicon.ico",
    },
    responsiveNavigation: "simpleMobileOnly",
    appLoadingIndicator: {
      hideAutomatically: true,
    },
  },
});
