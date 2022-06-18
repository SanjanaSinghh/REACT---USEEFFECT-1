
import "./App.css"
export default function Sh({ item, id, remove}) {
    
    return (
      <>
        <h3>
         <span className="task">{item}</span> 
          <button className="button-53" onClick={()=>remove(id)}>Remove </button>
        </h3>
      </>
    );
  }
  