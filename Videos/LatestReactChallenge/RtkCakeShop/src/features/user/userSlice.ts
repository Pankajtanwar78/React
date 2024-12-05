import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

type Users = {
  id: number;
  name: string;
}

type InitialState = {
  loading: boolean;
  users: Users[];
  error: string;
}

const initialState: InitialState = {
  loading: false,
  users: [],
  error: ''
}

// export const fetchUsers = createAsyncThunk('user/fetchUsers',async () => {
//   return axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.data.map(user => {return {id: user.id, name: user.name}}))
// })

export const fetchUsers = createAsyncThunk<Users[], { signal: AbortSignal }, { rejectValue: string }>(
  "user/fetchUsers",
  async ({ signal}, {rejectWithValue }) => {
    

    try {

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users",
        { signal }
      );
      
      return response.data.map((user) => ({ id: user.id, name: user.name }));
    } catch (error) {
      // Check if the error is due to the request being canceled
      
        if (axios.isCancel(error)) {
          console.log('error')
          return rejectWithValue("Request canceled");
        }
        
      
      return rejectWithValue("Something went wrong");
      
    }
  }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{},
    extraReducers: (builder) => 
      builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state,action: PayloadAction<Users[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = ''
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.payload || action.error.message || 'something went wrong';
        
      })
  })

export const userReducer = userSlice.reducer;