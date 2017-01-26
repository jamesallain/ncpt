import React, { Component } from 'react';
import ncptData from './ncpt_data.js';
import { Tabs, Tab } from 'react-bootstrap';

import Assessment from './Assessment'

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
      switch(selectedDomain){
        case 1:
            return (
              <Assessment 
                filterAssessment = { this.state.filterAssessment }
                ncptData = { ncptData }
                selectedDomain = { this.state.selectedDomain }
                updateANDUID={this.updateANDUID.bind(this)}

              />
            )
        case 2:
            return <p>Hi 2</p>
        case 3:
            return <p>Hi 3</p>
      }
    }

  handleSelect(selectedDomain) {
    this.setState({selectedDomain})
  }

  updateANDUID(value) {
    this.setState({ 
      selectANDUID: value 
    })
     console.log("and--------------",this.state.selectANDUID)

  }

  render() {

    return (
      
    <div>
      <Tabs activeKey={this.state.selectedDomain} 
            onSelect={this.handleSelect.bind(this)} 
            onChange={this.renderForms.bind(this)}
            id="ncptTab">
        <Tab eventKey={1} title="Assessment" />
        <Tab eventKey={2} title="Diagnosis" />
        <Tab eventKey={3} title="Intervention" />
        <Tab eventKey={4} title="Monitoring/Evaluation" />

      </Tabs>
        <div>
            {this.renderForms()}
        </div>
    </div>
    );
  }
};



