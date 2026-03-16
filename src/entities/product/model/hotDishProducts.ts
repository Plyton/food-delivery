import type { ProductI } from './types';
import { utils, uuid } from '@/shared/lib';

export const hotDishProducts = [
  {
    id: uuid.uuid(),
    title: 'Котлета с картофелем по-деревенски',
    price: 430,
    image: utils.getImage('img/hot-dishes/img1.png'),
    des: 'По семейному рецепту: нежнейшее рубленное мясо с экологически чистыми ферме...',
    weight: 350,
  },
  {
    id: uuid.uuid(),
    title: 'Оджахури из телятины',
    price: 490,
    image: utils.getImage('img/hot-dishes/img2.png'),
    des: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    weight: 430,
  },
  {
    id: uuid.uuid(),
    title: 'Долма',
    price: 430,
    image:  utils.getImage('img/hot-dishes/img3.png'),
    des: 'Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая в виноградные листья',
    weight: 350,
  },
  {
    id: uuid.uuid(),
    title: 'Чихохбили',
    price: 490,
    image: utils.getImage('img/hot-dishes/img4.png'),
    des: 'Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая в виноградные листья',
    weight: 350,
  },
  {
    id: uuid.uuid(),
    title: 'Лобио по-имеретински',
    price: 490,
    image: utils.getImage('img/hot-dishes/img5.png'),
    des: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    weight: 430,
  },
  {
    id: uuid.uuid(),
    title: 'Стейк из лосося с овощами',
    price: 1200,
    image: utils.getImage('img/hot-dishes/img6.png'),
    des: 'Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи',
    weight: 430,
  },
] as const satisfies ProductI[];
