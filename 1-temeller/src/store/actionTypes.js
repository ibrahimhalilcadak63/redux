//* Projede kullanılan aksiyon tipleri string şekilde tanımlandığından dikkat dağınıklığı sonucu ouşabilecek ve tespit etmesi zaman alabilcek hataların önüne geçmek için tipleri bir nesne içerisinde tanımlarız.

const ActionTypes = {
    ADD: "ADD",
    DELETE: "DELETE",
    UPDATE: "UPDATE",
    SET: "SET",
};
export default ActionTypes;

export const ADD = "ADD";