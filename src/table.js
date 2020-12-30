import Table from 'react-bootstrap/Table'
import React , {useRef, useState} from 'react';
import { Form } from 'react-bootstrap';




const TableBody =()=> {
   const [rows , setRows] = useState(0);
   const [columns , setColumns] = useState(0)
   const tablec = useRef()
   const tabler = useRef()


const renderBody = () =>{   
  return  Array.from({length:[rows]}).map((_, index1) => (
        <tr key={index1} ref={tabler}>
         {Array.from({ length: [columns] }).map((_, index2) => (
           <td key={index2} style={{border:"2px solid black"}} ></td>
        ))}
        </tr>
         ))
}
 let i = 0   
let count = 0
const handelLRNavigate = (e)=>{
  tablec.current.style.backgroundColor = "" 
  if(count <= rows ){
      if(e.target.name === "left"){
        if(count != rows){
              tablec.current.children[i].cells[count].style.backgroundColor = "red"
                count ++
                console.log(i , count)
          
            }else if(i<rows){
              count=0;
              i++
            }
      }else{
        if(count!=0 || i!=0)
       if(i==0){
          count --
          tablec.current.children[i].cells[count].style.backgroundColor = ""
      }else if(i>0 && count !==0){ 
        i--
          tablec.current.children[i].cells[count].style.backgroundColor = ""
         }
            console.log(i , tablec.current.children)   
      }
     
  }

}

const handelTBNavigate = (e)=>{
  tablec.current.style.backgroundColor = ""

  if(count <= rows ){
      if(e.target.name == "top"){
        if(count != rows){
              tablec.current.children[count].cells[i].style.backgroundColor = "red"
                count ++
                
          
            }else if(i<rows){
              count=0;
              i++
            }
      }else{
        if(count>0)
      { 
        count--  
        tablec.current.children[count].cells[i].style.backgroundColor = ""
      }
       else if(i>0)
       i--
       
       tablec.current.children[count].cells[i].style.backgroundColor = ""
       console.log(count , i)
      }
    }
    console.log(count, i)
  }

        return (            
                <div  style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"center" , width:"100%"}}>                   
                     <Form.Group style={{display:"flex" ,flexDirection:"column",  alignItems:"center"}}>
                      <Form.Label>Rows</Form.Label>
                      <Form.Control type="number" onChange={e=>setRows(e.target.value)} />
                        <br />
                      <Form.Label>Columns</Form.Label>
                      <Form.Control type="number" onChange={e=>setColumns(e.target.value)} />
                     </Form.Group>
                    
                    <div style={{position:"relative"}}>
                        <button name="top"  onClick={(e)=>{handelTBNavigate(e)}} style={{position:"absolute" , top:"-40px"}}>T</button>
                        <button name="bottom" onClick={(e)=>{handelTBNavigate(e)}} style={{position:"absolute" , top:"30px"}}>B</button>
                        <button name="right" onClick={(e)=>handelLRNavigate(e)} style={{position:"absolute" , left:"40px"}}> R </button>
                        <button name="left" onClick={(e)=>handelLRNavigate(e)} style={{position:"absolute" , right:"20px"}}>  L</button>
                    </div>
                    
                    <Table responsive bordered style={{border:"2px solid black" , width:"30rem" , height:"30rem"}}  >
                        <thead >
                       </thead>
                       <tbody ref={tablec}>   
                          
                           {renderBody()}
                        </tbody>
                    </Table>

                    
                
                </div>
        
     );
    
}
 
export default TableBody;