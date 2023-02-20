import { useCallback, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';
import { Container, ImageStar } from './styles';

interface StarsProps {
  total: number;
  actives: number;
  disabled?: boolean;
}

export default function Stars({
  total, actives, disabled = false,
}: StarsProps) {
  const [active, setActive] = useState(actives);
  const [stars, setStars] = useState<JSX.Element[]>([]);

  const handleSetActive = useCallback((qnt: number) => {
    if (qnt + 1 === active) {
      setActive(0);
      return;
    }
    setActive(qnt + 1);
  }, [active]);

  const createElements = useCallback(() => {
    const elementsStars: JSX.Element[] = [];
    for (let i = 0; i < total; i += 1) {
      elementsStars.push(
        <TouchableOpacity key={i} onPress={() => handleSetActive(i)} disabled={disabled}>
          <ImageStar source={active > i ? estrela : estrelaCinza} disabled={disabled} />
        </TouchableOpacity>,
      );
    }
    return elementsStars;
  }, [active, total, disabled, handleSetActive]);

  useEffect(() => {
    setStars(createElements());
  }, [createElements]);

  return (
    <Container>
      {stars}
    </Container>
  );
}
