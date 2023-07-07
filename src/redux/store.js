import { configureStore } from "@reduxjs/toolkit";

import rootRducer from "./rootReducer";

const store = configureStore({
    reducer: rootRducer
})

export { store };