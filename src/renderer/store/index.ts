import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import type { UseSelectorType } from '../types/store/index';

import countReducer from './count';

export default configureStore({
    reducer: {
        count: countReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActionPaths: ['payload'],
                ignoredPaths: [],
            },
        }),
});

export const useSelector: TypedUseSelectorHook<UseSelectorType> = rawUseSelector;
