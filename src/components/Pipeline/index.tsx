//material-ui
import { Box } from '@mui/system';
//core-Components
import { Column } from './components/Column';
//resources
import React from 'react';
import { useCallback, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { index } from './utils/reOrder';
//types
import { PipelineProps } from './types';
//styles
import * as styles from './styles';

type Props = {
  data: PipelineProps;
};

export function Pipeline({ data }: Props) {
  const [pipeline, setPipeline] = useState<PipelineProps>(data);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      const newPipeline = index(pipeline, result);
      if (!newPipeline) return;
      setPipeline(newPipeline);
    },
    [pipeline]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box sx={styles.container}>
        {pipeline.columnOrder.map((columnId) => {
          const column = pipeline.columns[columnId];
          const items = column.itemIds.map((itemId) => pipeline.items[itemId]);
          return <Column key={column.id} column={column} items={items} />;
        })}
      </Box>
    </DragDropContext>
  );
}
