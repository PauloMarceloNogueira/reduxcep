import React from 'react';
// Components
import Input from '../Input/Input.jsx'
import Button from '../Button/Button.jsx'
import './Header.sass'

const Header = () => (
  <div>
    <div className="header">
      <h4>Consultar</h4>
      <div className="find-fields">
        <div>CEP:</div>
        <Input />
        <Button />
      </div>
    </div>
  </div>
)

export default Header