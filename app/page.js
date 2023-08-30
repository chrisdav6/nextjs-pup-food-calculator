'use client';
import { useState } from 'react';
import FoodItem from '@/components/FoodItem';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Home() {
  const [total, setTotal] = useState(0);
  console.log(total);

  return (
    <main>
      <Header />

      <div>
        <FoodItem
          name='Kibble - 1/2 Cup'
          foodCalories={181.5}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Chicken - 1/2 Cup'
          foodCalories={108.5}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Beef - 1/2 Cup'
          foodCalories={143.5}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Egg'
          foodCalories={72}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='1/2 Tomato'
          foodCalories={11}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='1/2 Summer Squash'
          foodCalories={19}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Salmon Oil - 1 Pump'
          foodCalories={20}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Sardines - 1 Can'
          foodCalories={170}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Beef Jerky - 3 Pcs'
          foodCalories={116}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Brown Biscuit'
          foodCalories={33}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='PB Biscuit'
          foodCalories={17}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
      </div>
      <div className='flex flex-col items-center justify-center mt-4 mb-8'>
        <h3 className='text-3xl'>
          Total Calories ={' '}
          {total < 2100 ? (
            <span className='text-green-500'>{total}</span>
          ) : (
            <span className='text-red-500'>{total}</span>
          )}
        </h3>
        {total < 2100 ? (
          <p className='text-green-500'>You can use more calories! 😊</p>
        ) : (
          <p className='text-red-500'>You are over allowed calories! 😣</p>
        )}
      </div>

      <Footer />
    </main>
  );
}
