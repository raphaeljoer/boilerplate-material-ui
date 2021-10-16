import { DropResult } from 'react-beautiful-dnd';
import { PipelineProps } from '../../types';

export const index = (
  pipeline: PipelineProps,
  result: DropResult
): PipelineProps | undefined => {
  const { destination, source, draggableId } = result;

  if (!destination) return;
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return;

  const startColumn = pipeline.columns[source.droppableId];
  const endColumn = pipeline.columns[destination.droppableId];

  if (startColumn === endColumn) {
    //reorder within the same column
    const newItemsId = Array.from(startColumn.itemIds);
    newItemsId.splice(source.index, 1);
    newItemsId.splice(destination.index, 0, draggableId);

    const newColumn = { ...startColumn, itemIds: newItemsId };
    const newState = {
      ...pipeline,
      columns: {
        ...pipeline.columns,
        [newColumn.id]: newColumn
      }
    };

    return newState;
  }

  //reorder between different columns
  const newItemsId = Array.from(startColumn.itemIds);
  newItemsId.splice(source.index, 1);

  const newStartColumn = { ...startColumn, itemIds: newItemsId };

  const newEndItemsId = Array.from(endColumn.itemIds);
  newEndItemsId.splice(destination.index, 0, draggableId);
  const newEndColumn = { ...endColumn, itemIds: newEndItemsId };

  const newState = {
    ...pipeline,
    columns: {
      ...pipeline.columns,
      [newStartColumn.id]: newStartColumn,
      [newEndColumn.id]: newEndColumn
    }
  };

  return newState;
};
