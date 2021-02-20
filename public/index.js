import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactHtml from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    html1: '<p><strong>strong text</strong></p>',
    html2: '<strong>strong text</strong><span>inline text</span>',
    html3: '<strong>strong text</strong><em>inline em text</em>'
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-html">
        <ReactHtml>{this.state.html1}</ReactHtml>
        <ReactHtml nodeName="blockquote">{this.state.html2}</ReactHtml>
        <ReactHtml nodeName="p">{this.state.html3}</ReactHtml>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
