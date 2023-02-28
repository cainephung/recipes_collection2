import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import kb from '../pics/kb.png'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import{motion} from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

const korean_beef =() => {

    return (
<>
        
       <div className=' fixed z-10 top-0 left-0 right-0 cursor-pointer'>
        <nav className="py-4 flex justify-center border-b-2 bg-black ">
          <ul className="flex cursor-pointer">
          
              <Link href='/'>
                  <li className="font-bold text-xl text-black dark:rounded-full dark:text-blue-100 uppercase hover:bottom-b">Home</li>
              </Link>
              <Link href="/list">
                  <li className=" font-bold text-xl text-[#5651e5] ml-52 dark:rounded-full dark:text-blue-100 uppercase hover:bottom-b">List</li>
              </Link>
          </ul>      
        </nav>
        </div>

        <motion.div className='grid place-items-center text-center pt-20' initial={{x: '-100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
            <Image className='' src={kb}  width={200} height={200} alt='/' ></Image> 
        </motion.div>
       
        <div className='grid place-items-center text-center pt-7'>
        <motion.div initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
       
        <p className='text-3xl tracking-widest pb-7 uppercase text-[#5651e5] font-black '>Korean ground beef with rice</p>
        </motion.div>

        <motion.div className='grid grid-cols-1 md:grid-cols-4 border-separate border-2 border-black place-items-center w-auto' initial={{x: '-100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
            
            <h3 className='underline text-[#5651e5] font-extrabold'>Servings:</h3>
            <h3 className='col-span-3 font-bold'>4</h3>
            <h3 className='underline text-[#5651e5] font-extrabold pt-2'>Prep time:</h3>
            <h3 className=' col-span-3 font-bold pt-2'>5 mins</h3>
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Cook time:</h3>
            <h3 className='col-span-3 font-bold pt-2'>15 mins</h3>     
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Author:</h3>
            <h3 className='col-span-3 font-bold pt-2'>ALYSSA RIVERS</h3> 
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Website:</h3>
            <Link className='col-span-3 cursor-pointer pt-2' href="https://therecipecritic.com/korean-ground-beef-rice-bowls/" target="_blank">
            <h3 className='font-bold underline'>https://therecipecritic.com/korean-ground-beef-rice-bowls/</h3> 
            </Link>
        </motion.div>
        </div>

        <div className='grid place-items-center text-center pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Ingredients:</p>

        <motion.div className='grid md:grid-cols-2 border-2 border-black justify-center m-auto p-5 gap-x-10' initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
        <div class="flex items-center text-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm  font-bold">Ground beef 90% lean: 1 lb.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Minced garlic: 3 cloves.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Brown sugar: 1/4 cup.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Reduced-sodium soy sauce: 1/4 cup.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Sesame oil: 2 tsps.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Ground ginger: 1/4 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Crushed red pepper flakes: 1/4 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Pepper: 1/4 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Minced onion/ shallot: 1 tsp.</label>
        </div>

        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Green onion: 2 tbsps</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Toasted sesame seeds: 1 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cooked white/ brown rice: 2 cups.</label>
        </div>
        </motion.div>
       

        <div className='grid place-items-center text-center pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Steps:</p>

        <div className='border-black border-2 p-5 justify-center m-auto'>
        <div class="items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 1: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Using a skillet/ pan, lightly brown the minced onion and garlic, then add in the ground beef and cook till no longer pink over medium heat. (Drain some of the grease if necessary).
            </label>
        </div>

        <div class=" items-center mb-4">
        
            <h3 className=' pl-2 underline'>Step 2: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold "> Add soy sauce, brown sugar, ginger, sesame oil, red pepper flakes and pepper; then whisk well. Then pour it evenly into the pan/ skillet with the ground beef and lightly mix them.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 3: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Place the ground beef over rice, and follow by the green onions and sesame seeds(divided evenly into 4 portions).
            </label>
        </div>

        
        </div>
        </div>

        <div className='flex justify-center pt-7 pb-2'>
                <Link href='/korean_beef'>
                    <div className='dark:bg-blue-100 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'><HiOutlineChevronDoubleUp className='font-black text-[#5651e5]' size={30}/></div>
                </Link>
          </div>
</div>
</>
    )
}

export default korean_beef