import React, { useState } from 'react'

export default function CounterHook(init , steps) {

    const[coount , setCoount] =useState(init);
     const inc =() => setCoount((prev) => prev + steps)
    const dec =() => setCoount((prev) => prev - steps)
    const res = () =>  setCoount(init) 
  return  {coount ,inc , dec, res}
}
