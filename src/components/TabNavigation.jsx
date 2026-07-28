import { Car, Truck } from 'lucide-react'

export const tabs = [
  { id: 'cars', label: 'Автомобили и цены', shortLabel: 'Каталог', icon: Car },
  { id: 'delivery', label: 'Доставка авто', shortLabel: 'Доставка', icon: Truck },
]

function TabButton({ tab, isActive, onClick, variant = 'header' }) {
  const Icon = tab.icon

  if (variant === 'bottom') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`flex flex-1 flex-col items-center justify-center gap-1 py-2 text-xs font-medium transition-colors ${
          isActive ? 'text-slate-900' : 'text-slate-500'
        }`}
      >
        <span
          className={`flex h-10 w-10 items-center justify-center rounded-2xl transition-all ${
            isActive ? 'bg-slate-900 text-white shadow-sm' : 'bg-transparent'
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span>{tab.shortLabel}</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all ${
        isActive
          ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200'
          : 'text-slate-600 hover:text-slate-900'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{tab.label}</span>
    </button>
  )
}

export default function TabNavigation({ activeTab, onTabChange }) {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between md:h-16">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white md:h-10 md:w-10">
                <Car className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 md:text-base">AutoPortal</p>
                <p className="hidden text-xs text-slate-500 xs:block sm:block">
                  Каталог и логистика
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-1 rounded-xl bg-slate-100 p-1 md:flex">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab}
                  isActive={activeTab === tab.id}
                  onClick={() => onTabChange(tab.id)}
                  variant="header"
                />
              ))}
            </nav>
          </div>
        </div>
      </header>

      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-white/95 backdrop-blur-lg pb-[env(safe-area-inset-bottom)] md:hidden">
        <div className="mx-auto flex max-w-lg px-2">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => onTabChange(tab.id)}
              variant="bottom"
            />
          ))}
        </div>
      </nav>
    </>
  )
}
