export const applicantsExample = {
  items: {
    'item-1': {
      id: 'item-1',
      first_name: 'Raphael',
      last_name: 'Joer',
      created_at: '2021-10-09'
    },
    'item-2': {
      id: 'item-2',
      first_name: 'Francisco',
      last_name: 'Lozada',
      created_at: '2021-10-09'
    },
    'item-3': {
      id: 'item-3',
      first_name: 'Carlos',
      last_name: 'Pinell',
      created_at: '2021-10-09'
    },
    'item-4': {
      id: 'item-4',
      first_name: 'Andre',
      last_name: 'Ferraro',
      created_at: '2021-10-09'
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'New',
      itemIds: ['item-1', 'item-2', 'item-3', 'item-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'HR Qualify',
      itemIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Tech Qualify',
      itemIds: []
    },
    'column-4': {
      id: 'column-4',
      title: 'Done',
      itemIds: []
    }
  },
  columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']
};
