import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.TouchableOpacity`
  padding: 16px;
  margin: 8px 16px;
  border-radius: 16px;
  background-color: #ccc;
  flex-direction: row;
  justify-content: space-between;
  elevation: 4;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  gap: 16px;
`;

export const LogoImage = styled.Image`
  height: 62px;
  width: 62px;
`;

export const TitleView = styled.View`
  justify-content: space-around;
`;

export const ContainerDistance = styled.View`
  padding: 8px;
`;
