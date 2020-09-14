import React from 'react';

const VirtualList = (props) => {
  const {
    listHeight,
    rowHeight,
    rowRenderer,
    rows,
    className,
    style,
    ...rest
  } = props;
  const [startIdx, setStartIdx] = React.useState(0);
  const [endIdx, setEndIdx] = React.useState(Math.ceil(listHeight / rowHeight))
  const visibleRows = rows.slice(startIdx, endIdx);
  const [scrollTop, setScrollTop] = React.useState(0);

  const containerStyle = {
    height: listHeight,
    overflow: 'auto'

  };
  const scrollerStyle = {
    height: rows.length * rowHeight,
    position: 'relative'
  };
  const handleScroll = (e) => {
    const _scrollTop = e.target.scrollTop;
    const _startIdx = Math.floor(_scrollTop / rowHeight);
    const _endIdx = _startIdx + Math.ceil(listHeight / rowHeight);
    setScrollTop(_scrollTop);
    setStartIdx(_startIdx);
    setEndIdx(_endIdx);
  }

  return (
    <div className={className} onScroll={handleScroll} style={Object.assign(containerStyle, style)} {...rest}>
      <div style={scrollerStyle}>
        {
          visibleRows.map((row, i) => {
            const style = {
              position: 'absolute',
              top: i * rowHeight + scrollTop
            }
            return rowRenderer(row, style)
          })
        }
      </div>
    </div>
  )
}

export default VirtualList;
