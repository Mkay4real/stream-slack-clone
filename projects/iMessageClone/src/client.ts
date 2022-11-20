import {StreamChat} from 'stream-chat';
// import {
//   STREAM_API_KEY,
//   STREAM_USER_TOKEN,
//   STREAM_USER_ID,
// } from 'react-native-dotenv';

const STREAM_API_KEY="ppydvkr367sc";
const STREAM_USER_TOKEN="ben";
const STREAM_USER_ID="yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiYmVuIn0.RmhzIyHTFgntyJ-yGJznqWgZftnrs1VoUdPx8S0QrkQ";

export const userToken = STREAM_USER_TOKEN;
export const user = {id: STREAM_USER_ID};

export const chatClient = StreamChat.getInstance(STREAM_API_KEY);
