//*Aksiyon nesnesi oluşturan fonksiyon
//*payload değeri dinamik olacağı için fonksiyonları tercih ettik. ve payload değerini parametre olarak aldık.
//*Bu fonksiyonlar çağrıldığında bir aksiyon nesnesi dönderir.
//*Bileşen içerisindeki dispatch alanındaki kodları kısaltıp daha okunabilir hale getiriyoruz.

import ActionTypes from "../actionTypes";

export const addTodo = (payload) => {
    return { 
   type: ActionTypes.ADD,
   payload,
};
};

export const deleteTodo = (payload) =>({
    return{
        type:ActionTypes.DELETE,
        payload,
    }
});
 
export const setTodos = (payload) => ({type:ActionTypes.SET.
    payload,

});

export const updateTodo = payload => ({
    type:ActionTypes.UPDATE,
    payload,
});