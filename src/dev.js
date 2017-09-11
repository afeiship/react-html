import './dev.scss';
import ReactHtml from './main';

/*===example start===*/

// install: npm install afeiship/react-html --save
// import : import ReactHtml from 'react-html'

class App extends React.Component{
  state = {
    html1:'<strong>strong text</strong>',
    html2:'<strong>strong text</strong><span>inline text</span>',
    html3:'<strong>strong text</strong><em>inline em text</em>'
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-html">
       <ReactHtml>
          {this.state.html1}
        </ReactHtml>

        <ReactHtml nodeName="span">
          {this.state.html2}
        </ReactHtml>

        <ReactHtml nodeName="span">
        {this.state.html3}
      </ReactHtml>
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
