import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVinData, IVinDataList } from "src/interfaces/mainPage";

const initialState: IVinDataList = {
    vinData: [],
    limit: 3,
}

const setVinParametersSlice = createSlice({
    name: 'set vin parameters',
    initialState,
    reducers: {
        setVinData: (state, action: PayloadAction<IVinData>) => {
            state.vinData = [action.payload, ...state.vinData].slice(0, state.limit);
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
            state.vinData = state.vinData.slice(0, state.limit);
        }
    }
});

export const { setVinData, setLimit } = setVinParametersSlice.actions;
export default setVinParametersSlice.reducer;