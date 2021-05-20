import React from 'react';
import {Image} from 'react-native';

import Button from '../../components/Button';
import logo from '../../assets/main-logo.svg';
import {useAuth} from '../../context/auth';
import {Container, Title, ScreenTitle} from './styles';

const SignIn: React.FC = () => {
  // const {signIn} = useAuth();

  // function handleSign() {
  //   signIn();
  // }

  return (
    <Container>
      <Image source={logo} style={{width: 135, height: 45}} />
        <ScreenTitle></ScreenTitle>

      <Button >Entrar</Button>

      <Title>Faça seu logon</Title>
    </Container>
  );
};

export default SignIn;
