import React, { Component, PropTypes } from 'react';
import SelectBox from './Common/SelectBox';

export default class Intervention extends Component {

filterUpdate(){

}

  render() {
//console.log("assessment", this.props.filterAssessment)
//console.log("assessment data", this.props.ncptData)
//console.log("assessment AND", this.props.updateANDUID)

    return (
      <div className="patient-view-banner row">
        <div className="col-xs-9">
    
          
          <SelectBox 
            filterAssessment = { this.props.filterAssessment }
            ncptData = { this.props.ncptData }
            selectedDomain = { this.props.selectedDomain }
            updateANDUID = { this.props.updateANDUID }
          />
        </div>
      </div>
    );
  }
}


// Assessment.propTypes = {
//   assessment: this.props.assessment
// };

        //  <A patient={this.props.patient}
        //                      huddles={this.props.huddles}
        //                      filteredRiskAssessments={filteredRiskAssessments} />