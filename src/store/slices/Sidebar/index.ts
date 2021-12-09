//redux
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isOpen: boolean;
};

const initialState: InitialState = {
  isOpen: true
};

export const Sidebar = createSlice({
  name: '@Sidebar',
  initialState,
  reducers: {
    SidebarSetIsOpen: (draft) => {
      draft.isOpen = !draft.isOpen;
    }
  }
});

export const { SidebarSetIsOpen } = Sidebar.actions;

export const sidebarReducer = Sidebar.reducer;
