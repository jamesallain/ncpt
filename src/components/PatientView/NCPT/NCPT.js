import React, { Component } from 'react';
import ncptData from './data/ncpt.js';
import { STATUS, STANDARD } from './data/select.js';

import { Tabs, Tab, TabPane } from 'react-bootstrap';

import AssessmentTable from './Assessment/AssessmentTable'
import Diagnosis from './Diagnosis'
import Intervention from './Intervention'
import Monitoring from './Monitoring'


export default class ControlledTabs extends Component {
    constructor(){
      super()
      this.state = {
        activeKey:1,
        selectedDomain: 1,
        filterAssessment: '',
        filterDiagnosis: 0,
        filterIntervention: 0,
        filterMonitoring: 0,
        selectANDUID:'',
        tableHeaders: ["NCPT Term", "Value", "Units/Indicators", "Evaluation/Standard"]          
      };
    }
    

    updateHeaders(activeKey){ 
      console.log("doman",activeKey)

      switch(activeKey){
        case 1:
          return this.setState({tableHeaders: ["NCPT Term", "Value", "Units/Indicators", "Evaluation/Standard"]});
        case 2:
          return this.setState({tableHeaders: ["Problem", "Etiologies", "Signs/Symptoms", "Diagnosis Status"]});
        case 3:
          return this.setState({tableHeaders: ["Target Etiology", "Interventions", "", ""]});
        case 4:
          return this.setState({tableHeaders: ["Diagnosis", "Monitors", "", ""]});
    }
    return (
        <AssessmentTable 
          filterAssessment = { this.state.filterAssessment }
          ncptData = { ncptData }
          selectedDomain = { this.state.selectedDomain }
          updateANDUID={this.updateANDUID.bind(this)}
          patientData = {patientData}
          tableHeaders = {this.state.tableHeaders}
          statusData = {STATUS}
          standardData = {STANDARD}          
        />
      )
    }

   
  handleSelect(activeKey, key) {   
    console.log("activeKey",activeKey) 
    console.log("key", key) 
    
    this.setState({
      activeKey: activeKey,
      selectedDomain: activeKey
    })
    this.updateHeaders(activeKey)
  }

  updateANDUID(value) {
    this.setState({ 
      selectANDUID: value 
    })
  }

  render() {
     console.log("and--------------",this.state.selectANDUID)
     console.log()

    return (      
      <div>
        <Tabs
          activeKey={this.state.activeKey} 
          onSelect={this.handleSelect.bind(this)} 
          onChange={this.updateHeaders.bind(this)} 
          id="ncptTabs"
        >
          <Tab eventKey={1} title="Assessment" key="1" />
          <Tab eventKey={2} title="Diagnosis" key="2" />
          <Tab eventKey={3} title="Intervention" key="3"/>
          <Tab eventKey={4} title="Assessment & Monitoring" key="4"/>

        </Tabs>
          <div>
              {this.updateHeaders()}
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



