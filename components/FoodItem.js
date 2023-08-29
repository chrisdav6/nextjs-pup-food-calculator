'use client';
import { useState, useEffect } from 'react';
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from 'react-icons/bs';

export default function FoodItem({ name, foodCalories, foodQty }) {
  const [calories, setCalories] = useState(foodCalories);
  const [qty, setQty] = useState(foodQty);

  useEffect(() => {
    setCalories(0);
    setQty(0);
  }, []);

  const increaseQty = () => {
    setQty(qty + 1);
    setCalories(calories + foodCalories);
  };

  const decreaseQty = () => {
    if (qty !== 0) {
      setQty(qty - 1);
      setCalories(calories - foodCalories);
    }
  };

  return (
    <div className='flex items-center justify-between px-4 py-2 border-t'>
      <div className='flex flex-col gap-y-0'>
        <p>{name}</p>
        <div className='flex items-center justify-between space-x-2'>
          <button onClick={() => increaseQty()}>
            <BsFillArrowUpSquareFill />
          </button>
          <p>Qty - {qty}</p>
          <button onClick={() => decreaseQty()}>
            <BsFillArrowDownSquareFill />
          </button>
        </div>
      </div>

      <p>Calories - {calories}</p>
    </div>
  );
}
