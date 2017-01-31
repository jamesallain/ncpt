import React, { Component } from 'react';
import OptionsList from './OptionsList';

export default class SelectBox extends Component{
  filterUpdate(){
    //const val=this.myValue.value
  }

  render(){

    //const { ncptData, filterAssessment, selectedDomain, updateANDUID, patientData } = this.props;


    return(
    
      
      <OptionsList 
        patientData = { this.props.patientData }
        ncptData={ this.props.ncptData }
        filterAssessment={ this.props.filterAssessment }
        selectedDomain = { this.props.selectedDomain }
        updateANDUID = { this.props.updateANDUID }
      />       
      
       
    )
  }
}