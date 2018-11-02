const INITIAL_STATE = { };

export default (state = {}, action) => {
  switch(action.type) {
    case 'CEP_CHANGED': 
      return {
        ...state,
        value: action.payload
      }
    case 'CEP_SEARCH':
      return { ...state, 
        logradouro: action.payload.data.logradouro,
        cep: action.payload.data.cep,
        bairro: action.payload.data.bairro,
        localidade: action.payload.data.localidade,
        uf: action.payload.data.uf
        
      }
    case 'CEP_ERROR':
    return { 
      ...state, 
      logradouro: '', 
      cep: '', 
      bairro: '', 
      localidade: '', 
      uf: '', 
      error: action.payload }  
    default:
      return state;
  }
}

