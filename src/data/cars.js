export const carCategories = [
  { id: 'all', label: 'Все' },
  { id: 'sedan', label: 'Седаны' },
  { id: 'crossover', label: 'Кроссоверы' },
  { id: 'electric', label: 'Электромобили' },
  { id: 'premium', label: 'Премиум' },
]

export const cars = [
  {
    id: 1,
    name: 'Toyota Camry',
    category: 'sedan',
    year: 2025,
    engine: '2.5 л / 181 л.с.',
    transmission: 'Автомат',
    drive: 'Передний',
    fuel: 'Бензин',
    price: 3290000,
    image:
      'https://images.unsplash.com/photo-1621007947382-bcb3c783d932?w=600&h=400&fit=crop',
    description:
      'Надёжный бизнес-седан с просторным салоном, современной мультимедиа Toyota Touch 2 и полным набором систем безопасности Toyota Safety Sense.',
    trims: [
      { name: 'Comfort', price: 3290000, features: ['Климат-контроль', 'Камера заднего вида', 'Apple CarPlay'] },
      { name: 'Premium', price: 3690000, features: ['Кожаный салон', 'Подогрев сидений', 'JBL аудиосистема'] },
      { name: 'Executive', price: 4120000, features: ['Панорамная крыша', 'Адаптивный круиз', 'Вентиляция сидений'] },
    ],
  },
  {
    id: 2,
    name: 'BMW X5',
    category: 'crossover',
    year: 2025,
    engine: '3.0 л / 340 л.с.',
    transmission: 'Автомат',
    drive: 'Полный xDrive',
    fuel: 'Бензин',
    price: 7890000,
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
    description:
      'Премиальный кроссовер с выразительным дизайном, мощным двигателем и интеллектуальной системой полного привода xDrive.',
    trims: [
      { name: 'xDrive30d', price: 7890000, features: ['LED фары', 'Навигация', 'Парктроники'] },
      { name: 'xDrive40i', price: 8650000, features: ['M Sport пакет', 'Harman Kardon', 'Панорамная крыша'] },
      { name: 'xDrive50e', price: 9420000, features: ['Гибридный привод', 'Адаптивная подвеска', 'Head-Up Display'] },
    ],
  },
  {
    id: 3,
    name: 'Tesla Model 3',
    category: 'electric',
    year: 2025,
    engine: 'Электро / 283 л.с.',
    transmission: '1-ступ.',
    drive: 'Задний',
    fuel: 'Электро',
    price: 4590000,
    image:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
    description:
      'Популярный электромобиль с запасом хода до 513 км, минималистичным интерьером и развитой экосистемой Autopilot.',
    trims: [
      { name: 'Standard Range', price: 4590000, features: ['513 км запас хода', '15" дисплей', 'Autopilot'] },
      { name: 'Long Range', price: 5290000, features: ['629 км запас хода', 'Двухмоторный AWD', 'Premium Audio'] },
      { name: 'Performance', price: 5890000, features: ['0-100 за 3.1 сек', 'Track Mode', 'Карбон спойлер'] },
    ],
  },
  {
    id: 4,
    name: 'Mercedes-Benz S-Class',
    category: 'premium',
    year: 2025,
    engine: '3.0 л / 367 л.с.',
    transmission: 'Автомат 9G-Tronic',
    drive: 'Полный 4MATIC',
    fuel: 'Бензин',
    price: 12490000,
    image:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
    description:
      'Флагманский седан с референсным уровнем комфорта, MBUX Hyperscreen и передовыми ассистентами вождения.',
    trims: [
      { name: 'S 450', price: 12490000, features: ['MBUX', 'Массаж сидений', 'Burmester 3D'] },
      { name: 'S 500', price: 13850000, features: ['E-Active Body Control', 'Rear Axle Steering', 'Night Vision'] },
      { name: 'S 580', price: 15900000, features: ['V8 двигатель', 'Executive Lounge', 'AR навигация'] },
    ],
  },
  {
    id: 5,
    name: 'Hyundai Tucson',
    category: 'crossover',
    year: 2025,
    engine: '2.0 л / 150 л.с.',
    transmission: 'Автомат',
    drive: 'Передний',
    fuel: 'Бензин',
    price: 2890000,
    image:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
    description:
      'Стильный городской кроссовер с футуристичным дизайном, просторным багажником и богатым оснащением в базе.',
    trims: [
      { name: 'Classic', price: 2890000, features: ['Мультируль', '8" экран', 'ESP'] },
      { name: 'Style', price: 3190000, features: ['Климат-контроль', 'Круиз-контроль', 'Бесключевой доступ'] },
      { name: 'Prestige', price: 3490000, features: ['Панорамная крыша', 'Подогрев руля', 'SmartSense'] },
    ],
  },
  {
    id: 6,
    name: 'Kia K5',
    category: 'sedan',
    year: 2025,
    engine: '2.5 л / 194 л.с.',
    transmission: 'Автомат',
    drive: 'Передний',
    fuel: 'Бензин',
    price: 2690000,
    image:
      'https://images.unsplash.com/photo-1609521263047-f8f205293bb4?w=600&h=400&fit=crop',
    description:
      'Динамичный седан с агрессивной решёткой радиатора Tiger Nose, просторным салоном и современными технологиями.',
    trims: [
      { name: 'Comfort', price: 2690000, features: ['6 подушек безопасности', 'CarPlay', 'LED DRL'] },
      { name: 'Luxe', price: 2990000, features: ['Кожаный салон', 'Подогрев сидений', 'Бесключевой доступ'] },
      { name: 'GT Line', price: 3390000, features: ['Спорт-пакет', '19" диски', 'Bose аудио'] },
    ],
  },
  {
    id: 7,
    name: 'BYD Seal',
    category: 'electric',
    year: 2025,
    engine: 'Электро / 530 л.с.',
    transmission: '1-ступ.',
    drive: 'Полный AWD',
    fuel: 'Электро',
    price: 3890000,
    image:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938bc?w=600&h=400&fit=crop',
    description:
      'Спортивный электроседан с технологией Blade Battery, запасом хода 650 км и дизайном Ocean-X.',
    trims: [
      { name: 'RWD Standard', price: 3890000, features: ['570 км запас хода', '15.6" экран', '360° камера'] },
      { name: 'AWD Performance', price: 4490000, features: ['650 км запас хода', '0-100 за 3.8 сек', 'CDM платформа'] },
      { name: 'Premium AWD', price: 4990000, features: ['Nappa кожа', 'Dynaudio', 'Head-Up Display'] },
    ],
  },
  {
    id: 8,
    name: 'Porsche Cayenne',
    category: 'premium',
    year: 2025,
    engine: '3.0 л / 340 л.с.',
    transmission: 'Tiptronic',
    drive: 'Полный',
    fuel: 'Бензин',
    price: 9890000,
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
    description:
      'Спортивный премиум-кроссовер с характерной управляемостью Porsche, роскошным салоном и мощными двигателями.',
    trims: [
      { name: 'Cayenne', price: 9890000, features: ['PCM навигация', 'LED Matrix', 'PASM подвеска'] },
      { name: 'Cayenne S', price: 11200000, features: ['V6 Turbo', 'Sport Chrono', 'BOSE Surround'] },
      { name: 'Cayenne GTS', price: 12800000, features: ['460 л.с.', 'GTS дизайн', 'Керамические тормоза'] },
    ],
  },
]

export function formatPrice(price) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price)
}
