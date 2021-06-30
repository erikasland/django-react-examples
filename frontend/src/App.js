import './App.css';
import React from 'react';
import Form from './components/Form';
import TypeInRealTime from './components/TypeInRealTime';
import SubmitToDjango from './components/SubmitToDjango';


class App extends React.Component {
  state = {
    titles: ['sir', 'mam', 'maddam', 'mrs', 'ms', 'mr'],
    activeHeader: ""
  };

  updateTitles = (name) => {
    let updatedArr = [];
    
    this.state.titles.forEach((title) => {
      if (title !== name) {
        updatedArr.push(title);
      }
    });

    this.setState({
      titles: updatedArr
    });
  }

  updateActiveHeader = (text) => {
    let updatedHeader = text;

    this.setState({
      activeHeader: updatedHeader
    });
  }


  render() {
    return (
      <div>
        <Form updateTitles={ this.updateTitles } titles={ this.state.titles }/>
        <TypeInRealTime updateActiveHeader={ this.updateActiveHeader } activeHeader={ this.state.activeHeader }/>
        <SubmitToDjango />
      </div>
    )
  }
}

export default App;