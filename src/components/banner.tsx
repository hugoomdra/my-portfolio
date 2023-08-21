import React from 'react'

export default function Banner() {
    return (
        <div className='flex py-4 bg-green-500 text-white justify-center text-md px-8 items-center gap-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 hidden md:block">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            <p className='text-center'>Actuellement disponible, vous pouvez <span className='font-black'>m'appeler tout de suite</span> au <a className='underline underline-offset-4' href='tel:+33780081276'>07 80 08 12 76</a></p>
        </div>
    )
}
