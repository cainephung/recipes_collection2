import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import lm from '../pics/loco_moco.png'



const inter = Inter({ subsets: ['latin'] })

const loco_moco =() => {

    return (
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-4xl text-center tracking-widest uppercase text-[#5651e5] font-black '>Loco Moco</p>

        <div className='grid  place-items-center pt-6'>
        <div className=' grid grid-cols-3 border-2 place-items-center  w-fit'>
            <div>
            <h3 className='col-span-2 border  border-black'>Servings:</h3>
            </div>

            <div>
            <h3 className='col-span-1 border-2'>5</h3>
            </div>
           
        </div>
        </div>

        </div>
    )
}

export default loco_moco