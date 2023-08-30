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
    <div className='flex items-center p-4 border-t'>
      <div className='flex items-center justify-between space-x-2 mr-3'>
        <button onClick={() => increaseQty()}>
          <BsFillArrowUpSquareFill className='h-11 w-11 text-green-700 bg-green-100' />
        </button>

        <button onClick={() => decreaseQty()}>
          <BsFillArrowDownSquareFill className='h-11 w-11 text-blue-800 bg-blue-100' />
        </button>
      </div>
      <div className='flex flex-col text-lg'>
        <p className='-mb-2'>{name}</p>
        <p>
          Qty - <span className='font-bold'>{qty}</span>
        </p>
      </div>

      <p className='ml-auto text-lg'>
        Cal <span className='font-bold'>{calories}</span>
      </p>
    </div>
  );
}
