const APEX_CARS = [
  {
    id: 1,
    brand: 'BMW',
    model: '320i M Sport',
    year: 2024,
    km: 9800,
    price: 289900,
    fuel: 'Gasolina',
    transmission: 'Automático',
    color: 'Preto Safira',
    body: 'Sedã',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=88',
    gallery: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=90',
      'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1600&q=88',
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=88'
    ],
    description: 'Sedã premium com pacote M Sport, excelente nível de acabamento e histórico de conservação demonstrativo.',
    features: ['Teto solar', 'Bancos em couro', 'Painel digital', 'Apple CarPlay', 'Câmera de ré', 'Faróis LED']
  },
  {
    id: 2,
    brand: 'Mercedes-Benz',
    model: 'C 200 AMG Line',
    year: 2023,
    km: 18400,
    price: 319900,
    fuel: 'Gasolina',
    transmission: 'Automático',
    color: 'Cinza Grafite',
    body: 'Sedã',
    featured: true,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=88',
    gallery: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=90',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=88',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=88'
    ],
    description: 'Conforto, tecnologia e acabamento sofisticado em uma configuração esportiva e elegante.',
    features: ['Pacote AMG', 'Central multimídia', 'Ar digital', 'Assistente de faixa', 'Sensor dianteiro', 'Rodas 19”']
  },
  {
    id: 3,
    brand: 'Audi',
    model: 'Q5 Performance',
    year: 2022,
    km: 32600,
    price: 279900,
    fuel: 'Gasolina',
    transmission: 'Automático',
    color: 'Branco Glacier',
    body: 'SUV',
    featured: true,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1400&q=88',
    gallery: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=90',
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=88',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=88'
    ],
    description: 'SUV premium versátil para cidade e estrada, com bom espaço interno e pacote completo de tecnologia.',
    features: ['Tração quattro', 'Virtual Cockpit', 'Teto panorâmico', 'Porta-malas elétrico', 'CarPlay', 'Controle de cruzeiro']
  },
  {
    id: 4,
    brand: 'Volkswagen',
    model: 'Jetta GLI',
    year: 2024,
    km: 7100,
    price: 229900,
    fuel: 'Gasolina',
    transmission: 'Automático',
    color: 'Cinza Platinum',
    body: 'Sedã',
    featured: false,
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1400&q=88',
    gallery: ['https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=90'],
    description: 'Sedã esportivo com desempenho forte, bom pacote de equipamentos e visual discreto.',
    features: ['Motor turbo', 'Bancos esportivos', 'ACC', 'Painel digital', 'CarPlay sem fio', 'Rodas 18”']
  },
  {
    id: 5,
    brand: 'Jeep',
    model: 'Compass Limited',
    year: 2023,
    km: 27100,
    price: 179900,
    fuel: 'Flex',
    transmission: 'Automático',
    color: 'Azul Jazz',
    body: 'SUV',
    featured: false,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1400&q=88',
    gallery: ['https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1600&q=90'],
    description: 'SUV confortável e completo, pensado para rotina urbana e viagens em família.',
    features: ['Bancos em couro', 'Câmera 360°', 'Partida remota', 'CarPlay', 'Sensor de chuva', 'Chave presencial']
  },
  {
    id: 6,
    brand: 'Toyota',
    model: 'Corolla GR-S',
    year: 2023,
    km: 21400,
    price: 169900,
    fuel: 'Flex',
    transmission: 'Automático',
    color: 'Vermelho Granada',
    body: 'Sedã',
    featured: false,
    image: 'https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1400&q=88',
    gallery: ['https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1600&q=90'],
    description: 'Versão esportiva do sedã com visual marcante, conforto e reconhecida confiabilidade.',
    features: ['Toyota Safety Sense', 'Bancos esportivos', 'Ar digital', 'Câmera de ré', 'Chave presencial', 'Rodas 17”']
  },
  {
    id: 7,
    brand: 'Porsche',
    model: 'Macan',
    year: 2021,
    km: 38900,
    price: 429900,
    fuel: 'Gasolina',
    transmission: 'Automático',
    color: 'Preto',
    body: 'SUV',
    featured: false,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=88',
    gallery: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90'],
    description: 'SUV de caráter esportivo com excelente dirigibilidade e acabamento premium.',
    features: ['Bancos elétricos', 'Paddle shifts', 'Navegação', 'Sensores 360°', 'Rodas 20”', 'Modo Sport']
  },
  {
    id: 8,
    brand: 'Honda',
    model: 'Civic Touring',
    year: 2022,
    km: 30400,
    price: 189900,
    fuel: 'Gasolina',
    transmission: 'CVT',
    color: 'Prata',
    body: 'Sedã',
    featured: false,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1400&q=88',
    gallery: ['https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1600&q=90'],
    description: 'Sedã confortável e tecnológico, com conjunto turbo e ótima experiência para uso diário.',
    features: ['Honda Sensing', 'Teto solar', 'Bancos elétricos', 'CarPlay', 'Câmera de ré', 'Ar dual zone']
  }
];

const APEX_WHATSAPP = '5511950549974';

function money(value) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
}

function km(value) {
  return `${new Intl.NumberFormat('pt-BR').format(value)} km`;
}
