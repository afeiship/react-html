import ReactHtml from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    html1: '<strong>strong text</strong>',
    html2: '<strong>strong text</strong><span>inline text</span>',
    html3: '<strong>strong text</strong><em>inline em text</em>'
  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render() {
    return (
      <div className="hello-react-html">
        <ReactHtml>{this.state.html1}</ReactHtml>
        <ReactHtml nodeName="span">{this.state.html2}</ReactHtml>
        <ReactHtml nodeName="span">{this.state.html3}</ReactHtml>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
