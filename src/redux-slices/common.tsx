import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  isSideBarOpen: boolean;
  isModalOpen: boolean;
  allContacts: Array<type>;
  editIndex: number;
  contactToEdit: { [key: string]: any };
}

// Type for allContacts
interface type {
  firstname: string;
  lastname: string;
  phonenumber: string;
  status: string;
}

const initialState: AppState = {
  isSideBarOpen: false,
  isModalOpen: false,
  allContacts: [],
  editIndex: null,
  contactToEdit: {
    firstname: "",
    lastname: "",
    phonenumber: "",
    status: "",
  },
};

export const appSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    toggleSidebarMenu: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    toggleModalMenuTrue: (state) => {
      state.isModalOpen = true;
    },
    toggleModalMenuFalse: (state) => {
      state.isModalOpen = false;
    },
    addContact: (state, action) => {
      state.allContacts.push(action.payload);
    },
    setEditInfo: (state, action) => {
      state.editIndex = action.payload.index;
      state.contactToEdit = action.payload.contact;
    },
    updateContact: (state, action) => {
      const { index, updatedContact } = action.payload;
      if (index >= 0 && index < state.allContacts.length) {
        state.allContacts[index] = updatedContact;
      }
    },
    deleteContact: (state, action) => {
      const indexToDelete = action.payload;
      if (indexToDelete >= 0 && indexToDelete < state.allContacts.length) {
        state.allContacts.splice(indexToDelete, 1);
      }
    },
  },
});

// Action creators for each case of reducer function
export const {
  toggleSidebarMenu,
  toggleModalMenuTrue,
  toggleModalMenuFalse,
  addContact,
  setEditInfo,
  updateContact,
  deleteContact,
} = appSlice.actions;

export default appSlice.reducer;
