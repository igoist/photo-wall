import React from 'react';
import Row from './Row';
import '../public/css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res: [],
      dirname: '/assets/img/target'
    };
    this.loadMap = this.loadMap.bind(this);
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
        rows.push(<Row key={ i.toString() } dirname={ dirname } imgs={tmp} />);
      }
    }

    return (
      <div className='grid'>
        { rows }
      </div>
    );
  }
}

export default App;
