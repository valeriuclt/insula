import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA  from "../components/CTA";
import { experiences, skills } from "../constants";

import { Download, Send } from "lucide-react"
import "react-vertical-timeline-component/style.min.css";
import { NavLink } from "react-router-dom";
import Socials from "../components/Socials";
import Badge from "../components/Badge";
import DevImg from "../components/DevImg";
import { RiArrowDownSLine } from "react-icons/ri";

// import Hero from "../components/Hero";

const About = () => {
  return (
    <section className='max-container'>
      {/* <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
          Valeriu
        </span>{" "}
        👋
      </h1> */}

      {/* <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          i specialize in crafting intuitive website with cutting-edge technology delivering dynamic and engaging user experience
        </p>
      </div> */}
{/* Hero  */}
      <div className="container mx-auto">
                <div className="flex justify-between gap-x-8" >
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]" >Web Developer</div>
                        <h1 className="h1 mb-4">Hello, my name is Valeriu </h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0"> A brief description with insights about myself, my work and what is representative in my profesional work</p>

                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                            <NavLink >
                                <button className='gap-x-2'>Contact me
                                 <Send size={18} />
                                 </button>
                            </NavLink>
                            <button variant='secondary' className='gap-x-2'>Download CV 
                            <Download size={18} />
                            </button>
                        </div>
                        {/* socials  */}
                        <Socials
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                    </div>

                    {/* Image  */}
                    <div className="hidden xl:flex relative" >
                    <DevImg
                            containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
                            imgSrc='/hero/developer.png' />
                    
                        {/* badge1 */}
                        <Badge
                            containerStyles='absolute top-[24%] -left-[5rem]'
                            // icon={<RiBriefcase4Fill />}
                            endCountNum={3}
                            badgeText='years of experience' />
                        {/* badge 2 */}
                        <Badge
                            containerStyles='absolute top-[80%] -left-[1rem]'
                            // icon={<RiTodoFill />}
                            endCountNum={6}
                            endCountText='k'
                            badgeText='finished projects' />
                        {/* badge3 */}
                        <Badge
                            containerStyles='absolute top-[55%] -right-8'
                            // icon={<RiTeamFill />}
                            endCountNum={9}
                            endCountText='k'
                            badgeText='happy clients' />
                        <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
                      
                    </div>
                </div>
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>

<div className="">
  {/* <AboutMe /> */}
</div>

{/* skill  */}
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
{/* experience  */}
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I've worked with all sorts of clients, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />  
    </section>
  );
};

export default About;