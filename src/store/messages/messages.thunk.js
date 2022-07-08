import { createAsyncThunk } from '@reduxjs/toolkit'
import { getMessages } from '../../data'

export const fetchMessages = createAsyncThunk(
  'messages/fetchMessages',
  async () => {
    // const response = await axios.get(`${apiUrl}/messages/all`);
    // return response.data;
    console.log("fedfdef")
    return getMessages()
  }
)

export const fetchMessagesByUser = createAsyncThunk(
  'messages/fetchMessagesByUser',
  async (id) => {
    const res = await getMessages();
    return res.filter(message => message.userId === id)
  }
)
