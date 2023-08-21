'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'


function getEmoji() {

    let hours = new Date().getHours();

   let emoji = '👋';

    if (hours >= 0 && hours < 7) {
        emoji = '😴';
    }

    return emoji;
}


export default function HeroSection() {
    return (
        <div className='py-16 bg-gradient-to-b from-blue-200'>
            <div className='px-8 lg:px-0 lg:w-1/2 flex flex-col items-center justify-center gap-y-12 mx-auto'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        duration: 1,
                    }}
                    className='relative'>
                    <Image src="/images/hugo.jpeg" alt="Picture of the author" width={200} height={200} className='rounded-full border-white border-4 w-24 h-24' />
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 20 }}
                        transition={{
                            type: "",
                            duration: 0.2,
                            delay: 3,
                            repeat: 3,
                            repeatType: "reverse",
                        }}
                        className='absolute bottom-0 right-0 text-4xl'>{getEmoji()}</motion.div>
                </motion.div>
                <div className='space-y-6'>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "keyframes",
                            duration: 0.5,
                        }}
                        className='text-3xl lg:text-4xl text-center font-bold'>Hugo Madureira</motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "keyframes",
                            duration: 0.5,
                            delay: 0.25,
                        }}
                        className='text-2xl lg:text-4xl leading-relaxed text-center'>Développeur Full-Stack avec <span className='font-semibold'> 5 ans d&apos;expériences</span></motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "keyframes",
                            duration: 0.5,
                            delay: 0.5,
                        }}
                        className='text-xl lg:text-2xl text-center font-light italic'>Prêt à coder pour <span className='underline underline-offset-4'>vos idées !</span> 🚀</motion.h3>
                </div>

                <div className='flex flex-row gap-x-4'>
                    <motion.a
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 0.75,
                        }}
                        href={'https://www.linkedin.com/in/hugo-madureira'} target='_blank' className='p-4 bg-white rounded-full shadow-md cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M8 11l0 5"></path>
                            <path d="M8 8l0 .01"></path>
                            <path d="M12 16l0 -5"></path>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                    </motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            duration: 1,
                            delay: 1,
                        }}
                        href={'https://twitter.com/hugoomdra'} target='_blank' className='p-4 bg-white rounded-full shadow-md cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                        </svg>
                    </motion.a>
                </div>
            </div>
        </div>
    )
}
