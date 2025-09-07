import React from 'react'
import Calci from './pages/Calci'
import TicTacToe from './pages/TicTacToe'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MyContext from './MyContext'
import TodoList from './pages/TodoList'
import AddProduct from './pages/AddProduct'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {
  return (
    <MyContext>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/calci' element={<Calci></Calci>}></Route>
        <Route path='/tic-tac-toe' element={<TicTacToe></TicTacToe>}> </Route>
        <Route path='/todo-list' element={<TodoList/>}> </Route>
        <Route path='/add-product' element={<AddProduct/>}></Route>
        <Route path='/sign-up' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    </MyContext>
  )
}

export default App