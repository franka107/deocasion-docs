import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "DeOcasion",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Relative Pro",
        body: "Lufga",
        code: "Relative Mono Pro",
      },
      colors: {
        lightMode: {
          light: "#F8F8F6",
          lightgray: "#C3C3C4",
          gray: "#8E8F93",
          darkgray: "#585A61",
          dark: "#23252F",
          secondary: "#0050db",
          tertiary: "hsla(218, 100%, 43%, 0.6)",
          highlight: "hsla(218, 100%, 43%, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#23252F",
          lightgray: "#474850",
          gray: "#8E8F93",
          darkgray: "#B1B2B4",
          dark: "#D5D5D5",
          secondary: "#8db4fa",
          tertiary: "#6A84B6",
          highlight: "hsla(219, 92%, 77%, 0.2)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
