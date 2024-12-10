import { useSelector } from "react-redux";

const ListTodos = () => {

    
      //* storedaki verileri almak için useSelector ile abone olduk.
      //* Direkt storeyi return edersek çok fazla render hatası uyarısı verir.
      //* Genelde sadece ihtiyacımız olan reducera abone oluruz.

    const storeState = useSelector((store) => store.todoReducer);
    
  return <div>{storeState.todos.map((todo) => (
   <TodoCart key = {todo.id} todo={todo}/>

  ))}</div>;
  
};

export default ListTodos
