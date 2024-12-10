import React from 'react'
import { v4 } from "uuid";
import api from '../utils/api';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions/todoActio';

const addForm = () => {

  //*Bu bileşen içerisinde dispatch metodunu kullanmamızı sağlar.
  const dispatch = useDispatch()

  //*Form gönderildiğinde çalışır.
  const handleSubmit = (e) => {e.preventDefault();
//* Input boş ise durdur.
    if (e.target[0].valu) return;

    //* Store'a kaydedilecek olan veriyi hazırladık.
const newTodo = {
  id: v4 (),
  text: e.target [e].value,
  is_done: false, 
  created_at: new Date () .toLocaleDateString(),

};
 api
 .post("/todos", newTodo)
 .then(() => dispatch(addTodo(newTodo)))
 .catch((err) => {
  
  throw new Error(err.message);
});

e.target.reset();
};


  return ( 
  <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
    <input 
    type="text" 
    placeholder="Örn: Redux projesi"
    className="form-control"
    />
    <button className="btn btn-warning">Gönder</button>
  </form>
  );
};

export default addForm
