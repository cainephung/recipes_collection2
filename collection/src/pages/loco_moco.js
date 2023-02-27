import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import lm from '../pics/loco_moco.png'



const inter = Inter({ subsets: ['latin'] })

const loco_moco =() => {

    return (
        <div className='max-w-[1240px] mx-auto px-0 py-16'>
        <p className='text-4xl text-center tracking-widest uppercase text-[#5651e5] font-black '>Loco Moco</p>

        <div className='grid  place-items-center text-center pt-6 '>
        <div className=' grid grid-cols-3 border-separate border-2 border-black place-items-center  w-80'>
            
            <h3 className=' col-span-2 underline font-extrabold'>Servings:</h3>
            <h3 className='font-bold'>2</h3>
            <h3 className=' col-span-2 underline font-extrabold'>Prep time:</h3>
            <h3 className='font-bold'>15 mins</h3>
            <h3 className=' col-span-2 underline font-extrabold'>Cook time:</h3>
            <h3 className='font-bold'>15 mins</h3>     
        </div>
        </div>

        <div className='grid place-items-center text-center pt-16'>
        <p className=' text-2xl font-extrabold mb-4'>Ingredients:</p>
        <div className=' grid md:grid-cols-2 border-2 border-black justify-center m-auto p-5 gap-x-10'>

        <div class="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold">Ground beef patties (4 ounce):    2</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Salt: 1 pinch</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Freshly ground black pepper: 1 pinch</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cayenne pepper: 1 pinch1 ½</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Beef stock: 1 ½ cup </label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Soy sauce: 4 tsps</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Worcestershire sauce: 4 tsp</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cornstarch: 4 tsps</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Ketchup: 2 tsps</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">White sugar (optional): 2 tsps</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Sesame oil: 2 drops/ to taste</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Unsalted butter (divided): 2 tsps</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Green onion: 2 tbsps</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Eggs: 2</label>
        </div>
        <div class="flex items-center mb-4 ">
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4  bg-gray-100 border-gray-300"></input>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Cooked white rice: 2 cups</label>
        </div>
        </div>
        <div className='grid place-items-center text-center pt-16 '>
        <p className=' text-2xl font-extrabold mb-4'>Steps:</p>
        <h3 className=' pl-2 underline uppercase font-black'>(Need to reword all the steps) </h3>

        <div className='border-black border-2 p-5'>
        <div class="items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 1: </h3>

            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Season patties with salt, pepper, and cayenne; set aside.
            </label>
        </div>

        <div class=" items-center mb-10 ">
            <h3 className=' pl-2 underline'>Step 2: </h3>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Whisk together beef stock, soy sauce, Worcestershire sauce, cornstarch, ketchup, sugar, and sesame oil in a bowl; set aside.
            </label>
        </div>

        <div class=" items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 3: </h3>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Melt 1 teaspoon butter in a skillet over medium-high heat. Cook patties in the hot skillet until the bottoms are nicely browned, about 5 minutes. Flip patties; add green onions and cook until both beef and onions are browned, 4 to 5 minutes. Remove patties and most of green onions to a plate.
            </label>
        </div>

        <div class=" items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 4: </h3>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Pour beef stock mixture into the skillet. Stir, scraping up browned bits from the bottom, until thickened, about 2 minutes. Reduce heat to low and reserve gravy until needed.
            </label>
        </div>

        <div class=" items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 5: </h3>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Melt remaining butter in another skillet over medium heat. Add eggs to the skillet and fry side-by-side until whites are set and yolks are still runny.
            </label>
        </div>

        <div class=" items-center mb-4 ">
            <h3 className=' pl-2 underline'>Step 6: </h3>
            <label for="default-checkbox" class="ml-2 text-sm font-bold ">Divide rice between 2 serving bowls. Place patties over rice, spoon gravy on top, and add fried eggs.
            </label>
        </div>
        </div>
        </div>
        
        </div>

        


</div>
    )
}

export default loco_moco