'use client'

import Image from 'next/image'
import React from 'react'
import { projects } from '@/lib/data'
import { motion } from 'framer-motion'

export default function Projects() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            type: "keyframes",
            duration: 1,
            delay: 1.5,
        }}
        className='py-16'>
            <div className='px-8 lg:px-0 lg:w-2/3 mx-auto'>
                
                <h3 className='text-2xl mb-8 font-bold'>Projets</h3>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-12'>

                    {projects.map((project) => (

                        <div className='flex flex-col gap-y-4' key={project.name}>

                            <Image src={project.image} alt='' width={1000} height={1000} className='rounded-md'></Image>

                            <p className='font-bold'>{project.name}</p>

                            <p className='text-gray-800 '>{project.description}</p>

                            {project.link && <span><span className='mr-2'>👉</span> <a target='_blank' className='hover:text-gray-500 duration-200' href={project.link}>{project.displayLink}</a></span>}

                        </div>
                    ))
                    }
                </div>
            </div>
        </motion.div>
    )
}
