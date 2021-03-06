# react-html
> A raw html container for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-html
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| nodeName  | string | false    | 'div'   | The node name(default is `div`).      |


## usage
1. import css
  ```scss
  @import "~@jswork/react-html/dist/style.css";

  // or use sass
  @import "~@jswork/react-html/dist/style.scss";

  // customize your styles:
  $react-html-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactHtml from '@jswork/react-html';
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

  ```

## documentation
- https://afeiship.github.io/react-html/


## license
Code released under [the MIT license](https://github.com/afeiship/react-html/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-html
[version-url]: https://npmjs.org/package/@jswork/react-html

[license-image]: https://img.shields.io/npm/l/@jswork/react-html
[license-url]: https://github.com/afeiship/react-html/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-html
[size-url]: https://github.com/afeiship/react-html/blob/master/dist/react-html.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-html
[download-url]: https://www.npmjs.com/package/@jswork/react-html
