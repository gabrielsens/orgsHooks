import { useEffect, useState } from 'react';
import { Text } from '../../../../Components/Text';
import Topo from '../../../../assets/logo.png';
import { Container, Logo } from './styles';
import topo from '../../../../mocks/top';

export default function Top() {
  const [msgBoasVindas, setMsgBoasVindas] = useState('');
  const [legenda, setLegenda] = useState('');

  useEffect(() => {
    setMsgBoasVindas(topo.boasVindas);
    setLegenda(topo.legenda);
  }, []);

  return (
    <Container>
      <Logo source={Topo} />
      <Text size={26} weight="bold" color="#464646" style={{ marginTop: 24 }}>{msgBoasVindas}</Text>
      <Text size={16} color="#a3a3a3" style={{ marginTop: 8 }}>{legenda}</Text>
    </Container>
  );
}
