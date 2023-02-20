import styled from 'styled-components/native';

interface ImageProps {
  disabled?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageStar = styled.Image<ImageProps>`

  height: ${({ disabled }) => (disabled ? '22px' : '36px')};
  width: ${({ disabled }) => (disabled ? '22px' : '36px')};
`;
