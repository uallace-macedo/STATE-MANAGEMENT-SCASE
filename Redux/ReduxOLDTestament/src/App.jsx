import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginUser, logoutUser } from './redux/user/actions';

const App = () => {
  const { register, handleSubmit, resetField } = useForm();
  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const dispatch = useDispatch();

  const resetFields = () => {
    resetField('name');
    resetField('lastname');
  }

  const handleLoginClick = (data) => {
    dispatch(loginUser({ name: data.name, lastname: data.lastname }));
    resetFields();
  }
  
  const handleLogoutClick = () => {
    dispatch(logoutUser());
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