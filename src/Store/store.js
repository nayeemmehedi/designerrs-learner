import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from './rootReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage"
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["login"],
    stateRecoiler: autoMergeLevel1,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
export const persistor = persistStore(store)

export default store