const products = [
  {
    title: 'Alfa Romeo C39',
    src: '/img/alfaromeo.png',
    price: '12,000,000',
    description: '"Romeo, Romeo, whyfore art thou not in my basket Romeo?"',
  },
  {
    title: 'AlphaTauri AT01',
    src: '/img/alphatauri.png',
    price: '15,500,000',
    description: 'For the alpha male. Or female.',
  },
  {
    title: 'Ferrari SF1000',
    src: '/img/ferrari.png',
    price: '25,100,001',
    description: `*Price is indicative of brand, not performance. Definitely not performance.`,
  },
  {
    title: 'Haas VF-20',
    src: '/img/haas.png',
    price: '11,000,000',
    description: `Haas it got it all? That's for you to decide.`,
  },
  {
    title: 'McLaren MCL35',
    src: '/img/mclaren.png',
    price: '20,000,000',
    description: 'Quite nippy.',
  },
  {
    title: 'Mercedes F1 W11',
    src: '/img/mercedes.png',
    price: '27,777,777',
    description: `The dog's bollocks of racing cars.`,
  },
  {
    title: 'Racing Point RP20',
    src: '/img/racingpoint.png',
    price: '18,500,000',
    description: `The Mercedes, but £9M cheaper and in pink.`,
  },
  {
    title: 'Red Bull RB16',
    src: '/img/redbull.png',
    price: '21,000,000',
    description: `It'll give you win(g)s.`,
  },
  {
    title: 'Renault R.S.20',
    src: '/img/renault.png',
    price: '17,000,000',
    description: 'Beats a Clio.',
  },
  {
    title: 'Williams FW43',
    src: '/img/williams.png',
    price: '9,500,000',
    description: 'What it lacks in speed, it makes up for in heritage.',
  },
]

export default function getProductArray() {
  return products;
}