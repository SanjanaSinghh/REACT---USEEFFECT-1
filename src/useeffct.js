import { useEffect, useState } from "react";
import Sh from "./showtask";
import "./App.css"
export default function Use_effect() {
  const [task, setask] = useState("");
  const [alltask, newtask] = useState([]);
useEffect(()=>{
  fetch("http://localhost:3000/todo")
  .then((x)=>x.json())
  .then((x)=>newtask(x))
},[alltask])
  const add = () => {
    if(task=="")
    return
   let  obj=  {
      
      "task": task,
      "status": "false"
    }

    fetch("http://localhost:3000/todo",{
      method:"POST",
      body:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    })

    newtask([...alltask,task]);
    
    setask("");
  };

  const remove = (index) => {
    console.log(alltask[index]);
    fetch(`http://localhost:3000/todo/${index}`,{
      method:"DELETE",
      
      headers:{
        "Content-Type":"application/json"
      }
    })

    
  };

  return (
    <> <div className="sai">
      <h1>TO DO</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setask(e.target.value)}
      />
      <button className="button-53" onClick={add}>Add task</button>
       {alltask.map((x, i) => {
        return <Sh item={x.task} id={x.id}  key={i} remove={remove} />;
      })} 
      </div>
    </>
  );
}
