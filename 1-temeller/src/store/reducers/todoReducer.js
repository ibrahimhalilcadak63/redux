import ActionTypes from "../actionTypes";

//! Reducer
//* State'in nasıl değişeceğine karar verir.
//* Reducer normal bir fonksiyondur.
//* Bu fonksiyon iki parametre alır.
//>> State: reducerda tutulan verilerin son durumudur.
//>> action: verilerin nasıl değişeceğini ifade eden nesnedir.

//* use Reducer'dan farklı olarak initialState'i state parametresine varsayılan değer olarak veriririz.
const initialState = {
    todos: [],
    isDarkMode: true,

};

const todoReducer = (state = initialState, action) => {
    console.log(action);
//* Aksiyonun type' ine göre gerekli güncellemeyi yap.
    switch(ActionTypes) {
        case ActionTypes.ADD:
        console.log(action)
        return {
            ...state,
            todos:state.todos.concat(action.payload)
        }; 
        case ActionTypes.DELETE:

        //Diziden silinecek elemanı kaldır.
            const filtred = state.todos.filter((i) => i.id !==action.payload)
        //*Reducerda tutulan todos değerini güncelle
            return {...state, todos: filtred};
        case ActionTypes.UPDATE:

        //* Todos dizisini map ile dön . içerisindeki her bir verinin id si ile benim tıkladığım todo'nun id'si eşit ise yerine actiondan gelen payloadı koy değilse eski haline dönder.
            const updateArr = state.todos.map((i) => i.id === action.payload.id ? action.payload : i);
        case ActionTypes.SET:
            return {...state,todos: action.payload};
    };

    return {...state, todos: updateArr};
    return state;
};

export default todoReducer;