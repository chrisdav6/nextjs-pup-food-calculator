'use client';
import FoodItem from '@/components/FoodItem';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main>
      <Header />

      <div>
        <FoodItem name='Kibble - 1 Cup' foodCalories={363} foodQty={1} />
        <FoodItem name='Chicken - 1 Cup' foodCalories={217} foodQty={1} />
        <FoodItem name='Beef - 1 Cup' foodCalories={287} foodQty={1} />
        <FoodItem name='Egg' foodCalories={72} foodQty={1} />
        <FoodItem name='1/2 Tomato' foodCalories={11} foodQty={1} />
        <FoodItem name='1/2 Summer Squash' foodCalories={19} foodQty={1} />
        <FoodItem name='Salmon Oil - 1 Pump' foodCalories={20} foodQty={1} />
        <FoodItem name='Sardines - 1 Can' foodCalories={170} foodQty={1} />
        <FoodItem name='Beef Jerky - 3 Pieces' foodCalories={116} foodQty={1} />
        <FoodItem name='Brown Biscuit' foodCalories={33} foodQty={1} />
        <FoodItem name='PB Biscuit' foodCalories={17} foodQty={1} />
      </div>
      {/* <div className='flex items-center justify-center mt-4'>
        <h3 className='text-3xl'>Total Calories = </h3>
      </div> */}
    </main>
  );
}
