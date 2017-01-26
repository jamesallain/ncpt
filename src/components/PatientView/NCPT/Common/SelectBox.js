import React, { Component } from 'react';
import OptionsList from './OptionsList';

export default class SelectBox extends Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         query: "trek"
    //     };


    //     this.updateSearch =this.updateSearch.bind(this);
    // }


    filterUpdate(){
      //const val=this.myValue.value

    }

    render(){
      console.log("select",this.props.filterAssessment)
      console.log("select data",this.props.ncptData)
            //console.log("select AND",this.props.updateANDUID)

      //const { nctpData, filterAssessment } = this.props;

        return(
            <div>

                <OptionsList 
                  ncptData={ this.props.ncptData }
                  filterAssessment={ this.props.filterAssessment }
                  selectedDomain = { this.props.selectedDomain }
                  updateANDUID = { this.props.updateANDUID }
                />

            </div>
        )
    }


}