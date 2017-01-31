
import React, { Component } from 'react';
import AssessmentRow from './AssessmentRow';
import SelectBox from '../Common/SelectBox';


export default class AssessmentTable extends Component {
  // constructor(){
  //   super()
  //   this.state
  // }
// .th={
//   "text-align:center"
// }

  render() {
    //console.log(this.props.data)
    var rows = [];
    var lastNcptType = null;
    //let data = this.props.data;

    // let filterAssessment = this.props.filterAssessment 
    // let ncptData = this.props.ncptData
    // let selectedDomain = this.props.selectedDomain
    // let updateANDUID = this.props.updateANDUID
    const { ncptData, filterAssessment, selectedDomain, updateANDUID, standardData } = this.props;
    
    const listOfHeaders = this.props.tableHeaders.map(function(header,i){
      return <th key={i}>
                {header}
             </th>
    })

//console.log(this.state.tableHeaders)
    this.props.patientData.forEach(function(patientData) {
      // if (product.ncptType !== lastncptType) {
      //   rows.push(<ProductncptTypeRow ncptType={product.ncptType} key={product.ncptType} />);
      // }

rows.push(<AssessmentRow 
             key={patientData.id}
                  filterAssessment = {filterAssessment}
                  ncptData = {ncptData}
                  selectedDomain = {selectedDomain}
                  updateANDUID = {updateANDUID}
                  patientData = { patientData }
                  standardData = { standardData }
            />);
        //console.log("filter",this.props.selectedDomain )

      // rows.push(<SelectBox
      //             key={patientData.id}
      //             filterAssessment = {filterAssessment}
      //             ncptData = {ncptData}
      //             selectedDomain = {selectedDomain}
      //             updateANDUID = {updateANDUID}
      //             patientData = { patientData }
      //           />

                
               // );
      //lastncptType = product.ncptType;
    });
    return (
      <table>
        <thead>
          <tr>
            {listOfHeaders}
          </tr>
        </thead>
        {rows}
      </table>
    );
  }
}


// class ProductncptTypeRow extends React.Component {
//   render() {
//     return <tr><th colSpan="2">{this.props.ncptType}</th></tr>;
//   }
// }

