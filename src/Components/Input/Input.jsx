import React, { Component } from 'react';
import { connect } from 'react-redux';
import {cep_searched} from './InputActions';
import { bindActionCreators } from 'redux';

class Input extends Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="Digite o cep" onChange={this.props.cep_searched} value={this.props.cep}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({value: state.input.logradouro});
const mapDispatchToProps = (dispatch) => bindActionCreators({ cep_searched }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input)