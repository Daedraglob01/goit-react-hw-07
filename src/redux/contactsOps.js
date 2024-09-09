import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66dc234a47d749b72acad634.mockapi.io/";

export const fetchContactsThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  "contacts/addContact",
  async (values, thunkAPI) => {
    try {
      const { data } = await axios.post("contacts", values);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);