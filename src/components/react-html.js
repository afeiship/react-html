import React,{PureComponent,createElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    nodeName:PropTypes.string,
    className:PropTypes.string
  };

  static defaultProps = {
    nodeName:'div'
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const { className,nodeName,children,...props } = this.props;
    console.log(children);
    return createElement(nodeName,objectAssign({
      dangerouslySetInnerHTML:{__html: children },
      className:classNames('react-html',className),
    },props));
  }
}
