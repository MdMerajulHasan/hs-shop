import { BRANCHES, Branch } from "@/assets/brunches";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type branchState = {
    items: Branch[];
    selectedBranch: Branch | null;
};

const initialState: branchState = {
    items: BRANCHES,
    selectedBranch: null,
};

const branchSlice = createSlice({
    name: "branch",
    initialState,
    reducers: {
        setSelectedBranch(state, action: PayloadAction<Branch | null>) {
            state.selectedBranch = action.payload;
        }
    }
});

export const { setSelectedBranch } = branchSlice.actions;
export default branchSlice.reducer;