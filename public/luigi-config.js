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
          // {
          //   pathSegment: "sample2",
          //   label: "Second",
          //   icon: "paper-plane",
          //   viewUrl: "/sample2",
          // },
          {
            pathSegment: "fine-tuning",
            label: "Fine Tuning",
            icon: "paper-plane",
            viewUrl: "http://localhost:3000/",
            loadingIndicator: {
              enabled: false,
            },
            context: {
              env: "local",
              postPrefix: "/consumption/rest/v1/configurationcomposer/",
              localhost: "http://localhost:3005/api/version1",
              backendAppRouter: "/backendfinetuningservice",
            },
          },
          {
            pathSegment: "process-monitor",
            label: "Process Monitor",
            icon: "paper-plane",
            viewUrl: "http://localhost:3000/",
            loadingIndicator: {
              enabled: false,
            },
            context: {
              env: "local",
              postPrefix: "/consumption/rest/v1/configurationcomposer/",
              localhost: "http://localhost:3004/api/version2",
              backendAppRouter: "/backendfinetuningservice",
            },
          },

          {
            pathSegment: "entity",
            label: "Entity",
            icon: "paper-plane",
            viewUrl:
              "http://localhost:3000/entities?solutionComponentName=CloudforProjectCollaboration&solutionComponentNamespace=sap.cbc.samples.c4p.pm&solutionComponentVersion=1.0.0",
            loadingIndicator: {
              enabled: false,
            },
            context: {
              env: "local",
              postPrefix: "/consumption/rest/v1/configurationcomposer/",
              localhost: "http://localhost:3005/api/version1",
              backendAppRouter: "/backendfinetuningservice",
            },
          },
          // {
          //   pathSegment: "sample4",
          //   label: "About me",
          //   icon: "paper-plane",
          //   viewUrl: "https://portfolio-woad-zeta.vercel.app/about-me",
          //   loadingIndicator: {
          //     enabled: false,
          //   },
          // },
          // {
          //   category: { label: "Links", icon: "cloud" },
          //   label: "Luigi Project",
          //   externalLink: {
          //     url: "https://luigi-project.io/",
          //   },
          // },
          // {
          //   category: "Links",
          //   label: "Next.js",
          //   externalLink: {
          //     url: "https://nextjs.org/",
          //   },
          // },
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
