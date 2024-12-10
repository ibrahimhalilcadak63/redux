import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { applyMiddleware } from 'redux';

const Modal = ((close, todo)) => {

const inputRef = useRef();
const dispatch = useDispatch()

const handleClick = () => {
  //* 1) İnputtaki değeri al
  const newText = inputRef.current.value
  //* 2) todo nesnesinin title değerini ve tarihini güncelle 
  const updateTodo = {
    ...todo,
    text: newText,
    created_at: new Date (). toLocalDateString()
  };
  //* 3) APİ'ye güncel veriyi kaydet
  api 
  .put('/todos/${todo.id}'updatedTodo)
  //* 4) reducera elemanın güncelleneceğini haber ver
  .then(() => dispatch(updateTodo (updatedTodo))
  //* 5) Hata olursa yakala
  .catch((err) => alert ("Üzgünüz bir hata oluştu")));
  //* 6)Modalı kapat
  close();
};

  return (
    <div class="modal bg-black text-dark bg-opacity-50 d-flex align-items-center">
  <div className="modal-dialog w-75 h-50">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Todo'yu Güncelle</h5>
        <button 
        onClick = {close}
        type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body my-2">
        <label>Yeni Başlık</label>
        <input 
        ref={inputRef}
        defaultValue={todo.text}
        type="text" className='form-control shadow mt-2' />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
        onClick = {close}
        >İptal Et
        </button onClick = {handleClick} >
        <button type="button" class="btn btn-primary">Kaydet</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Modal
