import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import AppRouter from './router/AppRouter'
import { fetchCurrentUser } from './actions/users'
import './App.scss'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [])

  return (
      <AppRouter />
  );
}

export default App;
