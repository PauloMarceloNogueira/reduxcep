import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {cep_searched} from '../Input/InputActions.js';

import './Button.sass';
const Button = (props) => {
  return (
    <button onClick={props.cep_searched}>Buscar</button>
  )
}

const mapStateToProps = (state) => ({value: state.input.logradouro});
const mapDispatchToProps = (dispatch) => bindActionCreators({ cep_searched }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Button)