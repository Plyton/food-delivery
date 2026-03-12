import type { ProductI } from './types';
import { uuid, utils } from '@/shared/lib';

export const bakeryProduct = [
  {
    id: uuid.uuid(),
    title: 'Хачапури по-мегрельски',
    price: 490,
    image: utils.getImage('img/dishes/хачапури по мегрельски.png'),
    des: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    weight: 430,
  },
  {
    id: uuid.uuid(),
    title: 'Хачапури по-аджарски',
    price: 470,
    image: utils.getImage('img/dishes/хачапури.png'),
    des: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла.',
    weight: 430,
  },
  {
    id: uuid.uuid(),
    title: 'Хачапури по-аджарски',
    price: 470,
    image: utils.getImage('img/dishes/хачапури по-аджарски.png'),
    des: 'Хачапури "Лодочка" с начинкой из расплавленного сыра сулугуни, яйца и масла',
    weight: 430,
  },
  {
    id: uuid.uuid(),
    title: 'Хачапури по-мегрельски',
    price: 490,
    image: utils.getImage('img/dishes/Хачапури по-мегрельски.png'),
    des: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    weight: 430,
  },
] as const satisfies ProductI[];
