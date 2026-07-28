import { useEffect } from 'react'
import { X, Check } from 'lucide-react'
import { formatPrice } from '../data/cars'

export default function CarModal({ car, onClose }) {
  useEffect(() => {
    if (!car) return undefined

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [car])

  if (!car) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4"
      onClick={onClose}
      role="presentation"
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />

      <div
        className="relative flex max-h-[92dvh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-h-[90vh] sm:max-w-3xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="car-modal-title"
      >
        <div className="flex shrink-0 justify-center pt-3 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-slate-300" />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-white hover:text-slate-900 sm:right-4 sm:top-4"
          aria-label="Закрыть"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto overscroll-contain">
          <div className="aspect-[16/10] overflow-hidden bg-slate-100 sm:aspect-[21/9]">
            <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
          </div>

          <div className="p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] sm:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-500">{car.year} модельный год</p>
                <h2 id="car-modal-title" className="mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
                  {car.name}
                </h2>
              </div>
              <div className="sm:text-right">
                <p className="text-sm text-slate-500">Цена от</p>
                <p className="text-xl font-bold text-slate-900 sm:text-2xl">{formatPrice(car.price)}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">{car.description}</p>

            <div className="mt-6 grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-4">
              {[
                { label: 'Двигатель', value: car.engine },
                { label: 'КПП', value: car.transmission },
                { label: 'Привод', value: car.drive },
                { label: 'Топливо', value: car.fuel },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-100">
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="mt-1 text-sm font-medium text-slate-900">{value}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-8 text-base font-semibold text-slate-900 sm:text-lg">
              Комплектации и цены
            </h3>
            <div className="mt-4 space-y-3">
              {car.trims.map((trim) => (
                <div
                  key={trim.name}
                  className="rounded-xl border border-slate-200 p-4 transition-colors hover:border-slate-300"
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                    <h4 className="font-semibold text-slate-900">{trim.name}</h4>
                    <span className="text-lg font-bold text-slate-900">{formatPrice(trim.price)}</span>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {trim.features.map((feature) => (
                      <li
                        key={feature}
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                      >
                        <Check className="h-3 w-3 shrink-0 text-emerald-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
