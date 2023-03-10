import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import lm from '../pics/loco_moco.png'
import kb from '../pics/kb.png'
import tk from '../pics/tk.png'
import hns from '../pics/hns.png'
import bs from '../pics/bs.png'
import{motion} from "framer-motion"
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const inter = Inter({ subsets: ['latin'] })

const List =() => {

    return (
        <>
        <div className=' fixed z-10 top-0 left-0 right-0 cursor-pointer'>
        <nav className="py-4 flex justify-center border-b-2 bg-black ">
          <ul className="flex cursor-pointer">
          
              <Link href='/'>
                  <li className="font-bold text-xl text-black dark:rounded-full dark:text-blue-100 uppercase hover:bottom-b">Home</li>
              </Link>
              
          </ul>      
        </nav>
        </div>

    <motion.div id='list' className='w-full pt-16' initial={{y:'-100vw'}} animate={{y:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
    <div className=' w-full mx-auto px-2 py-16'>
        <p className='text-4xl text-center tracking-widest uppercase text-[#5651e5] font-black animate-ping-slow'>Recipes</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-20 pt-10'> 

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-col-2 gap-4 justify-center items-center'>
            
            <div className='flex flex-col items-center justify-center font-black'>
                <h3 className='text-lg'>Loco Moco</h3>
            </div>

            <div className='m-auto'>
                <Image  src={lm}  width={500} height={500} alt='/' ></Image> 
            </div>

            <div className='flex flex-col items-center justify-center font-black'>
                <Link href='/loco_moco'>
                    <button className='py-2 px-4'>More</button>
                </Link>
            </div>
        </div>
        </div>


        
        <div className='p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-col-2 gap-4 justify-center items-center'>
            
            <div className='flex flex-col items-center justify-center font-black'>
                <h3 className='text-lg'>Korean Beef</h3>
            </div>

            <div className='m-auto'>
                <Image  src={kb}  width={500} height={500} alt='/' ></Image> 
            </div>

            <div className='flex flex-col items-center justify-center font-black'>
                <Link href='/korean_beef'>
                    <button className='py-2 px-4'>More</button>
                </Link>
            </div>
        </div>
        </div>


        <div className='p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-col-2 gap-4 justify-center items-center'>
            
            <div className='flex flex-col items-center justify-center font-black'>
                <h3 className='text-lg'>Tom Kha Gai</h3>
            </div>

            <div className='m-auto'>
                <Image  src={tk}  width={500} height={500} alt='/' ></Image> 
            </div>

            <div className='flex flex-col items-center justify-center font-black'>
                <Link href='/tom_kha'>
                    <button className='py-2 px-4'>More</button>
                </Link>
            </div>
        </div>
        </div>
        

        <div className='p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-col-2 gap-4 justify-center items-center'>
            
            <div className='flex flex-col items-center justify-center font-black'>
                <h3 className='text-lg'>Hot & Sour Soup</h3>
            </div>

            <div className='m-auto'>
                <Image  src={hns}  width={500} height={500} alt='/' ></Image> 
            </div>

            <div className='flex flex-col items-center justify-center font-black'>
                <Link href='/hns_soup'>
                    <button className='py-2 px-4'>More</button>
                </Link>
            </div>
        </div>
        </div>


        <div className='p-6 shadow-2xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-col-2 gap-4 justify-center items-center'>
            
            <div className='flex flex-col items-center justify-center font-black'>
                <h3 className='text-lg'>Beef Stew</h3>
            </div>

            <div className='m-auto'>
                <Image  src={bs}  width={500} height={500} alt='/' ></Image> 
            </div>

            <div className='flex flex-col items-center justify-center font-black'>
                <Link href='/beef_stew'>
                    <button className='py-2 px-4'>More</button>
                </Link>
            </div>
        </div>
        </div>
        </div>
    </div>
    <div className='flex justify-center pt-7 pb-2'>
            <Link href='/list'>
                <div className='dark:bg-blue-100 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'><HiOutlineChevronDoubleUp className='font-black text-[#5651e5]' size={30}/></div>
            </Link>
        </div>
</motion.div>
</>
)
}

export default List