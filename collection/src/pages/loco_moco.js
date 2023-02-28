import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import lm from '../pics/loco_moco.png'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import{motion} from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

const loco_moco =() => {

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
            <Image className='' src={lm}  width={200} height={200} alt='/' ></Image> 
        </motion.div>
       
        <div className='grid place-items-center text-center px-2 pt-7'>
        <motion.div initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
       
        <p className='text-3xl tracking-widest pb-7 uppercase text-[#5651e5] font-black '>Beef Stew</p>
        </motion.div>

        <motion.div className=' grid grid-cols-1 md:grid-cols-4 border-separate border-2 border-black place-items-center w-auto' initial={{x: '-100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
            
            <h3 className='underline text-[#5651e5] font-extrabold'>Servings:</h3>
            <h3 className='col-span-3 font-bold'>2</h3>
            <h3 className='underline text-[#5651e5] font-extrabold pt-2'>Prep time:</h3>
            <h3 className=' col-span-3 font-bold'>15 mins</h3>
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Cook time:</h3>
            <h3 className='col-span-3 font-bold'>15 mins</h3>     
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Author:</h3>
            <h3 className='col-span-3 font-bold'>Chef John</h3>  
            <h3 className=' underline text-[#5651e5] font-extrabold pt-2'>Website:</h3>
            <Link className='col-span-3 cursor-pointer' href="https://www.allrecipes.com/recipe/272767/chef-johns-loco-moco/" target="_blank">
            <h3 className='font-bold underline'>https://www.allrecipes.com/recipe/272767/chef-johns-loco-moco/</h3> 
            </Link>
        </motion.div>
        </div>

        <div className='grid place-items-center text-center px-2 pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Ingredients:</p>

        <motion.div className='grid md:grid-cols-2 border-2 border-black items-center text-ce justify-center m-auto p-5 gap-x-10' initial={{x: '+100vw'}} animate={{x:0}} transition={{type:'spring', duration: 1, bounce: 0.4}}>
        <div class="flex items-center text-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm  font-bold">Ground beef patties (4 ounce): 2.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Salt: 1/4 tsp/ to taste.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Freshly ground black pepper: 1/4 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cayenne pepper: 1/4 tsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Beef stock: 1 ½ cup.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Soy sauce: 4 tsps.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Worcestershire sauce: 4 tsps.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cornstarch: 4 tsps.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Ketchup: 2 tsps.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">White sugar (optional): 2 tsps.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Sesame oil: 2 drops/ to taste.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Unsalted butter (divided): 2 tsps</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Chopped green onion: 1 tbsp.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Eggs: 2.</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cooked white rice: 2 cups.</label>
        </div>
        </motion.div>

        <div className='grid place-items-center text-center px-2 pt-7'>
        <p className=' text-2xl font-extrabold text-[#5651e5] mb-4'>Steps:</p>

        <div className='border-black border-2 p-5 justify-center m-auto'>
        <div class="items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 1: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Season the patties with salt, pepper, and cayenne.
            </label>
        </div>

        <div class=" items-center mb-4">
        
            <h3 className=' pl-2 underline'>Step 2: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold "> Add cornstarch, beef stock, Worcestershire sauce, soy sauce, ketchup, sesame oil, and sugar into a bowl; then whisk well.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 3: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Melt 1 teaspond of butter over medium-high heat using a pan/ skillet, and cook until the bottoms are nicely browned, both sides. 
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 4: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold "> Add green onions and cook until both beef and onions are browned. Remove everything and set aside.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 5: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Add the mixture from step 2 into the pan/ skillet and keep stirring until your desired consistency over medium heat.
            </label>
        </div>

        <div class=" items-center mb-4">
            <h3 className=' pl-2 underline'>Step 6: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Using another pan/ skillet, fry your eggs side by side to your desired doneness (sunny side up, preferably) with the remaining butter.
            </label>
        </div>

        <div class=" items-center">
            <h3 className=' pl-2 underline'>Step 7: </h3>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Place patties over rice, then gravy, and follow by the fried eggs(divided evenly into 2 portions).
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

export default loco_moco