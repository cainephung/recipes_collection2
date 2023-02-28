import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import tk from '../pics/tk.png'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import{motion} from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

const tom_kha =() => {

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
            <Image className='' src={tk}  width={200} height={200} alt='/' ></Image> 
        </motion.div>
       
        <div className='grid place-items-center text-center px-2 pt-6'>
        <motion.div initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
       
        <p className='text-3xl tracking-widest pb-7 uppercase text-[#5651e5] font-black '>Tom Kha Gai</p>
        </motion.div>

        <motion.div className=' grid grid-cols-1 md:grid-cols-4 border-separate border-2 border-black place-items-center w-auto' initial={{x: '-100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
            
            <h3 className='underline text-[#5651e5] font-extrabold'>Servings:</h3>
            <h3 className='col-span-3 font-bold'>2</h3>
            <h3 className='underline text-[#5651e5] font-extrabold pt-2'>Prep time:</h3>
            <h3 className=' col-span-3 font-bold'>15 mins</h3>
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Cook time:</h3>
            <h3 className='col-span-3 font-bold'>25 mins</h3>     
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Author:</h3>
            <h3 className='col-span-3 font-bold'> Pailin Chongchitnant</h3> 
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Website:</h3>
            <Link className='col-span-3 cursor-pointer' href="https://hot-thai-kitchen.com/tom-ka-gai" target="_blank">
            <h3 className='font-bold underline'>https://hot-thai-kitchen.com/tom-ka-gai</h3> 
            </Link>
        </motion.div>

        </div>

        <div className='grid place-items-center text-center px-2 pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Ingredients:</p>

        <motion.div className='grid md:grid-cols-2 border-2 border-black items-center text-ce justify-center m-auto p-5 gap-x-10' initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
        <div class="flex items-center text-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm  font-bold">Unsalted chicken stock: 2 cups.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Coconut milk: 1 ½ cup.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Kosher salt: 1 tsp (or Table salt: 1/2 tsp).</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Chicken thigh: 1 lb.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Lemon grass: 1 stalk.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Galangal: 12 thin slices.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Kaffir lime: 5 leaves.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Oyster mushrooms/ another Asian mushroom: 5.5 oz.</label>
        </div> 
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Thai chillies: 3 or 4.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Fish sauce: 1 ½ tbsps.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold "> Finely chopped palm sugar/ granulated sugar: 1 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Lime juice: 2 ½ tbsps. </label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Chopped green onion: 1 tbsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Chopped cilantro: 1 tbsp.</label>
        </div>
       
        <div class="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cooked  rice (optional).</label>
        </div>
        </motion.div>
       
        <div className='grid place-items-center text-center px-2 pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Notes:</p>
        <div className=' grid grid-cols-1  border-2 border-black place-items-center w-auto'>
            <h3 className=' font-bold pb-4'>- Chicken thigh: Cut to bite-size pieces.</h3>
            <h3 className=' font-bold pb-4'>- Lemon grass: Use the bottom half only, smashed and cut into 2-inch pieces.</h3>
            <h3 className=' font-bold pb-4'>- Kaffir lime leaves: Torn into big chunks and remove the center stems.</h3>
            <h3 className=' font-bold pb-4'>- Thai chillies: Bruise/ cut into large pieces.</h3>
            <h3 className=' font-bold pb-4'>The galangal, lemongrass, and makrut lime leaves are only meant for infusion.</h3>
        </div>
        </div>

        <div className='grid place-items-center text-center px-2 pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Steps:</p>

        <div className='border-black border-2 p-5 justify-center m-auto'>
        <div class="items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 1: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Add salt and chicken when chicken stock is at boiling temp, then Let gently simmer for 15-20 minutes/ fork tender.
            </label>
        </div>

        <div class=" items-center mb-4">
        
            <h3 className=' pl-2 underline'>Step 2: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Add lemongrass, coconut milk, sugar, galangal, chilies, kaffir lime leaves, and about half of the fish sauce; then simmer for 5 minutes.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 3: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Add the mushrooms and cook for 1-2 minutes, then turn of the heat.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 4: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold "> Add about 2 tbsps of lime juice. Taste and add more fish sauce, lime juice if needed.
            </label>
        </div>

        <div class=" items-center">
            <h3 className=' pl-2 underline'>Step 5: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Add the chopped green onion and cilantro, then divided evenly into 4 portions.
            </label>
        </div>
        </div>
        </div>

        <div className='flex justify-center pt-7 pb-2'>
                <Link href='/tom_kha'>
                    <div className='dark:bg-blue-100 rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'><HiOutlineChevronDoubleUp className='font-black text-[#5651e5]' size={30}/></div>
                </Link>
          </div>
</div>
</>
    )
}

export default tom_kha