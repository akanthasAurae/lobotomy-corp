import { QuartzTransformerPlugin } from "../types"
import Slugger from "github-slugger"

export interface Options {
  maxDepth: 1 | 2 | 3 | 4 | 5 | 6
  minEntries: number
  showByDefault: boolean
  collapseByDefault: boolean
}

const defaultOptions: Options = {
  maxDepth: 3,
  minEntries: 1,
  showByDefault: true,
  collapseByDefault: false,
}

interface TocEntry {
  depth: number
  text: string
  slug: string
}

const slugAnchor = new Slugger()

function stripHtml(text: string): string {
  return text.replace(/<[^>]+>/g, "").trim()
}

function extractHeadings(source: string, maxDepth: number): TocEntry[] {
  const toc: TocEntry[] = []

  const lines = source.split(/\r?\n/)

  for (const line of lines) {
    // Markdown heading
    const md = line.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/)

    if (md) {
      const depth = md[1].length

      if (depth <= maxDepth) {
        const text = md[2].trim()

        toc.push({
          depth,
          text,
          slug: slugAnchor.slug(text),
        })
      }

      continue
    }

    // HTML heading
    const html = line.match(
      /^\s*<h([1-6])(?:\s+[^>]*)?>(.*?)<\/h\1>\s*$/i,
    )

    if (html) {
      const depth = Number(html[1])

      if (depth <= maxDepth) {
        const text = stripHtml(html[2])

        toc.push({
          depth,
          text,
          slug: slugAnchor.slug(text),
        })
      }
    }
  }

  return toc
}

export const TableOfContents: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  return {
    name: "TableOfContents",

    markdownPlugins() {
      return [
        () => {
          return async (_tree, file) => {
            const display = file.data.frontmatter?.enableToc ?? opts.showByDefault

            if (!display) {
              return
            }

            slugAnchor.reset()

            const source = String(file.value)
            const toc = extractHeadings(source, opts.maxDepth)

            if (toc.length === 0 || toc.length <= opts.minEntries) {
              return
            }

            let highestDepth: number = opts.maxDepth

            for (const entry of toc) {
              highestDepth = Math.min(highestDepth, entry.depth)
            }

            file.data.toc = toc.map((entry) => ({
              ...entry,
              depth: entry.depth - highestDepth,
            }))

            file.data.collapseToc = opts.collapseByDefault
          }
        },
      ]
    },
  }
}

declare module "vfile" {
  interface DataMap {
    toc: TocEntry[]
    collapseToc: boolean
  }
}