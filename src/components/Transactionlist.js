import React,{ Component } from 'react'
import Transactionform from './Transactionform';

class Transactionlist extends Component {
    state = {
        currentIndex: -1,
        list:this.returnList()
    }
    returnList  () {
        if(localStorage.getItem('studentTransactions')==null)
        localStorage.setItem('studentTransactions',JSON.stringify([]))
        return JSON.parse(localStorage.getItem('studentTransactions'))

    }
    onAddorEdit=(data)=>{
        let list = this.returnList()
        if(this.state.currentIndex==-1)
        list.push(data)
        else
        list[this.state.currentIndex]=data
        localStorage.setItem('studentTransactions',JSON.stringify([list]))
        this.setState ({list,currentIndex:-1})
    }
    handleEdit= index =>{
        this.setState({
            currentIndex:index
        })
    }
    handleDelete= index =>{
        let list=this.returnList()
        list.splice(index,1)
        localStorage.setItem('studentTransactions',JSON.stringify([list]))
        this.setState ({list,currentIndex:-1})
        
    }

    render(){
        return(
<div>
    
    <Transactionform
    onAddorEdit={this.onAddorEdit}
    
    currentIndex={this.state.currentIndex}
    list={this.state.list}/>
   <hr/>
    <table>
        <tbody>
             {
             this.state.list.map((item,index) => {
                 return <tr key={index}>
                     <td> {item.firstName} </td>
                     <td> {item.lastName}</td>
                     <td> {item.gmail}</td>
                     <td> {item.phoneNo}</td>
                     <td>{item.gender}</td>
                     <td>{item.city}</td>
<td> < button onClick={() =>this.handleEdit(index)}>edit</button></td>
<td> < button onClick={() =>this.handleDelete(index)}>delete</button></td>
                 </tr>

             })
             }
        </tbody>
    </table>

    
  

</div>
        )
    }
}
export default Transactionlist;