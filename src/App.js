
import { useEffect } from 'react';
import './App.css';
import Login from './components/login';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './store/usersSlice';
import Home from './components/home';
import { getExistingQuestions } from './store/existingQuestions';


function App() {
  const dispatch = useDispatch();
  const access = useSelector(state => state.login.access)
  const shouldrefresh = useSelector(state => state.createQuestion.shouldrefresh)
  

  useEffect(() => {
    dispatch(getUsers()); dispatch(getExistingQuestions());
  }, [dispatch, shouldrefresh])


  return (
    <div className="App">
      <h2>Polls App</h2>
      {access === false ? <Login /> :  <Home />}
    </div>
  );
}

export default App;
