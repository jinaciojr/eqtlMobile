import React from 'react';
import {Image, StyleSheet} from 'react-native';

import Button from '../../components/Button';
import logo from '../../assets/main-logo.svg';
import {useAuth} from '../../context/auth';
import {Container, Title, ScreenTitle, CpfInput} from './styles';

const SignIn: React.FC = () => {
  // const {signIn} = useAuth();

  // function handleSign() {
  //   signIn();
  // }

  return (
    <Container>
      <Image source={logo} style={{width: 135, height: 45}} />
      <ScreenTitle>Área do usuário</ScreenTitle>
      <CpfInput placeholder="Digite seu cpf" style={styles.inputShadow} />

      <Button>Entrar</Button>

      <Title>Faça seu logon</Title>
    </Container>
  );
};
const styles = StyleSheet.create({
  inputShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
});
export default SignIn;
