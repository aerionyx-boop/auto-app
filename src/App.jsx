import { useState } from 'react'
import TabNavigation from './components/TabNavigation'
import TabCars from './components/TabCars'
import TabDelivery from './components/TabDelivery'

export default function App() {
  const [activeTab, setActiveTab] = useState('cars')

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-slate-50">
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="mx-auto max-w-7xl px-4 py-5 pb-[calc(5.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:py-8 md:pb-8 lg:px-8">
        {activeTab === 'cars' ? <TabCars /> : <TabDelivery />}
      </main>
    </div>
  )
}
