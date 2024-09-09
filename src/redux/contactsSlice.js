import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from "./contactsOps";
import { selectFilter } from "./filtersSlice";

const initialState = {
  contacts: [],
  isLoading: false,
  isError: null,
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.push(payload);
      })
      .addCase(deleteContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter((con) => con.id !== payload);
      })
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.isError = null;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("/rejected"),
        (state, { error }) => {
          state.isLoading = false;
          state.isError = error;
        }
      );
  },
});
export const selectContacts = (state) => state.contacts.contacts;

export const contactsReducer = contactSlice.reducer;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);