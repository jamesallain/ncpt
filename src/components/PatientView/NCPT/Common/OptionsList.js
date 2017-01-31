import React, { Component } from 'react';

export default class OptionsList extends Component{

  filterANDUID() {
    const val = this.myValue.value
    this.props.updateANDUID(val)
    console.log("options value---------------",val);
  }
    
  render(){
     
      const { ncptData, filterAssessment, selectedDomain, patientData } = this.props;
      const options = ncptData
        .filter(ncpt => {
          return ncpt.NCPT_Term_w_Context.toLowerCase().indexOf(filterAssessment.toLowerCase()) >= 0 && ncpt.Domain==selectedDomain;
        })
        .map(ncpt => {
          return (
            <option key={ncpt.ANDUID} >{ncpt.Pub_Term_Indent}</option>            
          )  
        // .find(ncpt =>  {
        //    return ncpt.ANDUID === 
        // })
    });

      return(
        
       
            <form>
              <input 
                list="ncpt" 
                //ref={ (value) => {this.myValue = value } }
                ref={ value => this.myValue = value }
                placeholder="Type to filter..."
                onChange={this.filterANDUID.bind(this)}    

              />
              <datalist id="ncpt" > 
                {options} 
              </datalist>
            </form>
          

        
      )



      


  } 
}


      // const Row1 = (props) => {
      //   <tr>   
      //     <td> 
      //       <form>
      //         <input 
      //           list="ncpt" 
      //           ref={ (value) => {this.myValue = value } }
      //           //ref={ value => this.myValue = value }
      //           placeholder="Type to filter..."
      //           //onChange={this.filterANDUID.bind(this)}    

      //         />
      //         <datalist id="ncpt" > 
      //           {options} 
      //         </datalist>
      //       </form>
      //     </td>
      //   </tr>
      // }