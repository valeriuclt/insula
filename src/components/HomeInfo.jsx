import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

// const HomeInfo = ({ currentStage }) => {
//   if (currentStage === 1)
//     return (
//       <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
//         Hi, I'm
//         <span className='font-semibold mx-2 text-white'>Adrian</span>
//         👋
//         <br />
//         A Software Engineer from Croatia 🇭🇷
//       </h1>
//     );

//   if (currentStage === 2) {
//     return (
//       <div className='info-box'>
//         <p className='font-medium sm:text-xl text-center'>
//           Worked with many companies <br /> and picked up many skills along the way
//         </p>

//         <Link to='/about' className='neo-brutalism-white neo-btn'>
//           Learn more
//           <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
//         </Link>
//       </div>
//     );
//   }

//   if (currentStage === 3) {
//     return (
//       <div className='info-box'>
//         <p className='font-medium text-center sm:text-xl'>
//           Led multiple projects to success over the years. <br /> Curious about the impact?
//         </p>

//         <Link to='/projects' className='neo-brutalism-white neo-btn'>
//           Visit my portfolio
//           <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
//         </Link>
//       </div>
//     );
//   }

//   if (currentStage === 4) {
//     return (
//       <div className='info-box'>
//       <p className='font-medium sm:text-xl text-center'>
//         Need a project done or looking for a dev? <br/> I'm just a few keystrokes away
//       </p>

//       <Link to='/contact' className='neo-brutalism-white neo-btn'>
//         Let's talk
//         <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
//       </Link>
//     </div>
//     );
//   }
//   return null;
// };

const InfoBox =({text,link, btnText})=>(
    <div className="info-box">
       <p className='font-medium text-center sm:text-xl'> {text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
        </div>
)

const renderContent ={
    1:(<h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm<span className='font-semibold mx-2 text-white'>Valeriu</span>👋 <br />
             and i hope you like this site 
    </h1>),
    2:(<InfoBox 
    text="  Worked with many companies  and picked up many skills along the way"
    link="/about"
    btnText="vezi mai mult"
    />),
    3:(<InfoBox 
    text=" I have multiple projects over the years. R U Curious ?"
    link="/projects"
    btnText="vezi protofoliul"
    />),
    4:(<InfoBox 
    text="  You need a project done or looking for a dev?  I'm just a few keystrokes away"
    link="/contact"
    btnText="Let's talk!"
    />),
    
}

const HomeInfo =({currentStage})=>{
    return renderContent[currentStage]||null;
}
export default HomeInfo;