import React, { Component } from 'react'

const style = {
  containerStyle: {
    justify: 'left',
    margin: '10px 0'
  },
  labelStyle: {
    margin: '0 10px'
  }
};

export interface Props {
  inputName: string,
  labelText: string
}

export default class FormCell extends Component<Props> {
  render() {
    return (
      <div style={style.containerStyle}>
        <label style={style.labelStyle}>
          {this.props.labelText + ":"}
        </label>
        <input type="text"/>
      </div>
    );
  }
}
