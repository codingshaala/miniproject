import React from "react";
import MiniProjectsHeader from "../comp/Header";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function TodoList() {
  useEffect(() => {
    getData();
  }, []);
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get("http://localhost:5001/api/todolist").then(
      (res) => {
        console.log(res.data);
        setData(res.data)
       
      },
      (err) => {
        console.log(err);
      }
    );
  };

  const postData = ()=>{
    axios.post('http://localhost:5001/api/todolist', {
        task : "Coding",
        isCompleted : false , 
        createdAt :  Date.now()
    }).then((res)=> console.log(res.data)).catch((err)=> console.log(err))
  }

  const deleteData = (id)=>{
    axios.delete(`http://localhost:5001/api/todolist/${id}`).then((res)=>{ console.log(res.data); getData()}).catch((err)=> console.log(err))
  }

  return (
    <div>
      <MiniProjectsHeader></MiniProjectsHeader>
      <div>
        <table>
          <thead>
            <th>S no.</th>
            <th>Task NAme</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          <tbody>
            {data.map((i, index)=>
            <tr>
              <td>{index+1}.</td>
              <td>{i.task}</td>
              <td>{i.isCompleted ? "True" : "False"}</td>
              <td>
                <button onClick={()=> deleteData(i._id)}>Delete</button>
              </td>
            </tr>)}
          </tbody>
        </table>
      </div>
      {/* <button onClick={()=> postData()}>Post Data</button> */}
    </div>
  );
}

export default TodoList;
