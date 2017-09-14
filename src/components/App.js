import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Label, Test,Input} from '../../build';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log('ssss')
  }

  onclick(str) {
    alert(str)
    console.log('onclick')
  }

  render() {
    let name = this.props.name;
    return (
      <div>
        {/* <Button>
            full width
          </Button> */}
        <Test>
          full ssss
        </Test>
        <Input placeholder="@mxstbr" type="text"/>
        <Input value="@geelen" type="text"/>
      </div>
    );

  }
}
