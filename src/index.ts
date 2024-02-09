import type MarkdownIt from "markdown-it/lib"
import { replaceVariables, replaceWithPattern } from "./replace"

/**
 * Plugin to replace multiple variables and/or patterns in the markdown
 * @param md markdown-it
 * @param replacements An object where each key-value pair represents a variable and its replacement value
 * @param pattern The pattern to be replaced
 * @param replacement The replacement string
 */
export default function replaceVarPlugin(
  md: MarkdownIt,
  replacements?: Record<string, string>,
  pattern?: RegExp,
  replacement?: string
): void {
  if (replacements) {
    replaceVariables(md, replacements)
  }
  if (pattern && replacement) {
    replaceWithPattern(md, pattern, replacement)
  }
}
