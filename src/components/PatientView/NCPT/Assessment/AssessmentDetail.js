import React, { Component, PropTypes } from 'react';
import SelectBox from './Common/SelectBox';
import InputBox from './Common/InputBox';



export default class Assessment extends Component {

filterUpdate(){

}

  render() {
//console.log("assessment", this.props.filterAssessment)
//console.log("assessment data", this.props.ncptData)
//console.log("assessment AND", this.props.updateANDUID)

    return (
      <div className="patient-view-banner row">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-2">          
              <SelectBox 
                filterAssessment = { this.props.filterAssessment }
                ncptData = { this.props.ncptData }
                selectedDomain = { this.props.selectedDomain }
                updateANDUID = { this.props.updateANDUID }
              />
            </div>
            <div className="col-xs-1 col-md-offset-1">          
              <InputBox 
                filterAssessment = { this.props.filterAssessment }
                ncptData = { this.props.ncptData }
                selectedDomain = { this.props.selectedDomain }
                updateANDUID = { this.props.updateANDUID }
              />
            </div>
            <div className="col-xs-2">          
              <SelectBox 
                filterAssessment = { this.props.filterAssessment }
                ncptData = { this.props.ncptData }
                selectedDomain = { this.props.selectedDomain }
                updateANDUID = { this.props.updateANDUID }
              />
            </div>
            <div className="col-xs-2">          
              <SelectBox 
                filterAssessment = { this.props.filterAssessment }
                ncptData = { this.props.ncptData }
                selectedDomain = { this.props.selectedDomain }
                updateANDUID = { this.props.updateANDUID }
              />
            </div>
            <div className="col-xs-2">          
              <SelectBox 
                filterAssessment = { this.props.filterAssessment }
                ncptData = { this.props.ncptData }
                selectedDomain = { this.props.selectedDomain }
                updateANDUID = { this.props.updateANDUID }
              />
            </div>
          </div>
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