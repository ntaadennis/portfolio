import React from 'react';
import './App.css';
import Works from './components/works/works';
import About from './components/about/about';
import Header from './components/hero/header';
import Nav from './components/nav/nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      counter: 1
    }
    this.onButtonClick = this.onButtonClick.bind(this);
  }
  onButtonClick() {
    let x = 3;
    this.setState({
      isActive: true,
      counter: +1
    });
  }

  render() {
    const mainContent = (
      <div className="wrapper">
        <Header />
        <Nav />
        <About />
        <Works />
      </div>
    )


    return (
      <div className="App">
        {mainContent}
      </div>
    )
  }
}

export default App;
