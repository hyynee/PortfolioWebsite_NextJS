"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

// css
import {Tabs,TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import {motion} from 'framer-motion'




// data
const about = {
  title: 'About me',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque excepturi ullam minima nulla veritatis, modi adipisci necessitatibus distinctio eligendi reiciendis.',
  info: [
    {
      name:"Name",
      fieldValue:'NguyenAnhHuy'
    },
    {
      name:"Phone",
      fieldValue:'0346674072'
    },
    {
      name:"Experience",
      fieldValue:'1+ Years'
    },
    {
      name:"Skype",
      fieldValue:'NguyenAnhHuy'
    },
    {
      name:"Nationality",
      fieldValue:'Vietnamese'
    },
    {
      name:"Email",
      fieldValue:'nguyenanhhuy2004@gmail.com'
    },
    {
      name:"Freelance",
      fieldValue:'Available'
    },
    {
      name:"Language",
      fieldValue:'English, Vietnamese'
    },
  ]
}

// experience
const experience = {
  icons: '/assets/resume/cap.png',
  title: 'My Experience',
  desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque excepturi ullam minima nulla veritatis, modi adipisci necessitatibus distinctio eligendi reiciendis.',
  items: [
    {
      company: 'Tech Innovation Solutions',
      position: 'Software Engineer',
      duration: '2023 - Present',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque excepturi ullam minima nulla veritatis, modi adipisci necessitatibus distinctio eligendi reiciendis.'
    },
    {
      company: 'Saigon University',
      position: 'Software Engineer Intern',
      duration: '2022',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque excepturi ullam minima nulla veritatis, modi adipisci necess'
    },
    {
      company: 'Global Tech Ventures',
      position: 'Junior Developer',
      duration: '2021 - 2023',
      description: 'Worked on developing web applications and maintaining backend systems.'
    },
    {
      company: 'Future Coders',
      position: 'Web Developer Intern',
      duration: '2020',
      description: 'Assisted in the development of several front-end features using HTML, CSS, and JavaScript.'
    },
    {
      company: 'InnovateX Solutions',
      position: 'Mobile App Developer',
      duration: '2019 - 2020',
      description: 'Developed and maintained mobile applications for Android and iOS platforms.'
    },
    {
      company: 'DevStart Inc.',
      position: 'Full Stack Developer',
      duration: '2018 - 2019',
      description: 'Collaborated in a team to build full-stack web applications with Node.js and React.'
    }
  ]
}

const education  = {
  icons: '/assets/resume/cap.png',
  title:'My education',
  desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque excepturi ullam minima nulla veritatis, modi adipisci necessitatibus distinctio eligendi reiciendis.',
  items: [
    {
      institution: 'Online Course Platform',
      degree:'Full Stack Web Development Bootcamp',
      duration: '2024'
    },
    {
      institution: 'Code Cybersoft Academy',
      degree:'Full Stack Web Development',
      duration: '2023'
    },
    {
      institution: 'Saigon University',
      degree:'Infomation Technology',
      duration: '2022 - 2027'
    },
    {
      institution: 'Tech Institute',
      degree:'Certified Web Developer',
      duration: '2023'
    },
    {
      institution: 'Design School',
      degree:'Diploma in Graphic Design',
      duration: '2023 - 2024'
    },
    {
      institution: 'Community College',
      degree:'Associate Degree in Computer Science',
      duration: '2023 - 2024'
    },
  ]
}

const skills = {
  tilte: 'My skills',
  desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloribus blanditiis quas maxime fugit illo veritatis totam facere alias distinctio.',
  skillList: [
    {
      icons: <FaHtml5></FaHtml5>,
      name:'Html 5'
    },
    {
      icons: <FaCss3></FaCss3>,
      name:'Css Style'
    },
    {
      icons: <FaJs></FaJs>,
      name:'JavaScript'
    },
    {
      icons: <FaReact></FaReact>,
      name:'React.js'
    },
    {
      icons: <SiNextdotjs></SiNextdotjs>,
      name:'Next.js'
    },
    {
      icons: <SiTailwindcss></SiTailwindcss>,
      name:'Taiwind.css'
    },
    {
      icons: <FaNodeJs></FaNodeJs>,
      name:'Node.js'
    },
    {
      icons: <FaFigma></FaFigma>,
      name:'Figma'
    },
  ]
}

const Resume = () => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1,transition: {
        delay: 2.4,
        duration: 0.4,
        ease: 'easeIn',
      }}}
      className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience' className=''>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About me</TabsTrigger>
          </TabsList>

          {/*content */}
          <div className='mix-h-[70vh] w-full'>
                {/*experience */}
            <TabsContent value='experience' className='w-full'>
                          <div className='flex flex-col gap-[30px] text-center'>
                            <h3 className='text-4xl font-bold'>{experience.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.desc}</p>
                            <ScrollArea className='h-[400px]'>
                              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                {experience.items.map((items,index) => {
                                  return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                    <span className='text-accent'>{items.duration}</span>
                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{items.position}</h3>
                                    <div className='flex items-center gap-3'>
                                      {/* document */}
                                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                      <p className='text-white/60'>{items.company}</p>
                                    </div>
                                  </li>
                                })}
                              </ul>
                            </ScrollArea>
                          </div>
            </TabsContent>
          {/*education */}
            <TabsContent value='education' className='w-full'>
            <div className='flex flex-col gap-[30px] text-center'>
                            <h3 className='text-4xl font-bold'>{education.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.desc}</p>
                            <ScrollArea className='h-[400px]'>
                              <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                {education.items.map((items,index) => {
                                  return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                    <span className='text-accent'>{items.duration}</span>
                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{items.degree}</h3>
                                    <div className='flex items-center gap-3'>
                                      {/* document */}
                                      <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                      <p className='text-white/60'>{items.institution}</p>
                                    </div>
                                  </li>
                                })}
                              </ul>
                            </ScrollArea>
                          </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value='skills' className='w-full'>
                        <div className='flex flex-col gap-[30px]'>
                          <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{skills.tilte}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.desc}</p>
                          </div>
                          <ul className='grid grid-cols-2 gap-4 sm:gird-cols-3 md:gird-cols-4 xl:gap-[30px]'>
                            {skills.skillList.map((skill,index) => {
                              return <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                      <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icons} </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className='capitalize'>{skill.name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              </li>
                            })}
                          </ul>
                        </div>
            </TabsContent>
            {/* about */}
            <TabsContent value='about' className='w-full text-center xl:text-left'>
                  <div className='flex flex-col gap-[30px] '>
                    <h3 className='text-4xl font-bold'>{about.title}</h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.desc}</p>
                    <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                      {about.info.map((info,index) => {
                        return <li key={index} className='flex justify-center items-center xl:justify-start gap-4'>
                          <span className='text-white/40'>{info.name}</span>
                          <span>{info.fieldValue}</span>
                        </li>
                      })}
                    </ul>
                  </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume