import React from 'react';
import dompurify from 'dompurify';

export const htmlSanitizer = (stringWithHTML: string): JSX.Element => {
  if (!stringWithHTML) return <span></span>;
  const sanitizer = dompurify.sanitize;
  return (
    <span dangerouslySetInnerHTML={{ __html: sanitizer(stringWithHTML) }} />
  );
};

/*
 * # Article about sanitizers
 * https://medium.com/@rezaduty/how-to-write-secure-code-in-react-937579011d3c
 */
