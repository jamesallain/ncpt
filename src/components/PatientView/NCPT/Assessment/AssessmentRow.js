import React, { Component } from 'react';
import SelectBox from '../Common/SelectBox';
import InputBox from '../Common/InputBox';


export default class AssessmentRow extends Component {
  render() {
    // var name = this.props.product.stocked ?
    //   this.props.product.name :
    //   <span style={{color: 'red'}}>
    //     {this.props.product.name}
    //   </span>;
    //console.log(this.props.ncpt.assessment.value)
    let { ncptData, filterAssessment, selectedDomain, updateANDUID, patientData, standardData } = this.props;


    return (
      <tbody>
        <tr>
          <td>        
            <SelectBox
              filterAssessment = {filterAssessment}
              ncptData = {ncptData}
              selectedDomain = {selectedDomain}
              updateANDUID = {updateANDUID}
              patientData = {patientData}
            />       
          </td>
          
          <td>        
            <InputBox
              filterAssessment = {filterAssessment}
              ncptData = {ncptData}
              selectedDomain = {selectedDomain}
              updateANDUID = {updateANDUID}
              patientData = {patientData}
            />       
          </td>
        
          <td>        
            <SelectBox
              filterAssessment = {filterAssessment}
              ncptData = {ncptData}
              selectedDomain = {selectedDomain}
              updateANDUID = {updateANDUID}
              patientData = {patientData}
            />       
          </td>

          <td>        
            <SelectBox
              filterAssessment = {filterAssessment}
              ncptData = {ncptData}
              selectedDomain = {selectedDomain}
              updateANDUID = {updateANDUID}
              patientData = {patientData}
            />       
          </td>

          

      </tr>
    </tbody>
    );
  }
}
      // {this.props.ncpt.assessment.units}

        // <SelectBox 
        //   filterAssessment = { this.props.filterAssessment }
        //   ncptData = { this.props.ncptData }
        //   selectedDomain = { this.props.selectedDomain }
        //   updateANDUID = { this.props.updateANDUID }
        //   value= {this.props.ncpt.anduid}
        // />