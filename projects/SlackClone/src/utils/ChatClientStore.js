// import {API_KEY} from 'react-native-dotenv';
import {StreamChat} from 'stream-chat';

const API_KEY="ppydvkr367sc";
export const ChatClientStore = {
  get client() {
    return StreamChat.getInstance(API_KEY, {
      timeout: 10000,
    });
  },
};
