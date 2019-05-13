# react-html
> A raw html container for react.

## install
```shell
npm install -S afeiship/react-html
```

## usage
1. import css
  ```scss
  @import "~react-html/style.scss";

  // customize your styles:
  $react-html-options: ()
  ```
2. import js
  ```js
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
          <ReactHtml> {this.state.html1} </ReactHtml>
          <ReactHtml nodeName="span"> {this.state.html2} </ReactHtml>
          <ReactHtml nodeName="span"> {this.state.html3} </ReactHtml>
        </div>
      );
    }
  }
  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-html/

## resouces
- https://www.robinwieruch.de/minimal-react-webpack-babel-setup/
- https://www.valentinog.com/blog/react-webpack-babel/
- https://jestjs.io/docs/en/tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16
- https://testing-library.com/docs/react-testing-library/api
