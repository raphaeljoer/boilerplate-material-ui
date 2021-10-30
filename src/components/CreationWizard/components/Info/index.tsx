import React from 'react';
import { Box, Typography, TypographyProps } from '@mui/material';

type Props = {
  caption: string;
  title?: string;
  captionProps?: TypographyProps;
  titleProps?: TypographyProps;
};

export function Info({ caption, title, captionProps, titleProps }: Props) {
  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <Typography variant="caption" color="text.secondary" {...captionProps}>
        {caption}
      </Typography>
      <Typography variant="body1" mt={1} {...titleProps}>
        {title}
      </Typography>
    </Box>
  );
}
