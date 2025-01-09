"use client"
import CountUp from 'react-countup'


const stats = [
    {
        num:2409,
        text:'NTT',
    },
    {
        num:2011,
        text:'NAH',
    },
    {
        num:20,
        text:'Technology of the project',
    },
    {
        num:2004,
        text:'Code commits',
    },
]

const Stats = () => {
  return (
    <section
     className='pt-4 pb-12 xl:pt-0 xl:pb-0'
     >
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
            {stats.map((item,index) => {
                return <div key={index}
                    className="flex-1 flex flex-wrap items-center justify-center xl:justify-start"
                >
                    <CountUp 
                    end={item.num} 
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                    >
                    </CountUp>
                    <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                </div>
            })}
        </div>
    </section>
  )
}

export default Stats