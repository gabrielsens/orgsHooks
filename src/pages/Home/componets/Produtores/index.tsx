import { FlatList, TouchableOpacity } from 'react-native';
import { Text } from '../../../../Components/Text';
import Card from '../Card';
import { Container, HeaderContainer } from './styles';
import useProdutores from './useProdutores';

export default function Produtores() {
  const {
    titulo,
    lstProdutores,
    order,
    handleSetOrder,
  } = useProdutores();

  return (
    <Container>
      <FlatList
        data={lstProdutores}
        ListHeaderComponent={(
          <HeaderContainer>
            <Text
              size={20}
              color="#464646"
            >
              {titulo}
            </Text>
            <TouchableOpacity
              onPress={() => handleSetOrder(order)}
              style={{ backgroundColor: '#eee', padding: 8, borderRadius: 8 }}
            >
              <Text>Distância</Text>
            </TouchableOpacity>
          </HeaderContainer>
        )}
        keyExtractor={({ nome }) => nome}
        renderItem={({ item: productor }) => (
          <Card productor={productor} />
        )}
      />
    </Container>
  );
}
