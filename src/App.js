import React from 'react';
import Row from './Row';
import Popover from './Popover';
import '../public/css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      dirname: '/assets/img/target',
      popover: {
        flag: false,
        src: ''
      }
    };
    this.loadMap = this.loadMap.bind(this);
    this.handleImgClick = this.handleImgClick.bind(this);
    this.handlePopoverClick = this.handlePopoverClick.bind(this);
  }

  handleImgClick(src) {
    this.setState(() => ({
      popover: {
        flag: true,
        src
      }
    }));
  }

  handlePopoverClick() {
    this.setState(() => ({
      popover: {
        flag: false,
        src: ''
      }
    }));
  }

  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', './assets/map/img.json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.response);
        this.setState(() => ({ res }));
      }
    };
    xhr.send();
  }

  render() {
    const res = this.state.res;
    const dirname = this.state.dirname;
    let rows = [];
    if (res.imgs) {
      const imgs = res.imgs;
      const length = imgs.length;
      for (let i = 0; i * 6 < length; i++) {
        let tmp = imgs.slice(i * 6, (i + 1) * 6);
        rows.push(<Row key={ i.toString() } dirname={ dirname } imgs={ tmp } handleImgClick={ this.handleImgClick } />);
      }
    }

    return (
      <div className='grid'>
        { rows }

        { this.state.popover.flag &&
          <Popover handleClick={ this.handlePopoverClick } src={ this.state.popover.src } />
        }
      </div>
    );
  }
}

export default App;
