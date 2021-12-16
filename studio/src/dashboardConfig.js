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
                    "61bb100b57c59b4dc577de10",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-auto-b-studio",
                  apiId: "da18d977-2b2c-4963-aa0f-2bd8d7091424",
                },
                {
                  buildHookId: "61bb100b8d5b434affaafbac",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-auto-b",
                  apiId: "96462cd7-cb9a-4fe5-8cfe-c04a446dddbe",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/JulienDesmettre/sanity-gatsby-blog-auto-b",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-auto-b.netlify.app",
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
