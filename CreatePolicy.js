

import React from 'react';

import axios from 'axios';
import { withRouter } from "react-router-dom";




class CreateCity extends React.Component{
  constructor(props) {
		super(props)

		this.state = {
			city_name: '',
      description:'',
			default_construction_type_id: '4',
      availability_status:'false',
			is_default: 'false',
      construction_types: []
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {

		console.log(this.state)
    alert('Successfully Submitted')
    this.props.history.push('/');
    axios.post('https://0nv1e97syj.execute-api.us-east-1.amazonaws.com/dev/policy/', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
  render(){
    const { city_name, description, default_construction_type_id, availability_status,is_default,construction_types } = this.state
    return(
      <div>
      <form onSubmit={this.submitHandler}>

          <label>City</label>
                <select>
                </select>
          <label>Construction Type</label>
                <select>
                </select>
           <label>Policy</label>
                <select>
                </select>
          <label>Policy ref id</label>
          <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the Policy ref id" size="30" />
          <label>Policy name</label>
          <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the Policy name" size="30" />
          <div class="row">
           <label>Description</label>
          <textarea value = {description} name="description" onChange={this.changeHandler}  rows="12" cols="150" placeholder="Enter the Description" /><br />
          <label>values</label>
          <label>Display Type</label>
                <select>
                <option value="Slider">Slider</option>
                <option value="Boolean">Boolean</option>
                <option value="Drop-down">Drop-down</option>
                <option value="Radio Button">Radio Button</option>
                </select>

                 <label>value Type</label>
                <select>
                <option value="percentage">percentage</option>
                <option value="literal">literal</option>
                </select>

                 <label>Calculation Type</label>
                <select>
                <option value="add_value">add value</option>
                <option value="multiply_value">multiplyvalue</option>
                <option value="literal" selected="selected">literal</option>
                </select>

                <label>min value</label>
                  <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the min value" size="30" />

                  <label>max value</label>
                  <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the max value" size="30" />

                  <label>incremental value</label>
                  <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the incremental value" size="30" />

                  <label>Default value</label>
                  <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the Default value" size="30" />

                   <label>Label format</label>
                <select>
                </select> 
                 
                   <label>Selected Value format</label>
                <select>
                </select>
                 
                 <label>Display Sequence</label>
                  <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the Display Sequence" size="30" />

                  <label>Rent Break-up</label>
                   <label>m-value</label>
                  <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the m-value" size="30" />
                  
                  <label>k-value</label>
                  <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the k-value" size="30" />

                  <label>baseline value</label>
                  <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the baseline value" size="30" />

                  <label>Policy Impact</label>
                   <label>Impact Type</label>
                <select>
                </select>
                  
                  <label>value Type</label>
                <select>
                </select>

                 <label>Impact value</label>
                  <input type="text" value={city_name} name="city_name" onChange={this.changeHandler} placeholder="Enter the Impact value" size="30" />
                       
                  <input type="submit" value="submit" />

                   &nbsp;&nbsp;&nbsp;&nbsp;
                   <input type="button" value="Cancel" name="Cancel" />
          </div>
        </form>
      </div>


    )
  }
}
export default (CreateCity);
