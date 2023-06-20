import React from 'react'

const Newsletter = () => {
    const handleSubmit = e => {
        e.preventDefault();
        e.target.reset()
        alert('Thank you for your message')
    }
  return (
    <div className='w-full px-4 py-16 text-white bg-gray-900' id='newsletter'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
            <form className='flex flex-col sm:flex-row items-center justify-between w-full' onSubmit={handleSubmit}>
                <input className='p-3 flex w-full rounded-md text-black font-medium outline-none' type='email' placeholder='Enter Email' required/>
                <button className='bg-[#00df9a] text-black rounded-md w-[200px] font-bold uppercase ml-4 my-6 px-6 py-3'>Notify me</button>
            </form>
            <p>
                We care bout the protection of your data. Read our{' '}
                <span className='text-[#00df9a]'><a href='/'>Privacy Policy.</a></span>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
