import { useMemo, useState } from 'react'
import StatusFilter from './StatusFilter'
import DeliveryCard from './DeliveryCard'
import { deliveries, deliveryStatuses } from '../data/deliveries'

export default function TabDelivery() {
  const [activeStatus, setActiveStatus] = useState('all')

  const filteredDeliveries = useMemo(() => {
    if (activeStatus === 'all') return deliveries
    return deliveries.filter((item) => item.status === activeStatus)
  }, [activeStatus])

  return (
    <section>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
          Доставка авто
        </h1>
        <p className="mt-1.5 text-sm text-slate-600 sm:mt-2 sm:text-base">
          Отслеживайте статус доставки ваших автомобилей в режиме реального времени
        </p>
      </div>

      <StatusFilter
        statuses={deliveryStatuses}
        activeStatus={activeStatus}
        onStatusChange={setActiveStatus}
      />

      <p className="mt-4 text-sm text-slate-500 sm:mt-6">
        Показано: <span className="font-medium text-slate-700">{filteredDeliveries.length}</span>{' '}
        {filteredDeliveries.length === 1 ? 'запись' : 'записей'}
      </p>

      {filteredDeliveries.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 lg:grid-cols-2">
          {filteredDeliveries.map((delivery) => (
            <DeliveryCard key={delivery.id} delivery={delivery} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center sm:mt-12 sm:p-12">
          <p className="text-sm text-slate-500 sm:text-base">
            Нет автомобилей с выбранным статусом
          </p>
        </div>
      )}
    </section>
  )
}
