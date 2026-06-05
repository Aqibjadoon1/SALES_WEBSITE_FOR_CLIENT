/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://new-murtaza-asif-traders.netlify.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.8,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://new-murtaza-asif-traders.netlify.app/sitemap.xml"],
  },
};
