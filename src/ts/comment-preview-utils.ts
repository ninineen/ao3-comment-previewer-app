// Pure utility functions extracted for unit testing.

/** Strip the trailing <br> Quill injects before closing block tags. */
export function stripTrailingBrs(html: string): string {
  return html.replace(/<br\s*\/?>\s*(<\/(?:p|li|h[1-6]|blockquote|td|th)>)/gi, "$1");
}

/** Return true if a string contains what looks like an HTML tag. */
export function looksLikeHtml(text: string): boolean {
  return /<[a-z][\s\S]*>/i.test(text);
}

/**
 * Return true if the string contains HTML-encoded tags, i.e. the user pasted
 * raw HTML into Quill and it got entity-encoded rather than rendered.
 * e.g. "&lt;b&gt;hello&lt;/b&gt;"
 */
export function containsEncodedHtmlTags(html: string): boolean {
  return /&lt;[a-z][^&]*&gt;/i.test(html);
}

/**
 * Decode HTML entities that represent tag characters so the string can be
 * re-parsed as actual HTML.  Only decodes &lt; &gt; &amp; — enough to
 * recover pasted HTML tags without unintentionally decoding prose.
 */
export function decodeTagEntities(html: string): string {
  return html
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}
