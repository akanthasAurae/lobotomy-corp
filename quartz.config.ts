import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "akanthasAurae.github.io/lobotomy-corp",
    ignorePatterns: ["private", "templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: "Norwester",
        body: "Gill Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#efecbf",
          lightgray: "#782336",
          gray: "#782336",
          darkgray: "#000000",
          dark: "#782336",
          secondary: "#14b19c",
          tertiary: "#14b19c",
          highlight: "rgba(20, 177, 156, 0.15)",
          textHighlight: "#14b19c88"
        },
        darkMode: {
          light: "#000000",
          lightgray: "#fc3a39",
          gray: "#1fffae",
          darkgray: "#ffffb0",
          dark: "#1fffae",
          secondary: "#14b19c",
          tertiary: "#cc2743",
          highlight: "rgba(204, 39, 67, 0.15)",
          textHighlight: "#cc274388"
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.HardLineBreaks(), 
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
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
