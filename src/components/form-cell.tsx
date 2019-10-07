import React, { Component } from 'react'

const containerStyle = {
  margin: '10px 0'
}

const labelStyle = {
  margin: '0 10px'
}

export interface Props {
  labelText: string
}

export default class FormCell extends Component<Props> {
  render() {
    return (
      <div style={containerStyle}>
        <label style={labelStyle}>
          {this.props.labelText}
        </label>
        <input type="text"/>
      </div>
    );
  }
}
