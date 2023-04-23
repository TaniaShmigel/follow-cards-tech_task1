// import logo from './logo.svg';
import { useEffect, useState } from 'react';
// import Card from "./components/card"
import './App.css';
import GlobalStyle from "./GlobalStyle";
import {getUsers} from './service/Api'
import CardList from './components/cardList/CardList ';

function App() {

  const [users, setUsers] = useState([])
      

  useEffect(() => {
      
      getUsers()
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          return error;
        });
  
     
    }, []);

 
  
    // const { user} = users

  return (
    <>
    <GlobalStyle/>
    <CardList users={users}/>
    </>
  );
}

export default App;
