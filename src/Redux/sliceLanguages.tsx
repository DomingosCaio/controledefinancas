import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Languages {
  id: number;
  expense: string;
  type: string;
  value: number;
}

const INITIAL_STATE: Languages[] = [
  { id: 1, expense: "Netflix", type: "streamming", value: 29.9 },
  { id: 2, expense: "Amazon", type: "streamming", value: 9.9 },
  { id: 3, expense: "HBO", type: "streamming", value: 19.9 },
  { id: 4, expense: "OIFibra", type: "WEB", value: 99.9 },
  { id: 5, expense: "Faculdade", type: "Estudo", value: 150 },
];

const sliceLanguages = createSlice({
  name: "languages",
  initialState: INITIAL_STATE,
  reducers: {
    addLanguages(state, { payload }: PayloadAction<any>) {
      return [
        ...state,
        { id: payload, expense: payload, type: payload, value: payload },
      ];
    },
  },
});

export default sliceLanguages.reducer;
export const { addLanguages } = sliceLanguages.actions;

export const useLanguages = (state: any) => {
  return state.languages as Languages[];
};
