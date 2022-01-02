import React from 'react'
import { useStore } from 'host/store'

export default function Header() {
  const { count } = useStore();
  return (
    <div className="bg-gray-200 px-8 py-4 flex justify-between items-center">
      <div className="font-bold text-lg">Header</div>
      <div className="font-normal text-lg">Count: {count}</div>
    </div>
  )
}