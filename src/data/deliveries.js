export const deliveryStatuses = [
  { id: 'all', label: 'Все' },
  { id: 'in_transit', label: 'В пути' },
  { id: 'customs', label: 'На таможне' },
  { id: 'ready', label: 'Готов к выдаче' },
  { id: 'delivered', label: 'Доставлен' },
]

export const statusConfig = {
  in_transit: {
    label: 'В пути',
    badgeClass: 'bg-amber-100 text-amber-800 ring-amber-200',
    dotClass: 'bg-amber-500',
  },
  customs: {
    label: 'На таможне',
    badgeClass: 'bg-orange-100 text-orange-800 ring-orange-200',
    dotClass: 'bg-orange-500',
  },
  ready: {
    label: 'Готов к выдаче',
    badgeClass: 'bg-emerald-100 text-emerald-800 ring-emerald-200',
    dotClass: 'bg-emerald-500',
  },
  delivered: {
    label: 'Доставлен',
    badgeClass: 'bg-slate-100 text-slate-700 ring-slate-200',
    dotClass: 'bg-slate-400',
  },
}

export const deliveries = [
  {
    id: 1,
    model: 'Toyota Camry 2.5 Comfort',
    vin: 'JTDKARFU9L0123456',
    status: 'in_transit',
    eta: '2025-08-15',
    city: 'Москва',
    origin: 'Владивосток',
    image:
      'https://images.unsplash.com/photo-1621007947382-bcb3c783d932?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    model: 'BMW X5 xDrive40i',
    vin: 'WBAJB1C50LCW98765',
    status: 'customs',
    eta: '2025-08-08',
    city: 'Санкт-Петербург',
    origin: 'Гамбург',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    model: 'Tesla Model 3 Long Range',
    vin: '5YJ3E1EA8PF123789',
    status: 'ready',
    eta: '2025-07-30',
    city: 'Казань',
    origin: 'Shanghai',
    image:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    model: 'Mercedes-Benz S 500 4MATIC',
    vin: 'W1K6G6DB5NA012345',
    status: 'in_transit',
    eta: '2025-08-22',
    city: 'Екатеринбург',
    origin: 'Штутгарт',
    image:
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    model: 'Hyundai Tucson 2.0 Style',
    vin: 'KMHLM41BMPU765432',
    status: 'delivered',
    eta: '2025-07-10',
    city: 'Новосибирск',
    origin: 'Ulsan',
    image:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    model: 'BYD Seal AWD Performance',
    vin: 'LC0CE4CB5P0123456',
    status: 'customs',
    eta: '2025-08-05',
    city: 'Краснодар',
    origin: 'Shenzhen',
    image:
      'https://images.unsplash.com/photo-1593941707882-a5bba14938bc?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    model: 'Porsche Cayenne S',
    vin: 'WP1AA2A59MDA98765',
    status: 'ready',
    eta: '2025-07-28',
    city: 'Сочи',
    origin: 'Лейпциг',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    model: 'Kia K5 2.5 GT Line',
    vin: 'KNAGM4A75P5123456',
    status: 'delivered',
    eta: '2025-06-25',
    city: 'Ростов-на-Дону',
    origin: 'Владивосток',
    image:
      'https://images.unsplash.com/photo-1609521263047-f8f205293bb4?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    model: 'Tesla Model Y Performance',
    vin: '7SAYGDEE5PF765432',
    status: 'in_transit',
    eta: '2025-08-18',
    city: 'Воронеж',
    origin: 'Берлин',
    image:
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&h=400&fit=crop',
  },
  {
    id: 10,
    model: 'BMW 7 Series 740i',
    vin: 'WBA7T2C50PCH12345',
    status: 'customs',
    eta: '2025-08-12',
    city: 'Самара',
    origin: 'München',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
  },
]

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateStr))
}
