import axios from 'axios';

const URL = 'https://viacep.com.br/ws/';

const cep_success = (response) => {
  return {
    type: 'CEP_SEARCH',
    payload: response
  }
}

const getCepError = (response) => {
  return {
    type: 'CEP_ERROR',
    payload: response
  }
}

const cep_changed = (e) => {
  return {
    type: 'CEP_CHANGED',
    payload: e.target.value
  }
}

const cep_searched = (e) => {
  return (dispatch, getState) => {
    axios.get(`${URL}/${getState().input.value}/json`)
      .then((response) => {
        dispatch(cep_success(response));
      })
      .catch((err) => {
        dispatch(getCepError(err))
      })
  } 
}

export {cep_changed, cep_searched};