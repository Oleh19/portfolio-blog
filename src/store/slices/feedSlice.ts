import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFeedSlice {
  selectedTag: null | string;
}

const initialState: IFeedSlice = {
  selectedTag: null,
};

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    selectTag(state, action: PayloadAction<string | null>) {
      state.selectedTag = action.payload;
    },
  },
});

export const { selectTag } = feedSlice.actions;
