import {
  stripTrailingBrs,
  looksLikeHtml,
  containsEncodedHtmlTags,
  decodeTagEntities,
} from "./comment-preview-utils";

// ── stripTrailingBrs ───────────────────────────────────

describe("stripTrailingBrs", () => {
  it("strips <br> before </p>", () => {
    expect(stripTrailingBrs("<p>hello<br></p>")).toBe("<p>hello</p>");
  });

  it("strips self-closing <br/> before </p>", () => {
    expect(stripTrailingBrs("<p>hello<br/></p>")).toBe("<p>hello</p>");
  });

  it("strips <br> before </li>", () => {
    expect(stripTrailingBrs("<li>item<br></li>")).toBe("<li>item</li>");
  });

  it("strips <br> before heading close tags", () => {
    expect(stripTrailingBrs("<h1>title<br></h1>")).toBe("<h1>title</h1>");
    expect(stripTrailingBrs("<h3>title<br></h3>")).toBe("<h3>title</h3>");
    expect(stripTrailingBrs("<h6>title<br></h6>")).toBe("<h6>title</h6>");
  });

  it("strips <br> before </blockquote>", () => {
    expect(stripTrailingBrs("<blockquote>text<br></blockquote>")).toBe(
      "<blockquote>text</blockquote>"
    );
  });

  it("does NOT strip a <br> that is mid-content", () => {
    expect(stripTrailingBrs("<p>line one<br>line two</p>")).toBe(
      "<p>line one<br>line two</p>"
    );
  });

  it("handles multiple paragraphs", () => {
    expect(stripTrailingBrs("<p>a<br></p><p>b<br></p>")).toBe("<p>a</p><p>b</p>");
  });

  it("returns unchanged string when no trailing <br> present", () => {
    expect(stripTrailingBrs("<p>hello</p>")).toBe("<p>hello</p>");
  });

  it("handles whitespace between <br> and closing tag", () => {
    expect(stripTrailingBrs("<p>hello<br>  </p>")).toBe("<p>hello</p>");
  });
});

// ── looksLikeHtml ─────────────────────────────────────

describe("looksLikeHtml", () => {
  it("detects a simple tag", () => {
    expect(looksLikeHtml("<b>hello</b>")).toBe(true);
  });

  it("detects a tag with attributes", () => {
    expect(looksLikeHtml('<a href="https://example.com">link</a>')).toBe(true);
  });

  it("detects a self-closing tag", () => {
    expect(looksLikeHtml("<br>")).toBe(true);
    expect(looksLikeHtml("<hr />")).toBe(true);
  });

  it("detects multi-tag HTML", () => {
    expect(looksLikeHtml("<p><strong>bold</strong> and <em>italic</em></p>")).toBe(true);
  });

  it("returns false for plain text", () => {
    expect(looksLikeHtml("hello world")).toBe(false);
  });

  it("returns false for text with angle brackets that aren't tags", () => {
    expect(looksLikeHtml("3 < 5 and 7 > 2")).toBe(false);
  });

  it("returns false for empty string", () => {
    expect(looksLikeHtml("")).toBe(false);
  });
});

// ── containsEncodedHtmlTags ───────────────────────────

describe("containsEncodedHtmlTags", () => {
  it("detects encoded opening tag", () => {
    expect(containsEncodedHtmlTags("&lt;b&gt;hello&lt;/b&gt;")).toBe(true);
  });

  it("detects encoded tag with attributes", () => {
    expect(containsEncodedHtmlTags('&lt;a href="url"&gt;link&lt;/a&gt;')).toBe(true);
  });

  it("detects encoded tag mixed with plain text in a p element", () => {
    // This is what Quill produces when it entity-encodes pasted HTML
    expect(containsEncodedHtmlTags("<p>&lt;b&gt;hello&lt;/b&gt;</p>")).toBe(true);
  });

  it("returns false for normal HTML (non-encoded tags)", () => {
    expect(containsEncodedHtmlTags("<p><b>hello</b></p>")).toBe(false);
  });

  it("returns false for plain text", () => {
    expect(containsEncodedHtmlTags("hello world")).toBe(false);
  });

  it("returns false for HTML entities that are not tags", () => {
    expect(containsEncodedHtmlTags("cats &amp; dogs")).toBe(false);
    expect(containsEncodedHtmlTags("3 &lt; 5")).toBe(false);
  });
});

// ── decodeTagEntities ─────────────────────────────────

describe("decodeTagEntities", () => {
  it("decodes &lt; and &gt;", () => {
    expect(decodeTagEntities("&lt;b&gt;hello&lt;/b&gt;")).toBe("<b>hello</b>");
  });

  it("decodes &amp;", () => {
    expect(decodeTagEntities("cats &amp; dogs")).toBe("cats & dogs");
  });

  it("round-trips encoded pasted HTML back to usable HTML", () => {
    const encoded = "<p>&lt;strong&gt;bold&lt;/strong&gt; text</p>";
    const decoded = decodeTagEntities(encoded);
    expect(decoded).toBe("<p><strong>bold</strong> text</p>");
  });

  it("leaves already-decoded HTML unchanged", () => {
    expect(decodeTagEntities("<b>hello</b>")).toBe("<b>hello</b>");
  });
});
