import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link";
import{motion} from "framer-motion"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex h-screen'>
      <Head>df
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='m-auto'>
        <div className='text-center justify-center '>
          <div>
          <motion.div initial='hidden' animate='visible' variants={{

            hidden:{
              scale: .8,
              opacity: 0
            },
            visible:{
              scale: 1,
              opacity: 1,
              transition:{
                delay: .7
              }
            },
          }}>
            <p className='font-black text-5xl'> CAINE'S COLLECTION</p>
            </motion.div>  
            <p className=' text-sm font-bold md:text-xl p-10'> This is my personal recipes collection of simple or simplify version dishes from various sources.<br/>Suitable for everyone, but especially for people who want to cook something relatively easy but stil decicious!</p>
            <Link href='/list'><button className=' text-xl cursor-pointer px-5 py-1'>Let's Begin!</button>        
            </Link>
          </div>

          
        </div>
      </main>
    </div>
  )
}
