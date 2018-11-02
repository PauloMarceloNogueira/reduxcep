import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cep_changed } from '../Input/InputActions.js'
import './Map.sass';

const Map = (props) => {
  console.log(props)
  
  return (
    <div className="map-container">
      <p className="street">
       {props.logradouro}
      </p>
      <p className="district">{props.bairro}</p>
      <p className="city">{props.localidade}</p>
      <p className="zipcode">{props.cep}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  logradouro: state.input.logradouro,
  cep: state.input.cep,
  bairro: state.input.bairro,
  localidade: state.input.localidade,
  uf: state.input.uf
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ cep_changed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map)