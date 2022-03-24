import React from 'react'

function MiniProfile() {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className=" h-16 w-16 rounded-full border p-[2px]"
        src="https://media-exp1.licdn.com/dms/image/C5603AQETq7-WpTCd5A/profile-displayphoto-shrink_100_100/0/1516999750846?e=1653523200&v=beta&t=ZHbfAHRpCddScUeYk1G3MGFDeT1meNRLM6mo9FAqCBM"
        alt="mini profile image"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">daniel</h2>
        <h3 className=" text-sm text-gray-400">Welcometo Instagram</h3>
      </div>
      <button className=" text-sm font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}

export default MiniProfile
