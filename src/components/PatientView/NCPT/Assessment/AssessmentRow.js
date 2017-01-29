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
    console.log(this.props.ncpt.assessment.value)
    return (
      <tr>
       <td>{this.props.ncpt.assessment.units}</td>

      </tr>
    );
  }
}

        // <SelectBox 
        //   filterAssessment = { this.props.filterAssessment }
        //   ncptData = { this.props.ncptData }
        //   selectedDomain = { this.props.selectedDomain }
        //   updateANDUID = { this.props.updateANDUID }
        //   value= {this.props.ncpt.anduid}
        // />