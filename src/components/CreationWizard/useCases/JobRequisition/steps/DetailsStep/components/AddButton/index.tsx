import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'components/Link';

type Props = {
  tip: string;
  to: string;
};

export function AddButton({ tip, to }: Props) {
  return (
    <Link to={to}>
      <Tooltip title={tip}>
        <IconButton
          aria-label={tip}
          size="large"
          sx={{ mt: 0.5, height: 'fit-content' }}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>
    </Link>
  );
}
