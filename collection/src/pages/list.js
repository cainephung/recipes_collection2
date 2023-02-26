import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import lm from '../pics/loco_moco.png'
import kb from '../pics/kb.png'
import tk from '../pics/tk.png'
import hns from '../pics/hns.png'
import bs from '../pics/bs.png'


const inter = Inter({ subsets: ['latin'] })

const List =() => {

    return (
    <div id='Skills' className='w-full pt-16'>
    <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-4xl text-center tracking-widest uppercase text-[#5651e5] font-black animate-ping-slow'>Recipes</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-20 pt-10'> 

        <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-col-2 gap-4 justify-center items-center'>
            
            <div className='flex flex-col items-center justify-center font-black'>
                <h3 className='text-lg'>Loco Moco</h3>
            </div>

            <div className='m-auto'>
                <Image  src={lm}  width={500} height={500} alt='/' ></Image> 
            </div>

            <div className='flex flex-col items-center justify-center font-black'>
                <Link href='/'>
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
                <Link href='/'>
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
                <Link href='/'>
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
                <Link href='/'>
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
                <Link href='/'>
                    <button className='py-2 px-4'>More</button>
                </Link>
            </div>
        </div>
        </div>
        

       

        </div>
    </div>
</div>
)
}

export default List