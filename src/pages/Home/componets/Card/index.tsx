import { useReducer } from 'react';
import { Text } from '../../../../Components/Text';
import { ProdutoresType } from '../../../../Types/ProdutoresType';
import Stars from '../../../../Components/Stars';
import {
  Container,
  ContainerDistance, ContainerTitle, LogoImage, TitleView,
} from './styles';

interface ProdutorProps {
  productor: ProdutoresType
}

export default function Card({ productor } : ProdutorProps) {
  const [editable, setEditable] = useReducer((edt: boolean) => !edt, false);

  return (
    <Container onPress={() => setEditable()}>
      <ContainerTitle>
        <LogoImage source={productor.imagem} accessibilityLabel={productor.nome} />
        <TitleView>
          <Text weight="bold" size={18}>{productor.nome}</Text>
          <Stars total={5} actives={productor.estrelas} disabled={!editable} />
        </TitleView>
      </ContainerTitle>
      <ContainerDistance>
        <Text weight="300" size={14} color="#464646">
          {productor.distancia} m
        </Text>
      </ContainerDistance>
    </Container>

  );
}
