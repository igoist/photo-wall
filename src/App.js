import React from 'react';
import Img from './Img';
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
    let imgs = [];
    if (res.imgs) {
      imgs = [].map.call(res.imgs, (img, index) => {
        return <Img key={ index.toString() } path={ img.path } dirname={ dirname } />;
      });
    }
    return (
      <div>
        <h1>This is home!</h1>
        { imgs }
      </div>
    );
  }
}

export default App;
