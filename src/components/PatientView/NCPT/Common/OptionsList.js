import React, { Component } from 'react';

export default class OptionsList extends Component{

  filterANDUID() {
    const val = this.myValue.value
          console.log("options value---------------",val);

    this.props.updateANDUID(val)
  }
    
  render(){
      console.log("options",this.props.filterAssessment);
      console.log("options data",this.props.ncptData);
      //console.log("options AND",this.props.updateANDUID(val));

      const { ncptData, filterAssessment, selectedDomain } = this.props;
      const options = ncptData
        .filter(ncpt => {
          return ncpt.NCPT_Term_w_Context.toLowerCase().indexOf(filterAssessment.toLowerCase()) >= 0 && ncpt.Domain==selectedDomain;
        })
        .map(ncpt => {
          //console.log(term.Pub_Term_Indent);
          return (
            <option ref={ (value) => {this.myValue = value } }  key={ncpt.ANDUID}> {ncpt.Pub_Term_Indent} </option>            
          )  
    });

      return(
        <form>    
          <input 
            list="ncpt" 
            ref={ (value) => {this.myValue = value } }
            placeholder="Type to filter..."
            onChange={this.filterANDUID.bind(this)}            
          />
          <datalist id="ncpt"> 
            {options} 
          </datalist>
        </form>
      )
  } 
}