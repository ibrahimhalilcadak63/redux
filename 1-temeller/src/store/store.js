/*
    *Store Oluşturma
    1. redux kütüphanesinden 'createStore' methodu import edilir.
    2. store içerisinde tutulacak olan her bir veri için reducerlar oluşturur
    3. Oluşturulan reducerlar 'combineReducers' ile birleştirilir.
    4. Store'ye birleştirilen  reducerlar tanıtılır.
*/

import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userRedducer";

//*Birden fazla reducer varsa bunları birleştirir.

const rootReducer = combineReducers({
    todoReducer,
    userReducer,
})
//* Store oluşturulur.
const store = createStore(rootReducer);

//* projeye tanıtmak için export ederiz.

export default store;

