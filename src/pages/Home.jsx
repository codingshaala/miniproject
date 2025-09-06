import React from 'react'
import { useNavigate } from 'react-router-dom'
import MiniProjectsHeader from '../comp/Header'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
      <MiniProjectsHeader></MiniProjectsHeader>
        <button onClick={()=> navigate('/calci')} className='border m-2 p-2'>Calci</button>
        <button onClick={()=> navigate('/tic-tac-toe')} className='border m-2 p-2'>TicTacToe</button>
        <button onClick={()=> navigate('/add-product')} className='border m-2 p-2'>Add Product</button>
    </div>
  )
}

export default Home