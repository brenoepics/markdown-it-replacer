/* eslint-disable jest/valid-title */
import MarkdownIt from "markdown-it"
import replaceVarPlugin from "../src"

describe("replaceVarPlugin", () => {
  const mdit = MarkdownIt().use(replaceVarPlugin, { variable: "testing" })

  it("replaces variable in text", () => {
    const text = "variable"
    const rendered = mdit.render(text)
    expect(rendered).toEqual("<p>testing</p>\n")
  })

  it("replaces multiple instances of variable", () => {
    const text = "variable variable"
    const rendered = mdit.render(text)
    expect(rendered).toEqual("<p>testing testing</p>\n")
  })

  it("does replace variable in code blocks", () => {
    const text = "`variable`"
    const rendered = mdit.render(text)
    expect(rendered).toEqual("<p><code>testing</code></p>\n")
  })

  it("handles empty text", () => {
    const text = ""
    const rendered = mdit.render(text)
    expect(rendered).toEqual("")
  })
})
