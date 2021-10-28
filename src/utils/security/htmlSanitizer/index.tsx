import React from 'react';
import xss from 'xss';
import { whiteList } from './options/whiteList';

export const strSanitizer = (html: string): string => {
  if (!html) return '';
  if (typeof html !== 'string') return '';
  return xss(html, { whiteList });
};

export const htmlSanitizer = (html: string): JSX.Element => {
  if (!html) return <span />;
  return <span dangerouslySetInnerHTML={{ __html: strSanitizer(html) }} />;
};

/*
 * # Article about sanitizers
 * https://medium.com/@rezaduty/how-to-write-secure-code-in-react-937579011d3c
 *
 * # xss
 * https://github.com/leizongmin/js-xss
 *
 */
