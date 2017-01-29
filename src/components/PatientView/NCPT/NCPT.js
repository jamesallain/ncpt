import React, { Component } from 'react';
import ncptData from './ncpt_data.js';
import { Tabs, Tab } from 'react-bootstrap';

import AssessmentTable from './Assessment/AssessmentTable'
import Diagnosis from './Diagnosis'
import Intervention from './Intervention'
import Monitoring from './Monitoring'


export default class ControlledTabs extends Component {
    constructor(){
        super()
        this.state = {
          selectedDomain: 1,
          filterAssessment: '',
          filterDiagnosis: 0,
          filterIntervention: 0,
          filterMonitoring: 0,
          selectANDUID:''
          
        };
    }

    renderForms(){
    const selectedDomain = this.state.selectedDomain;

    console.log(patientData)

      switch(selectedDomain){
        case 1:
            return (
              <AssessmentTable 
                filterAssessment = { this.state.filterAssessment }
                ncptData = { ncptData }
                selectedDomain = { this.state.selectedDomain }
                updateANDUID={this.updateANDUID.bind(this)}
                patientData = {patientData}
              />
            )
        case 2:
            return (
              <Diagnosis 
                filterAssessment = { this.state.filterAssessment }
                ncptData = { ncptData }
                selectedDomain = { this.state.selectedDomain }
                updateANDUID={this.updateANDUID.bind(this)}
              />
            )
        case 3:
            return (
              <Intervention 
                filterAssessment = { this.state.filterAssessment }
                ncptData = { ncptData }
                selectedDomain = { this.state.selectedDomain }
                updateANDUID={this.updateANDUID.bind(this)}
              />
            )
        case 4:
            return (
              <Monitoring 
                filterAssessment = { this.state.filterAssessment }
                ncptData = { ncptData }
                selectedDomain = { this.state.selectedDomain }
                updateANDUID={this.updateANDUID.bind(this)}
              />
            )
      }
    }

  handleSelect(selectedDomain) {
    this.setState({selectedDomain})
  }

  updateANDUID(value) {
    this.setState({ 
      selectANDUID: value 
    })
  }

  render() {
     console.log("and--------------",this.state.selectANDUID)

    return (
      
    <div>
      <Tabs activeKey={this.state.selectedDomain} 
            onSelect={this.handleSelect.bind(this)} 
            onChange={this.renderForms.bind(this)}
            id="ncptTab">
        <Tab eventKey={1} title="Assessment" />
        <Tab eventKey={2} title="Diagnosis" />
        <Tab eventKey={3} title="Intervention" />
        <Tab eventKey={4} title="Assessment & Monitoring" />

      </Tabs>
        <div>
            {this.renderForms()}
        </div>
    </div>
    );
  }
};



var patientData = [
  {id: 1, assessment: {anduid: 1000, value: '1', units: 'g'}},
  {id: 2, assessment: {anduid: 1001, value: '2.2', units: 'mg'}},
  {id: 3, assessment: {anduid: 1002, value: '4', units: 'g'}},
  // {diagnosis: {anduid: 1003, etiology: {intervention: 'gotta fix this!'}}},
  // {diagnosis: {anduid: 1004, etiology: {intervention: 'almost there!'}}},
  // {diagnosis: {anduid: 1005, etiology: {intervention: 'looking good!'}}}
];