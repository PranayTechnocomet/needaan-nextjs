import { configureStore } from '@reduxjs/toolkit';
import { needanSessionStart } from './api/needanSessionStart';
const store = configureStore({
  reducer: {
    needanSessionStart: needanSessionStart.reducer,
    
  },
});

export default store;
