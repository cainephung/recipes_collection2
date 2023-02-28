import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import bs from '../pics/bs.png'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import{motion} from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

const beef_stew =() => {

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

        <motion.div className='grid place-items-center text-center pt-20' initial={{x:'-100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
            <Image className='' src={bs}  width={200} height={200} alt='/' ></Image> 
        </motion.div>
       
        <div className='grid place-items-center text-center pt-6'>
        <motion.div initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
       
        <p className='text-3xl  tracking-widest pb-7 uppercase text-[#5651e5] font-black '>Beef Stew</p>
        </motion.div>

        <motion.div className=' grid grid-cols-1 md:grid-cols-4 border-separate border-2 border-black place-items-center w-auto' initial={{x: '-100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
            
            <h3 className='underline text-[#5651e5] font-extrabold'>Servings:</h3>
            <h3 className='col-span-3 font-bold'>5</h3>
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'> Time:</h3>
            <h3 className='col-span-3 font-bold'>25 mins</h3>     
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Author:</h3>
            <h3 className='col-span-3 font-bold'>Heirloom</h3> 
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Website:</h3>
            <Link className='col-span-3 cursor-pointer' href="https://www.food.com/recipe/quick-and-easy-beef-stew-293275?scale=5" target="_blank">
            <h3 className='font-bold underline'>https://www.food.com/recipe/quick-and-easy-beef-stew-293275?scale=5</h3> 
            </Link>
        </motion.div>
        </div>

        <div className='grid place-items-center text-center pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Ingredients:</p>

        <motion.div className='grid md:grid-cols-2 border-2 border-black justify-center m-auto p-5 gap-x-10' initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
        <div class="flex items-center text-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm  font-bold">Sirloin tip roast, cubed: 1 1⁄4 lbs.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Large potatoes, cubed: 2.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Carrots, sliced: 3.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Onion, chopped: 1.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Salt: 1 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Pepper: 1 tsp..</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Worcestershire sauce: 1 tbsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Flour: 1/2 cup.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Olive oil: 1 tbsp.</label>
        </div>
     
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Beef broth(16 ounce): 3.</label>
        </div>

        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Salt & pepper: to taste.</label>
        </div>
        </motion.div>
       

        <div className='grid place-items-center text-center pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Steps:</p>

        <div className='border-black border-2 p-5 justify-center m-auto'>
        <div class="items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 1: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Using amedium mixing bowl, add in the flour and 1 tsp each of salt and pepper; then mix well.
            </label>
        </div>

        <div class=" items-center mb-4">
        
            <h3 className=' pl-2 underline'>Step 2: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Add in the beef cube and mix until fully coated.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 3: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Using a soup pot, add in the oil over medium heat. When sizzle, add in the beef cube and cook until browned on all sides.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 4: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold "> Add the onion, carrot, and potatoes to pot; then sprinkle in the remaining flour.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 5: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold "> Cook for 3-4 minutes, then add beef broth and bring to a boil.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 6: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Turn down the heat and simmer till the veggies are tender; then add the worcestershire sauce amd season to taste with salt and pepper.
            </label>
        </div>

        <div class=" items-center">
            <h3 className=' pl-2 underline'>Step 7: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Divided evenly into 5 portions, and enjoy with some rice/ bread.
            </label>
        </div>
        </div>
        </div>

        <div className='flex justify-center pt-7 pb-2'>
            <Link href='/beef_stew'>
                <div className='dark:bg-blue-100 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'><HiOutlineChevronDoubleUp className='font-black text-[#5651e5]' size={30}/></div>
            </Link>
        </div>
    </div>
</>
    )
}

export default beef_stew