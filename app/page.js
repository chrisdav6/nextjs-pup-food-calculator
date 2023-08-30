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

      <div className='w-full md:w-[800px] m-auto'>
        <FoodItem
          name='Kibble - 1/2 Cup'
          foodDesc='Purina Large Breed Puppy Formula'
          foodCalories={181.5}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Chicken - 1/2 Cup'
          foodDesc='Skinless, Boneless Chicken Breast'
          foodCalories={108.5}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Beef - 1/2 Cup'
          foodDesc='80/20 Ground Meat - Fat Drained'
          foodCalories={143.5}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Egg'
          foodDesc='Farm Fresh Large Egg'
          foodCalories={72}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='1/2 Tomato'
          foodDesc='Price Chopper Tennis Ball Size Tomato'
          foodCalories={11}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='1/2 Summer Squash'
          foodDesc='Price Chopper Yellow Summer Squash'
          foodCalories={19}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Salmon Oil - 1 Pump'
          foodDesc='Grizzly Omega Health Wild Salmon Oil/Pollock Oil'
          foodCalories={20}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Sardines - 1 Can'
          foodDesc='Season Brand Sardines in Water, No Salt Added'
          foodCalories={170}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Beef Jerky - 3 Pcs'
          foodDesc='Home Made Top Round London Broil Jerky - Fat Removed'
          foodCalories={116}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='Brown Biscuit'
          foodDesc='Wholesomes Rewards Smoky Bites Biscuit'
          foodCalories={33}
          foodQty={1}
          total={total}
          setTotal={setTotal}
        />
        <FoodItem
          name='PB Biscuit'
          foodDesc='Old Mother Hubbard Classic Natural P-Nutty Biscuit'
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
            <span className='text-red-600'>{total}</span>
          )}
        </h3>
        {total < 2100 ? (
          <p className='text-green-500'>You can use more calories! 😊</p>
        ) : (
          <p className='text-red-600'>You are over allowed calories! 😣</p>
        )}
      </div>

      <Footer />
    </main>
  );
}
