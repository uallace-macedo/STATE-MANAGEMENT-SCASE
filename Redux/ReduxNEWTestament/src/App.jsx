import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/user/slice';

const App = () => {
    const { register, handleSubmit, resetField } = useForm();
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
  
    const resetFields = () => {
      resetField('name');
      resetField('lastname');
    }
  
    const handleLoginClick = (data) => {
      dispatch(login({ name: data.name, lastname: data.lastname }));
      resetFields();
    }
    
    const handleLogoutClick = () => {
      dispatch(logout());
      resetFields();
    }
  
    return (
      <div>
        <h1>User State Management</h1>
        <p>Nome: {currentUser.name}</p>
        <p>Sobrenome: {currentUser.lastname}</p>
  
        <div>
          <div>
            <input {...register('name')} type="text" placeholder='Nome'/>
            <input {...register('lastname')} type="text" placeholder='Sobrenome'/>
          </div>
          <button onClick={handleSubmit(handleLoginClick)}>Login</button>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      </div>
    )
  }
  
  export default App;