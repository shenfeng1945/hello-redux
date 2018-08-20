import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Redux extends Component{
    render(){
        return (
            <div>
              <h1>{this.props.value}</h1>
              <div>
                 <button onClick={this.props.onIncrement.bind(this)}>Increase</button>
                 <button onClick={this.props.onDecrease.bind(this)}>Decrease</button>
              </div>
            </div>
        )
    }
}
Redux.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrease: PropTypes.func.isRequired,
}