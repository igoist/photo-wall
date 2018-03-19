import React from 'react';

class Img extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { path, dirname } = this.props;
    const url = dirname + '/' + path;
    console.log(url);
    return (
      <div className='item wrap'>
        {/* <img src={ dirname + '/' + path } /> */}
        <div className='img' style={{ backgroundImage: 'url(' + url + ')' }}></div>
      </div>
    );
  }
}

export default Img;
