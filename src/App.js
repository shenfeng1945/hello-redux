import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Redux from './components/redux'
import PropTypes from 'prop-types';
import * as types from './actions'
// import {bindActionCreators} from 'redux'
class App extends Component {
  render() {
    const {increment,counter,decrease} = this.props 
    return (
    //   <Redux onIncrement={this.props.onIncrement.bind(this)}
    //          onDecrease={this.props.onDecrease.bind(this)}
    //          value={this.props.value} /> 
      <div>
          <h1>{counter}</h1>
          <div>
              <button onClick={()=>increment('hello')}>increment</button>
              <button onClick={()=>decrease()}>decrease</button>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        counter: state
    }
}
//不推荐
// const mapDispatchToProps = (dispath) =>{
//     return bindActionCreators({increment,decrease},dispath)
// }
App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
}

export default connect(mapStateToProps,types)(App);
