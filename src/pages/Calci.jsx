import React, { useContext } from 'react'
import MiniProjectsHeader from '../comp/Header'
import { MyData } from '../MyContext'

function Calci() {
  let {courseName} = useContext(MyData)
  return (
    <div>
      <MiniProjectsHeader></MiniProjectsHeader>
      Calci
      <h1>{courseName}</h1>
      </div>
  )
}

export default Calci