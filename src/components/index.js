import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { createElement, Component } from 'react';

const CLASS_NAME = 'react-html';

export default class ReactHtml extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The node name(default is `div`).
     */
    nodeName: PropTypes.string
  };

  static defaultProps = {
    nodeName: 'div'
  };

  render() {
    const { className, nodeName, children, ...props } = this.props;
    return createElement(nodeName, {
      'data-component': CLASS_NAME,
      'dangerouslySetInnerHTML': { __html: children },
      'className': classNames(CLASS_NAME, className),
      ...props
    });
  }
}
