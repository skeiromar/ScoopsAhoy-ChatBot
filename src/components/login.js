import React from 'react';
import { Button } from '@progress/kendo-react-buttons';
import { Input } from '@progress/kendo-react-inputs';

const Login = props => {
    
    return (
        <form className="k-form" onSubmit={props.handleLogin}>
          <fieldset>
            <legend>Log in</legend>
            <div className="mb-3">
              <Input
                name="username"
                label="Username"
                required={true}
                style={{ width: '100%' }}
                value={props.username}
                onChange={props.handleUsernameChange}
              />
            </div>
            <div style={buttonContainerStyle}>
              <Button type="submit" primary={true}>
                Sign in
              </Button>
            </div>
          </fieldset>
        </form>
      );
};

const buttonContainerStyle = {
  margin: 'auto',
  width: '29%'
};

export default Login;