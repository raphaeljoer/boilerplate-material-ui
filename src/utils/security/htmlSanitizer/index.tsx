import React from 'react';
// import dompurify from 'dompurify';
import xss from 'xss';

export const htmlSanitizer = (html: string): JSX.Element => {
  if (!html) return <div />;
  return <div dangerouslySetInnerHTML={{ __html: xss(html) }} />;
};

/*
 * # Article about sanitizers
 * https://medium.com/@rezaduty/how-to-write-secure-code-in-react-937579011d3c
 *
 * # xss
 * https://github.com/leizongmin/js-xss
 *
 */
