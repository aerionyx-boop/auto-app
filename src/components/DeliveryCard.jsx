import { Calendar, MapPin, Hash } from 'lucide-react'
import StatusBadge from './StatusBadge'
import { formatDate } from '../data/deliveries'

export default function DeliveryCard({ delivery }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all active:scale-[0.99] sm:hover:-translate-y-0.5 sm:hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-slate-100 md:aspect-auto md:w-44 lg:w-52">
          <img
            src={delivery.image}
            alt={delivery.model}
            className="h-full w-full object-cover transition-transform duration-300 sm:group-hover:scale-105 md:min-h-[148px]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
          <div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
                {delivery.model}
              </h3>
              <StatusBadge status={delivery.status} />
            </div>

            <div className="mt-4 space-y-2.5 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <Hash className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span className="break-all font-mono text-xs tracking-wide text-slate-700 sm:text-sm">
                  {delivery.vin}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span className="min-w-0">
                  {delivery.origin} →{' '}
                  <span className="font-medium text-slate-900">{delivery.city}</span>
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span>
                  Ожидаемая дата:{' '}
                  <span className="font-medium text-slate-900">{formatDate(delivery.eta)}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
