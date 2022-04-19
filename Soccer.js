import React, { useState } from 'react'
import Data from './data.json'

const Soccer = () => {

  const [detailsShown, setDetailShown] = useState([]);
  const [deleted, setDeleted] = useState([]);

  const toggleShown = id => {
    const shownState = detailsShown.slice();
    const index = shownState.indexOf(id);
    if (index < 0) {
      shownState.push(id);
      setDetailShown(shownState);
    } else {
      shownState.splice(index, 1);
      setDetailShown(shownState);
    }
  }

  const hideShown = id => {
    const hidden = deleted.slice();
    hidden.push(id);
    setDeleted(hidden);
  }

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  function removeChild1(xRemove1) {

    return xRemove1;

  }

  function removeChild2(xRemove2) {

    return xRemove2;

  }

  return (

    <div>

      <table className="table top-table">
        <thead>
          <tr>
            <th>Actions</th>
            <th>Identification name</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Risk</th>
            <th>Hair length</th>
            <th>IQ</th>
            <th>Admission date</th>
            <th>Last breakdown</th>
            <th>Yearly fee</th>
            <th>Knows the Joker</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((trace) => {

            return (
              <React.Fragment>
                {!deleted.includes(trace.data['Identification number']) && (
                <tr key={trace.data['Identification number']}>
                  <td id="container"> {!isEmpty(trace.children) && (<button className="btn btn-secondary" onClick={() => toggleShown(trace.data['Identification number'])}>

                    Expand
                  </button>)}

                  <button className="btn btn-danger" onClick={() => hideShown(trace.data['Identification number'])}>

                    Delete
                  </button>
                  </td>
                  <td>{trace.data['Identification number']}</td>
                  <td>{trace.data['Name']}</td>
                  <td>{trace.data['Gender']}</td>

                  <td>{trace.data['Risk']}</td>
                  <td>{trace.data['Hair length']}</td>
                  <td>{trace.data['IQ']}</td>

                  <td>{trace.data['Admission date']}</td>
                  <td>{trace.data['Last breakdown']}</td>
                  <td>{trace.data['Yearly fee']}</td>
                  <td>{trace.data['Knows the Joker?']}</td>
                </tr>)}
                <tr>
                {detailsShown.includes(trace.data['Identification number']) && !isEmpty(trace.children) && (
                  <React.Fragment>

                    <table className='table' id="deletRow1">
                      <thead>
                        <tr>
                          <th>Actions</th>
                          <th>Relative ID</th>
                          <th>Patient ID</th>
                          <th>Is alive</th>
                          <th>Frequency of visits</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trace.children.has_relatives.records.map((child) => {
                          return (
                    
                           
                         
                            <React.Fragment>

                              <tr>
                                <td> {!isEmpty(child.children) && (<button className="btn btn-secondary" onClick={() => toggleShown(child.data['Relative ID'])}>

                                  Expand
                                </button>)}</td>
                                <td>{child.data['Relative ID']}</td>
                                <td>{child.data['Patient ID']}</td>
                                <td>{child.data['Is alive?']}</td>
                                <td>{child.data['Frequency of visits']}</td>
                                
                                <td><button key={child} onClick={()=> removeChild1(delete child.data['Relative ID'],
                                                                                   delete child.data['Patient ID'],
                                                                                   delete child.data['Is alive?'],
                                                                                   delete child.data['Frequency of visits'],
                                                                                   document.getElementById('deletRow1').deleteRow(0)
                                                                                   
                                                                                   )}>
                                                                                 
                                  Remove
                                  </button>   </td> 
                                  
                              </tr>
                              <tr>
                             

                              {detailsShown.includes(child.data['Relative ID']) && !isEmpty(child.children) && (
                                <React.Fragment>
                                  <table className='table' id="deletRow2">
                                    <thead>
                                      <tr>
                                        <th>Phone ID</th>
                                        <th>ID of the relative</th>
                                        <th>Phone</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {child.children.has_phone.records.map((child) => {
                                        return (
                                          <React.Fragment>

                                            <tr>
                                              <td>{child.data['Phone ID']}</td>
                                              <td>{child.data['ID of the relative']}</td>
                                              <td>{child.data['Phone']}</td> 
                                              <td><button onClick={()=> 
                                                                  removeChild2(delete child.data['Phone ID'],
                                                                               delete child.data['ID of the relative'],
                                                                               delete child.data['Phone'],
                                                                               document.getElementById('deletRow2').deleteRow(0)
                                                                          
                                                                               )}>
                                                                   Remove
                                                                  </button></td>                                                     
                                            </tr>
  
                                          </React.Fragment>
                                        )
                                      })}
                                    </tbody>
                                  </table>
                                </React.Fragment>
                              )}
                              </tr>
                            </React.Fragment>
                          )
                        })}
                      </tbody>
                      </table>

                      </React.Fragment>
                  )}
                         
                  </tr>
                 
                  </React.Fragment>
                  

                )})}
              </tbody>
            </table>
    </div>
  )
}


export default Soccer;