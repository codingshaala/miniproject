import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import MiniProjectsHeader from '../comp/Header'
import { MyData } from '../MyContext'

function TicTacToe() {
  let {courseName, setCourseName} = useContext(MyData)
  let [value , setValue] = useState(0)

  let [click, setClick] = useState(0)

  useEffect(()=>{
    setValue(value + 10)
    setClick(click + 1)
  }, [])

  return (
    <div>
      <MiniProjectsHeader></MiniProjectsHeader>
      <h1 onClick={()=> setCourseName("Data Antaltics")}>{courseName}</h1>
      <button onClick={()=> setValue(value + 1)} className='p-2 bg-yellow-500 border shadow-sm'>{value}</button>
      <button onClick={()=> setClick(click + 1)} className='p-2 bg-green-500 border shadow-sm'>{click}</button>
    </div>
  )
}

export default TicTacToe