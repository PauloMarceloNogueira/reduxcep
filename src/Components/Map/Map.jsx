import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cep_changed } from '../Input/InputActions.js';
import { closed_click } from './MapActions.js';

import './Map.sass';

import FrameMap from './FrameMap.jsx';

const Map = (props) => {
  console.log(props, 'PROPS')
  return (
    <div className={`map-container ${props.closed_card ? 'hidden' : 'visible'}`}>
      <div className="close-container" onClick={props.closed_click}>x</div>
      <div>
        <p className="street">
          {props.logradouro}
        </p>
        <p className="district">{props.bairro}</p>
        <p className="city">{props.localidade}</p>
        <p className="zipcode">{props.cep}</p>
        <FrameMap />
      </div>
    </div>
  )
};

const mapStateToProps = (state) => ({
  closed_card: state.input.closed_card,
  logradouro: state.input.logradouro,
  cep: state.input.cep,
  bairro: state.input.bairro,
  localidade: state.input.localidade,
  uf: state.input.uf
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ cep_changed, closed_click }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map)