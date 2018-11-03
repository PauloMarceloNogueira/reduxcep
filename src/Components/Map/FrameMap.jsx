import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { cep_changed } from '../Input/InputActions.js'

const FrameMap = (props) => {
  console.log(props, 'PROPS')
  return (
    <div>
      <iframe width='100%' height='350' frameBorder='0'  
        scrolling='no' marginHeight='0' marginWidth='0'    
        src={`https://maps.google.com/maps?q=${props.logradouro}&output=embed`}></iframe>
    </div>
  )
}
const mapStateToProps = (state) => ({
  logradouro: state.input.logradouro,
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ cep_changed }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FrameMap)


