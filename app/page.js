'use client';
import { useState } from 'react';
import { foodData } from '@/foodData';
import FoodItem from '@/components/FoodItem';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  const [total, setTotal] = useState(0);
  console.log(total);

  return (
    <main>
      <Header />

      <div className='w-full md:w-[800px] m-auto'>
        {foodData.map((item) => (
          <FoodItem
            key={item.id}
            name={item.name}
            measure={item.measure}
            foodDesc={item.desc}
            foodCalories={item.foodCalories}
            foodQty={item.qty}
            total={total}
            setTotal={setTotal}
          />
        ))}
      </div>

      <div className='flex flex-col items-center justify-center mt-6 mb-8'>
        <h3 className='text-[34px]'>
          Total Calories ={' '}
          {total < 2100 ? (
            <span className='text-green-500 font-bold'>{total}</span>
          ) : (
            <span className='text-red-600 font-bold'>{total}</span>
          )}
        </h3>
        {total < 2100 ? (
          <p className='text-green-500 text-2xl font-semibold'>
            More Calories Allowed! 😊
          </p>
        ) : (
          <p className='text-red-600 text-2xl font-semibold'>
            Over Allowed calories! 😣
          </p>
        )}
      </div>

      <Footer />
    </main>
  );
}
