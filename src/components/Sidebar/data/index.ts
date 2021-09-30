import {
  RiFolderOpenLine,
  RiGroupLine,
  RiDashboard2Line
} from 'react-icons/ri';
import { route } from '../../../routes/paths';
import { Menu, MenuItem } from '../entities/menu';

const recruiterMenuItems: MenuItem[] = [
  {
    id: '69de2aac-9ef1-447f-9180-6f7438bad63b',
    label: 'Job Requisitions',
    path: route.jobs,
    icon: RiFolderOpenLine
  },
  {
    id: 'e04fd62f-29ce-4fe3-9834-e16c779e78ee',
    label: 'Applicants',
    path: '/applicants',
    icon: RiGroupLine
  },
  {
    id: '343ea451-14fd-47b4-9cdc-b898d9170c39',
    label: 'Reports',
    path: '/reports',
    icon: RiDashboard2Line
  }
];

const companyMenuItems: MenuItem[] = [
  {
    id: '69de2aac-9ef1-447f-9180-6f7438bad63b',
    label: 'Job Requisitions',
    path: '/job',
    icon: RiFolderOpenLine
  },
  {
    id: 'e04fd62f-29ce-4fe3-9834-e16c779e78ee',
    label: 'Applicants',
    path: '/applicants',
    icon: RiGroupLine
  },
  {
    id: '343ea451-14fd-47b4-9cdc-b898d9170c39',
    label: 'Reports',
    path: '/reports',
    icon: RiDashboard2Line
  }
];

export const menu: Menu[] = [
  {
    id: '343ea451-14fd-47b4-9cdc-b898d96hdo39',
    label: 'Recruiter',
    menuItems: recruiterMenuItems
  },
  {
    id: '343ea451-14fd-47b4-9cdc-b898d9646fba',
    label: 'Company',
    menuItems: companyMenuItems
  }
];
