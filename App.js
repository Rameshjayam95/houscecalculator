import React, { Component } from 'react';


class Ast extends Component {

   constructor(){
       super();
       this.state = {
           data: [],
           construction: [],
           constructionID:'',
           cityID:'',
           table:[],
       };
           this.handleSubmit = this.handleSubmit.bind(this);
   } //end constructor


   handleSubmit(event) {

   console.log(event)
   fetch(`https://0nv1e97syj.execute-api.us-east-1.amazonaws.com/dev/policy?city_id=${this.state.cityID}&construction_type_id=${this.state.constructionID}`,
 {
  method: "GET",
  headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
})
.then(results => results.json()) 
    .then(data => this.setState({ table: data })   
)
 console.log("table",this.state.table)
   }
    
  Firstdrowdown = (event) => {
    // console.log(event.target.value);
    let cityid = event.target.value
    this.setState({cityID:cityid})
   console.log(JSON.parse(cityid))
    
     let streams = this.state.data.filter(x => {
       if(x.id === JSON.parse(event.target.value)){
         return x.construction_types;
       }
     })
     console.log(streams)
     this.setState({construction : streams[0]['construction_types']});
  }

  Seconddrowndown = (event) => {
    let constructionid = event.target.value
    console.log(constructionid)
    this.setState({constructionID:constructionid})

  }
 


   componentWillMount() {
    fetch('https://0nv1e97syj.execute-api.us-east-1.amazonaws.com/dev/city/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        },
    }) /*end fetch */
    .then(results => results.json()) 
    .then(data => this.setState({ data: data })   
)


} //end life cycle

    render() { 
        return (
          <form onClick={this.handleSubmit}>
           <div>
            <ul>
              <li>
              
                <p>city</p>
                <select onChange={this.Firstdrowdown} >
                       <option>All</option>
                      {this.state.data.map((key) => <option value={key.id}>{key.city_name}</option>)}
                </select>
                </li>
                <li>
                  <p>construction</p>
                <select onClick={this.Seconddrowndown}>
                      <option>All</option>
                      {this.state.construction.map((key) => <option value={key.id} >{key.name}</option>)}
                </select>
                </li>
                <li>
                <input type="button" value="Submit" /></li></ul>
          <details open>
            <summary>Policy</summary>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Policy</th>
                      <th>Value Type</th>
                      <th>Display Type</th>
                      <th>Action</th>
                  </tr>
              </thead>
          <tbody>
              {this.state.table.map(table => (
                    <tr key={table.id}>
                      <td>{table.id}</td>
                      <td>{table.policy_name}</td>
                      <td>{table.value_type}</td>
                      <td>{table.display_type}</td>
                      <td><a href="">Edit</a></td>
                    </tr>
                ))}
          </tbody>
          </table>
          </details>
          </div>
          </form>
        );
      }
}
export default Ast;
