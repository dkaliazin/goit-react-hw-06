import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
	name: 'search',
	initialState: {
		name: ""
	},
	reducers: {
		setSearch(value, action) {
			value.name = action.payload
		}
	}
});
export const { setSearch } = slice.actions;
export const selectFilter = value => value.search.name;
export default slice.reducer;