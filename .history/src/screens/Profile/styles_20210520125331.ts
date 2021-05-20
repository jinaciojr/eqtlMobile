import styled from 'styled-components/native';
import {Text} from 'react-native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  border-radius: 6px;
  border-width: 1px;
  border-color: #a5a6f6;
`;
export const SmalText = styled.Text`
  color: #2b2c44;
  font-size: 16px;
  line-height: 18px;
`;
export const ProfileButton = styled(Button)`
  background-color: #6200ee;
  color: #fff;
`;
