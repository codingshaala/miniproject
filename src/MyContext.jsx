import React, { useState } from 'react'
import { createContext } from 'react'

export const MyData = createContext()

function MyContext({children}) {

 let [courseName, setCourseName] = useState('MERN')

  return (
    <MyData.Provider value={{courseName, setCourseName}}>
      {children}
    </MyData.Provider>
  )
}

export default MyContext