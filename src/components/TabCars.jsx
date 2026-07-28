import { useMemo, useState } from 'react'
import CategoryFilter from './CategoryFilter'
import CarCard from './CarCard'
import CarModal from './CarModal'
import { cars, carCategories } from '../data/cars'

export default function TabCars() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedCar, setSelectedCar] = useState(null)

  const filteredCars = useMemo(() => {
    if (activeCategory === 'all') return cars
    return cars.filter((car) => car.category === activeCategory)
  }, [activeCategory])

  return (
    <section>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
          Автомобили и цены
        </h1>
        <p className="mt-1.5 text-sm text-slate-600 sm:mt-2 sm:text-base">
          Выберите категорию и изучите актуальный каталог с комплектациями
        </p>
      </div>

      <CategoryFilter
        categories={carCategories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <p className="mt-4 text-sm text-slate-500 sm:mt-6">
        Найдено: <span className="font-medium text-slate-700">{filteredCars.length}</span>{' '}
        {filteredCars.length === 1 ? 'автомобиль' : 'автомобилей'}
      </p>

      {filteredCars.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 xs:grid-cols-2 sm:mt-6 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} onDetailsClick={setSelectedCar} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center sm:mt-12 sm:p-12">
          <p className="text-sm text-slate-500 sm:text-base">
            В этой категории пока нет автомобилей
          </p>
        </div>
      )}

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </section>
  )
}
