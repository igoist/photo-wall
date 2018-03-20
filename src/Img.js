import React from 'react';

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { path, dirname, handleImgClick } = this.props;
    const url = dirname + '/' + path;
    handleImgClick(url);
  }

  render() {
    let { path, dirname } = this.props;
    const url = dirname + '/' + path;
    return (
      <div className='item wrap' onClick={ this.handleClick }>
        {/* <img src={ dirname + '/' + path } /> */}
        <div className='img' style={{ backgroundImage: 'url(' + url + ')' }}></div>
      </div>
    );
  }
}

export default Img;
