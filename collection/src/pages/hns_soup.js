import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import hns from '../pics/hns.png'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import{motion} from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

const hs_soup =() => {

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
            <Image className='' src={hns}  width={200} height={200} alt='/' ></Image> 
        </motion.div>
       
        <div className='grid place-items-center text-center pt-7'>
        <motion.div initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
       
        <p className='text-3xl tracking-widest pb-7 uppercase text-[#5651e5] font-black '>Hot & Sour Soup</p>
        </motion.div>

        <motion.div className='grid grid-cols-1 md:grid-cols-4 border-separate border-2 border-black place-items-center w-auto' initial={{x: '-100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
            
            <h3 className='underline text-[#5651e5] font-extrabold'>Servings:</h3>
            <h3 className='col-span-3 font-bold'>5</h3>
            <h3 className='underline text-[#5651e5] font-extrabold pt-2'>Prep time:</h3>
            <h3 className=' col-span-3 font-bold pt-2'>5 mins</h3>
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Cook time:</h3>
            <h3 className='col-span-3 font-bold pt-2'>15 mins</h3>     
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Author:</h3>
            <h3 className='col-span-3 font-bold pt-2'>Amy Duska</h3> 
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Website:</h3>
            <Link className='col-span-3 cursor-pointer pt-2' href="https://littlespoonfarm.com/hot-and-sour-soup-recipe/" target="_blank">
            <h3 className='font-bold underline'>https://littlespoonfarm.com/hot-and-sour-soup-recipe/</h3> 
            </Link>
        </motion.div>
        </div>

        <div className='grid place-items-center text-center pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Ingredients:</p>

        <motion.div className='grid md:grid-cols-2 border-2 border-black justify-center m-auto p-5 gap-x-10' initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
        <div class="flex items-center text-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm  font-bold">Beef broth: 6 cups.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Shittake mushroom, sliced: 1/2 cup.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Regular/ reduced sodium soy sauce: 1/4 cup.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold "> Rice wine/ white vinegar: 1/4 cup.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Sriracha: 1 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">White pepper: 1 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cornstarch: 3 tbsps.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cold water: 3 tbsps.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Eggs, well beaten: 2.</label>
        </div>

        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Firm tofu, sliced: 6 oz.</label>
        </div>
     
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Green onion, sliced: 1 or 2.</label>
        </div>
        </motion.div>
       

        <div className='grid place-items-center text-center pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Steps:</p>

        <div className='border-black border-2 p-5 justify-center m-auto'>
        <div class="items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 1: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Using a large saucepan, add in the beef broth over medium high heat and bring it to a simmer.
            </label>
        </div>

        <div class=" items-center mb-4">
        
            <h3 className=' pl-2 underline'>Step 2: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Using a small bowl, add in the cornstarch and cold water, then whisk well.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 3: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Add the mixture in step 2 into the beef broth and stir well. Turn down the heat and simmer for 5 minutes / thickened.
            </label>
        </div>
        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 4: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold "> Slowly pour in the beaten eggs into the soup while gently stirring the soup.
            </label>
        </div>
        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step : </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Add in the sliced green onion and firm tofus, then divided evenly to 5 portions.
            </label>
        </div>
        </div>
        </div>

        <div className='flex justify-center pt-7 pb-2'>
            <Link href='/hns_soup'>
                <div className='dark:bg-blue-100 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'><HiOutlineChevronDoubleUp className='font-black text-[#5651e5]' size={30}/></div>
            </Link>
        </div>
    </div>
</>
    )
}

export default hs_soup