import React from 'react';
import Img from './Img';

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dirname, imgs } = this.props;
    let items = [];
    if (imgs) {
      items = [].map.call(imgs, (img, index) => {
        return <Img key={ index.toString() } path={ img.path } dirname={ dirname } />;
      });
    }

    return (
      <div className='row'>
        { items }
      </div>
    );
  }
}

export default Row;
