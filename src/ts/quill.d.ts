// Minimal ambient declaration for Quill 2 loaded via CDN script tag.

interface QuillOptions {
  theme?: string;
  placeholder?: string;
  modules?: {
    toolbar?: unknown;
  };
}

interface Delta {
  ops: unknown[];
}

interface QuillClipboard {
  convert(input: { html: string }): Delta;
  addMatcher(selector: number, handler: (node: Node, delta: Delta) => Delta): void;
}

declare class Quill {
  constructor(selector: string | Element, options?: QuillOptions);
  root: HTMLElement;
  clipboard: QuillClipboard;
  on(event: "text-change", handler: (delta: Delta, oldDelta: Delta, source: string) => void): void;
  getSelection(focus?: boolean): { index: number; length: number };
  setSelection(index: number, length: number, source?: string): void;
  setText(text: string, source?: string): void;
  setContents(delta: Delta, source?: string): void;
  updateContents(delta: Delta, source?: string): void;
  focus(): void;
}
