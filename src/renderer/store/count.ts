import { createSlice } from '@reduxjs/toolkit';
import type { DispatchType } from 'renderer/types/store';
import type { Add, Minus, AsyncAdd } from 'renderer/types/store/Count';

const countState = {
    count: 0,
};

const count = createSlice({
    name: 'count',
    initialState: {
        countState,
    },
    reducers: {
        init(state) {
            state.countState = countState;
        },
        add(state, { payload }: Add) {
            state.countState.count += payload;
        },
        minus(state, { payload }: Minus) {
            state.countState.count -= payload;
        },
    },
});

const { init, add, minus } = count.actions;

const asyncAdd = ({ payload }: AsyncAdd) => {
    return async (dispatch: DispatchType) => {
        dispatch(add(payload));
    };
};

export { init, add, minus, asyncAdd };

export default count.reducer;
