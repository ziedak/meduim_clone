import React from 'react'

const Banner = () => {
  return (
    <div className="flex items-center justify-between border-y border-black bg-yellow-400 py-10 lg:py-0">
      <div className=" space-y-5 px-10">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline decoration-black  decoration-4 ">
            Meduim
          </span>{' '}
          is a place to write, read and connect
        </h1>
        <h2>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers
        </h2>
      </div>
      <div>
        <img
          className="hidden h-32  p-10 md:inline-flex lg:h-64 "
          src="https://cdn.worldvectorlogo.com/logos/medium-1.svg"
          alt=""
        />
      </div>
    </div>
  )
}

export default Banner
