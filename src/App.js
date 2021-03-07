import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import {  createContext, useState } from 'react';
import Main from './Components/Main/Main';
import Section from './Components/Section/Section';
export const CategoryContext = createContext()


function App() {
  const [count,setCount]=useState("Laptop")
  return (
    <div className="App">

      <CategoryContext.Provider value={count}>
        <Main count={count} setCount={setCount}> </Main>
        <h1>{count}</h1>
        
        <Section></Section>
      </CategoryContext.Provider>
        
    </div>
  );
}

export default App;
