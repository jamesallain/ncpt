import React, { Component } from 'react';
import OptionsList from './OptionsList';

export default class SelectBox extends Component{
  filterUpdate(){
    //const val=this.myValue.value
  }

  render(){
    return(
      <OptionsList 
        ncptData={ this.props.ncptData }
        filterAssessment={ this.props.filterAssessment }
        selectedDomain = { this.props.selectedDomain }
        updateANDUID = { this.props.updateANDUID }
      />            
    )
  }
}