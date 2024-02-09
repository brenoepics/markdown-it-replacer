import MarkdownIt from "markdown-it"

/**
 * Replace multiple variables in the markdown
 * @param md markdown-it
 * @param replacements An object where each key-value pair represents a variable and its replacement value
 */
export const replaceVariables = (
  md: MarkdownIt,
  replacements: Record<string, string>
) => {
  md.core.ruler.before("inline", "replace-variables", state => {
    state.tokens.forEach(token => {
      Object.entries(replacements).forEach(([variable, value]) => {
        token.content = token.content.replace(new RegExp(variable, "g"), value)
      })
    })
  })
}

/**
 * Replace content based on a pattern in the markdown
 * @param md markdown-it
 * @param pattern The pattern to be replaced
 * @param replacement The replacement string
 */
export const replaceWithPattern = (
  md: MarkdownIt,
  pattern: RegExp,
  replacement: string
) => {
  md.core.ruler.before("inline", "replace-with-pattern", state => {
    state.tokens.forEach(token => {
      token.content = token.content.replace(pattern, replacement)
    })
  })
}
