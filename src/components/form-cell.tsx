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
  labelText: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default class FormCell extends Component<Props> {
  render() {
    return (
      <div style={style.containerStyle}>
        <label style={style.labelStyle}>
          {this.props.labelText + ":"}
        </label>
        <input
          type="text"
          name={this.props.inputName}
          ref={this.props.inputName}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
