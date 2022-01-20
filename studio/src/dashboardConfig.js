export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61e958ecdf109c005bcd89e9",
                  title: "Sanity Studio",
                  name: "portfolio-gatsby-studio-7q9gm6n5",
                  apiId: "cce788a7-41a0-4c1b-bca7-ba2db3e9c5c7",
                },
                {
                  buildHookId: "61e958edf5eabe007491898b",
                  title: "Blog Website",
                  name: "portfolio-gatsby-web-q6gy7trd",
                  apiId: "90340f9d-01f4-41a5-953c-b783d5dd98fa",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/CodeSmitty/portfolio-gatsby",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://portfolio-gatsby-web-q6gy7trd.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
