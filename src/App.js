import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactDOM from "react-dom";

class Tooltip extends React.Component{
  constructor(props){
    super(props)
    this.state={
      displayTooltip:false
    }
    this.hideTooltip=this.hideTooltip.bind(this)
    this.showTooltip=this.showTooltip.bind(this)
  }
  hideTooltip(){
    this.setState({displayTooltip:false})
  }
  showTooltip(){
    this.setState({displayTooltip:true})
  }
  render() {
    let message=this.props.message
    let position=this.props.position
    return(
      <span className='tooltip'
            onMouseLeave={this.hideTooltip}>
        {this.state.displayTooltip && <div className={`tooltip-bubble tooltip-${position}`}>
          <div className='tooltip-message'>{message}
          </div>
        </div>
        }
        <span className='tooltip-trigger'
              onMouseOver={this.showTooltip}> {this.props.children}
        </span>
      </span>
  )
    }

}
class App extends React.Component{
  render() {
    return(
        <div className="contianer">
    
          <p> Here is a <Tooltip message={'Hello, I am a super cool tooltip, by default it shows at bottom'} position={'bottom'}>tooltip</Tooltip> on bottom.</p>
          <p> Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'top'}>tooltip</Tooltip> on top.</p>
          <p> Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'left'}>tooltip</Tooltip> on left.</p>
          <p> Here is a <Tooltip message={'Hello, I am a super cool tooltip'} position={'right'}>tooltip</Tooltip> on right.</p>
          
        </div>
    )

  }
          }

// ReactDOM.render(
//   <App/>,
//       document.getElementById('app')
//         )
//

export default App;
