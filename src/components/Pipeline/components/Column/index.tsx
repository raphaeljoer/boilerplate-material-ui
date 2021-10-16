import React from 'react';
import { Box, Typography } from '@mui/material';
import { Droppable } from 'react-beautiful-dnd';
import { ColumnProps, ItemProps } from '../../types';
import { Item } from '../Item';
import * as styles from './styles';

type Props = {
  column: ColumnProps;
  items: ItemProps[];
};

export function Column({ column, items }: Props): JSX.Element {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">{column.title}</Typography>
      <Droppable droppableId={column.id}>
        {(provided): JSX.Element => (
          <Box
            sx={styles.items}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Item key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
}
