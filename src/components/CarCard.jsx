import { Fuel, Gauge, Settings2 } from 'lucide-react'
import { formatPrice } from '../data/cars'

export default function CarCard({ car, onDetailsClick }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition-all active:scale-[0.99] sm:hover:-translate-y-0.5 sm:hover:shadow-md">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-300 sm:group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm">
          {car.year}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{car.name}</h3>

        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li className="flex items-start gap-2">
            <Gauge className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <span className="min-w-0">{car.engine}</span>
          </li>
          <li className="flex items-start gap-2">
            <Settings2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <span className="min-w-0">{car.transmission} · {car.drive}</span>
          </li>
          <li className="flex items-start gap-2">
            <Fuel className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            <span className="min-w-0">{car.fuel}</span>
          </li>
        </ul>

        <div className="mt-auto pt-4 sm:pt-5">
          <p className="text-xs uppercase tracking-wide text-slate-500">от</p>
          <p className="text-lg font-bold text-slate-900 sm:text-xl">{formatPrice(car.price)}</p>

          <button
            type="button"
            onClick={() => onDetailsClick(car)}
            className="mt-3 min-h-11 w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800 active:bg-slate-700 sm:mt-4"
          >
            Подробнее
          </button>
        </div>
      </div>
    </article>
  )
}
