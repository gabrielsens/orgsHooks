import { useEffect, useState } from 'react';
import produtores from '../../../../mocks/produtores';
import { ProdutoresType } from '../../../../Types/ProdutoresType';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lstProdutores, setLstProdutores] = useState<ProdutoresType[]>([]);
  const [order, setOrder] = useState(true);

  function handleSetOrder(orderState: boolean) {
    setOrder(!orderState);
    setLstProdutores((prevState) => prevState.sort((a, b) => {
      if (!orderState) {
        return a.distancia - b.distancia;
      }
      return b.distancia - a.distancia;
    }));
  }

  useEffect(() => {
    setTitulo(produtores.titulo);
    setLstProdutores(produtores.lista.sort((a, b) => a.distancia - b.distancia));
  }, [order]);

  return {
    titulo,
    lstProdutores,
    order,
    handleSetOrder,
  };
}
