export type ColumnProps = {
  id: string;
  title: string;
  itemIds: string[];
};

export type ColumnsProps = {
  [key: string]: ColumnProps;
};
