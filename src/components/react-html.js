import React, { Component ,createElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import objectAssign from 'object-assign';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    nodeName:PropTypes.string,
    className:PropTypes.string
  };

  static defaultProps = {
    nodeName:'div'
  };
  /*===properties end===*/

  render(){
    const { className, nodeName, children, ...props } = this.props;
    return createElement(nodeName,objectAssign({
      dangerouslySetInnerHTML:{__html: children },
      className:classNames('react-html',className),
    },props));
  }
}
