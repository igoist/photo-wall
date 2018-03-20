import React from 'react';

class Popover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let img = this.img;
    let iw = img.width;
    let ih = img.height;
    let w = window.innerWidth;
    let h = window.innerHeight;
    {/* console.log('width: ', iw); */}
    {/* console.log('height: ', ih); */}
    {/* console.log('w width: ', w); */}
    {/* console.log('w height: ', h); */}

    let x = (w - iw) / 2;
    let y = (h - ih) / 2;
    let scaleX = 1;
    let scaleY = 1;
    if (iw < w) {
      if (ih > h) {
        y = 0;
      }
      {/* } else if (iw > w && ih < h) { */}
    } else {
      scaleY = scaleX = w / iw;
      {/* scaleY = scaleX = iw / w > ih / h ? w / iw : h / ih; */}
    }
    let tmpStyle = `transform: translate3d(${x}px, ${y}px, 0px) scale3d(${scaleX}, ${scaleY}, 1);`;
    img.style = tmpStyle;

    setTimeout(() => {
      this.wrap.classList.remove('fade-in');
    }, 20);
  }

  componentWillUnmount() {
    this.wrap.classList.add('fade-out');
  }

  render() {
    const { handleClick, src } = this.props;
    return (
      <div className='popover fade-in' ref={ (wrap) => { this.wrap = wrap; }} onClick={ handleClick }>
        <div className='popover-inner'>
          <img src={ src } ref={ (img) => { this.img = img; }} style={{}} />
        </div>
      </div>
    );
  }
}

export default Popover;
