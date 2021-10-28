import { IWhiteList } from "xss";

export const whiteList: IWhiteList = {
  // a: ['href', 'title', 'target'],
  // img: ['src', 'alt', 'title', 'width', 'height'],
  b: [],
  blockquote: [],
  br: [],
  caption: [],
  cite: [],
  dd: [],
  del: ['datetime'],
  div: [],
  dl: [],
  dt: [],
  em: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  ins: ['datetime'],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  span: [],
  sub: ['subscript'],
  sup: ['superscript'],
  strong: [],
  table: [],
  tbody: [],
  td: [],
  th: [],
  thead: [],
  tr: [],
  ul: [],
};

/*
* # Options Doc
* https://jsxss.com/en/options.htmlSanitizer
*/
