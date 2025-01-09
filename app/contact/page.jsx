"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select"
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa'
import {motion} from 'framer-motion'


const info = [
  {
    icon: <FaPhoneAlt></FaPhoneAlt>,
    title:'Phone',
    desc: '+84 346674072'
  },
  {
    icon: <FaEnvelope></FaEnvelope>,
    title:'Email',
    desc: 'nguyenanhhuy2004@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt></FaMapMarkerAlt>,
    title:'Address',
    desc: 'HoChiMinh City'
  },
]

const Contact = () => {
  return (
    <motion.section 
    initial={{opacity:0}} 
    animate={{opacity:1,transition: {delay:2.4,duration:0.4,ease:'easeIn'}}}
    className='py-6'
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Let's Work Together</h3>
                <p className="text-white/60">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti itaque assumenda temporibus perspiciatis vel nihil. Earum qui et nisi totam!</p>
                <div className="grid gird-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="Firstname"/>
                  <Input type="lastname" placeholder="Lastname"/>
                  <Input type="email" placeholder="Email Address"/>
                  <Input type="phonenumber" placeholder="PhoneNumber"/>
                </div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a services"></SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a services</SelectLabel>
                      <SelectItem value="dev">Web Developer</SelectItem>
                      <SelectItem value="cst">UI/UX</SelectItem>
                      <SelectItem value="mst">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* text area*/}
                <Textarea className='h-[200px]' placeholder='Type your message here'></Textarea>
                {/* button*/}
                <Button size='md' className='max-w-40'>Send message</Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end oder-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((info,index) => {
                  return <li key={index} className='flex items-center gap-6'>
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-3xl">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{info.title}</p>
                      <h3 className="text-xl">{info.desc}</h3>
                    </div>
                  </li>
                })}
              </ul>
            </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Contact