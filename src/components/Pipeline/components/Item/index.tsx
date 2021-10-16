import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { formatDateDistance } from '../../../../utils/date/formatDateDistance';
import { ItemProps } from '../../types';
import { Draggable } from 'react-beautiful-dnd';
import * as styles from './styles';

type Props = {
  index: number;
  item: ItemProps;
};

export function Item({ item, index }: Props) {
  const { title, avatarProps, description } = item;

  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <Box
          sx={{ ...styles.container, ...styles.shadow(snapshot.isDragging) }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Avatar {...avatarProps} sx={styles.avatar} />
          <Box sx={styles.content}>
            <Typography sx={{ fontWeight: '500' }}>{title}</Typography>
            {description && (
              <Typography variant="body2">{description}</Typography>
            )}
            <Typography variant="caption" color="text.secondary">
              {formatDateDistance(item.created_at)}
            </Typography>
          </Box>
        </Box>
      )}
    </Draggable>
  );
}
