import { applicantsExample as input } from '../../../../data/applicantsExample';
import { Index } from '../index';

describe('ApplicantsPipelineDataAdapter', () => {
  test('Should return a pipeline data object', () => {
    const sut = new Index();
    const output = sut.adapt(input);
    expect(output).toEqual({
      items: {
        'item-1': {
          id: 'item-1',
          title: 'Raphael Joer',
          avatarProps: { children: 'RJ' },
          created_at: '2021-10-09'
        },
        'item-2': {
          id: 'item-2',
          title: 'Francisco Lozada',
          avatarProps: { children: 'FL' },
          created_at: '2021-10-09'
        },
        'item-3': {
          id: 'item-3',
          title: 'Carlos Pinell',
          avatarProps: { children: 'CP' },
          created_at: '2021-10-09'
        },
        'item-4': {
          id: 'item-4',
          title: 'Andre Ferraro',
          avatarProps: { children: 'AF' },
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
    });
  });
});
