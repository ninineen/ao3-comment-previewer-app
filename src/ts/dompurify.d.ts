// Minimal ambient declaration for DOMPurify loaded via CDN script tag.
// Only the methods and hooks used in comment-preview.ts are typed here.

interface DOMPurifyConfig {
  ALLOWED_TAGS?: string[];
  ALLOWED_ATTR?: string[];
  KEEP_CONTENT?: boolean;
}

interface SanitizeElementHookData {
  tagName: string;
}

interface SanitizeAttributeHookData {
  attrName: string;
}

type DOMPurifyHookName =
  | "uponSanitizeElement"
  | "uponSanitizeAttribute";

declare const DOMPurify: {
  sanitize(dirty: string, config?: DOMPurifyConfig): string;
  addHook(
    hook: "uponSanitizeElement",
    cb: (node: Node, data: SanitizeElementHookData) => void
  ): void;
  addHook(
    hook: "uponSanitizeAttribute",
    cb: (node: Node, data: SanitizeAttributeHookData) => void
  ): void;
  removeAllHooks(): void;
};
