import { getInitials } from '../../../../../utils/string/getInitials/getInitials';
import { PipelineProps } from '../../../types';
import { PipelineDataAdapterProtocol } from '../../protocols/PipelineDataAdapterProtocol';

export type Item = {
  id: string;
  first_name: string;
  last_name: string;
  created_at: string;
};

export type Items = {
  [key: string]: Item;
};
export class Index implements PipelineDataAdapterProtocol {
  adapt(data: any): PipelineProps {
    const itemsFactory = (data: Items) => {
      const items = {};
      for (const [key, value] of Object.entries(data)) {
        Object.assign(items, {
          [key]: {
            id: value.id,
            title: `${value.first_name} ${value.last_name}`,
            avatarProps: {
              children: getInitials(value.first_name, value.last_name)
            },
            created_at: value.created_at
          }
        });
      }
      return items;
    };

    return {
      items: itemsFactory(data.items),
      columns: data.columns,
      columnOrder: data.columnOrder
    };
  }
}
