import React from 'react';

class Img extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { path, dirname } = this.props;
    return (
      <div className='item wrap'>
        <img src={ dirname + '/' + path } />
      </div>
    );
  }
}

export default Img;
