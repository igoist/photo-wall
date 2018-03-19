import React from 'react';
import Img from './Img';
import '../public/css/index.css';


class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.imgs;
    const dirname = this.props.dirname;
    let imgs = [];
    if (items) {
      imgs = [].map.call(items, (img, index) => {
        return <Img key={ index.toString() } path={ img.path } dirname={ dirname } />;
      });
    }

    return (
      <div className='row'>
        { imgs }
      </div>
    );
  }

}


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
    console.log(res);
    const dirname = this.state.dirname;
    let rows = [];
    if (res.imgs) {
      {/* imgs = [].map.call(res.imgs, (img, index) => { */}
      {/*   return <Img key={ index.toString() } path={ img.path } dirname={ dirname } />; */}
      {/* }); */}
      const imgs = res.imgs;
      const length = imgs.length;
      for (let i = 0; i * 6 < length; i++) {
        let tmp = imgs.slice(i * 6, (i + 1) * 6);
        rows.push(<Row key={ i.toString() } dirname={ dirname } imgs={tmp} />);
      }
    }

    return (
      <div className='grid'>
        {/* <h1>This is home!</h1> */}
        { rows }
      </div>
    );
  }
}

export default App;
