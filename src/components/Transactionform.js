import React, { Component } from 'react';

class Transactionform extends Component {
    state = {

        ...this.returnStateObject()
    } 
    returnStateObject(){
        if (this.props.currentIndex===-1)
        return{
            firstName : '',
            lastName: '',
            gmail: '',
            phoneNo:'',
            city:''

        }
        else
          return this.props.list[this.props.currentIndex]
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex !== this.props.currentIndex || prevProps.list.length !== this.props.list.length) {
            this.setState({ ...this.returnStateObject() })
        }
    }
    handleInputChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    genderhandler = e => {
        this.setState({
            gender :e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.onAddorEdit(this.state)
    }

    render(){

        return(
            <form onSubmit = {this.handleSubmit} autoComplete ="off">
         <label>firstName :</label>  <input name = "firstName" placeholder= "Fname." value={this.state.firstName} onChange={this.handleInputChange} /><br/>  
         <label>lastName :</label> <input name = 'lastName' placeholder= "Lname." value={this.state.lastName} onChange={this.handleInputChange} /> <br/>   
         <label>gmail :</label> <input name = 'gmail' placeholder= "Gmail." value={this.state.gmail} onChange={this.handleInputChange} /><br/>    
         <label>phoneNo :</label> <input name = 'phoneNo' placeholder= "Phone No." value={this.state.phoneNo} onChange={this.handleInputChange} /> <br/>
         <label>Gender :</label><select onChange = {this.genderhandler}defaultValue = 'select Gender'>
             <option defaultValue> select Gender</option>
             <option value='male'>Male </option>
             <option value= 'female'>Female</option>

         </select><br/>
         <label>city :</label><select name = "city" placeholder="City" value={this.state.city} onChange={this.handleInputChange}>
            <option value = "One">Select City</option>
            <option value = "Hyderabad">Hyderabad</option>
            <option value = "Warangal">Warangal</option>
            <option value = "Vijayawada">Vijayawada</option>
            <option value = "Vizag">Vizag</option>
            <option value = "Tirupathi">Tirupathi</option>
            </select><br/>
           <button type ="submit" > Submit</button>     
           

            </form>
            
        )
    }
}
export default Transactionform;