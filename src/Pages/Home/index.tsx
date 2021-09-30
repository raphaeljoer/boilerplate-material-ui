import { Link, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { RiFolderOpenLine } from 'react-icons/ri';
import { Layout, Main } from '../../Components';

export function Home() {
  return (
    <Layout>
      <Main>
        <ListItem component={Link} onClick={() => console.log('click')}>
          <ListItemIcon>
            <RiFolderOpenLine />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>
      </Main>
    </Layout>
  );
}
