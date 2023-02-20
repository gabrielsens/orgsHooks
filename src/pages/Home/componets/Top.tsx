import { Image, Text, View } from 'react-native';
import Topo from '../../../assets/logo.png';

export default function Top() {
  return (
    <View>
      <Image source={Topo} />
      <Text>Olá Gabriel</Text>
      <Text>Encontre os melhores produtores</Text>
    </View>
  );
}
