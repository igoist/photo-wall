import React from 'react';

class Popover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Popover created.');
    setTimeout(() => {
      this.wrap.classList.remove('fade-in');
    }, 20);
  }

  componentWillUnmount() {
    this.wrap.classList.add('fade-out');
    console.log('Clear');
  }

  render() {
    const { handleClick, src } = this.props;
    return (
      <div className='popover fade-in' ref={ (wrap) => { this.wrap = wrap; }} onClick={ handleClick }>
        <img src={ src } />
      </div>
    );
  }
}

export default Popover;
