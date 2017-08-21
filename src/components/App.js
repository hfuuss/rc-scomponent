import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Label  } from '../../build';


export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('ssss')
  }
  
  onclick(str){
    alert(str)
    console.log('onclick')
  }

  render() {
    let name = this.props.name;
    return (
      <div>
        <Label size="small">Hello, {name}!</Label>
        <div>
          <Button onClick={this.onclick.bind(this,'你好，我点击了onclick')}
            bgColor="green"
            size="small"
          >
            small
          </Button>
        </div>
        <div>
          <Button
            bgColor="yellow"
            size="medium"
          >
            medium
          </Button>
        </div>
        <div>
          <Button
            bgColor="orange"
            size="large"
          >
            large
          </Button>
        </div>
        <div>
          <Button
            size="wide"
          >
            wide
          </Button>
        </div>
        <div>
          <Button
            bgColor="pink"
            size="extraWide"
          >
            extra wide
          </Button>
        </div>
        <div>
          <Button
            bgColor="purple"
            size="fullWidth"
          >
            full width
          </Button>
        </div>
      </div>
    );

  }
}

