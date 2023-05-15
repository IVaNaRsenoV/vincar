import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IList, IListData } from "src/interfaces/mainPage";

const initialState: IListData = {
    data: []
}

const setVinDataSlice = createSlice({
    name: 'set vin data',
    initialState,
    reducers: {
        setVinData: (state, action: PayloadAction<IList[]>) => {
            state.data = action.payload;
        }
    }
});

export const { setVinData } = setVinDataSlice.actions;
export default setVinDataSlice.reducer;