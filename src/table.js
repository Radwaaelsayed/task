import Table from 'react-bootstrap/Table'
import React , {useRef, useState} from 'react';
import { Form } from 'react-bootstrap';
import './App.css'



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
  count =count 
  i=i
  clear()
      if(e.target.name == "left"){
        if(i>=columns || i==count && i==rows ){
          count=0
          i=0
          
            }
           if(count != columns){
               tablec.current.children[i].cells[count].style.backgroundColor = "red"
                count ++
                    
            }else if(i<columns){
              count=0;
              i++
            }
      }else{
        
        if(count==0  && i!=0)
        {
          i--; 
          count = columns  
        }else if(count ==0 && i == 0  ||count ==0 && i == columns  ) {
          i=  +rows-1
         count = +columns
        }
        count --
        tablec.current.children[i].cells[count].style.backgroundColor = "red"
      }
      console.log(count , i)
    }


const handelTBNavigate = (e)=>{ 
  count =count 
  i=i
  clear()
      if(e.target.name == "bottom"){  
        if(i>=columns || i==count && i==rows) {
          tablec.current.children[0].cells[0].style.backgroundColor = "red"
          count=0
          i=0
        }else if(count != rows){
              tablec.current.children[count].cells[i].style.backgroundColor = "red"
              count ++  
        }else if(i<rows){
          count=0;
          i++
        }
      }else{   
       if(count == 0 && i!=0){
         i--
         count = rows
       }else if(count ==0 && i == 0 ) {
         i=+columns-1
        count =+rows
       }
       count--  
       tablec.current.children[count].cells[i].style.backgroundColor = "red"
      }
      console.log(count , i)
    }


const clear = () =>{
  for(let i=0 ; i<tablec.current.children.length ; i++){
    for(let j=0 ; j<tablec.current.children[i].cells.length ; j++){
      tablec.current.children[i].cells[j].style.backgroundColor = ""
    }
  }
    }
     
return (            
  <div  style={{display:"flex" , justifyContent:"space-evenly" , alignItems:"center" , width:"100%"}}>                   
    <Form.Group style={{display:"flex" ,flexDirection:"column",  alignItems:"center"}}>
    <Form.Label>Rows</Form.Label>
    <Form.Control type="number" onChange={e=>setRows(e.target.value)} />
     <br/>
    <Form.Label>Columns</Form.Label>
    <Form.Control type="number" onChange={e=>setColumns(e.target.value)} />
    </Form.Group>
                    
    <div style={{position:"relative"}}>
      <button name="top"  onClick={(e)=>{handelTBNavigate(e)}} style={{ top:"-40px" , backgroundImage:" url(top2.png)"}}></button>
      <button name="bottom"     onClick={(e)=>{handelTBNavigate(e)}} style={{top:"30px",backgroundImage:" url(bottom.webp)" }}></button>
      <button name="left"    onClick={(e)=>handelLRNavigate(e)}   style={{left:"40px" , backgroundImage:" url(left.png)"}}> </button>
      <button name="right"   onClick={(e)=>handelLRNavigate(e)}   style={{right:"20px" ,backgroundImage:" url(right.png)"}}> </button>
    </div>
                    
    <Table responsive bordered style={{border:"2px solid black" , width:"30rem" , height:"30rem"}} >
      <tbody ref={tablec}>   
        {renderBody()}
      </tbody>
    </Table>
  </div>       
     );   
}
 
export default TableBody;