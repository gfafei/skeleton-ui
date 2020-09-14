import React from 'react';
import './style.less';
import classNames from 'classnames';

const Loader = (props) => {
  const { size, className } = props;
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: '#999 transparent transparent transparent'
  }
  return <div className={classNames('ui-loader', className)} style={style}/>
}

Loader.defaultProps = {
  size: 32
}
export default Loader;
