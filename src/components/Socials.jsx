'use client'

// import Link from "next/link"
import { RiYoutubeFill,RiLinkedinFill, RiGithubFill,RiFacebookFill,RiInstagramFill } from "react-icons/ri"
import { NavLink } from "react-router-dom";

const icons =[
  {path:'/', name:<RiYoutubeFill />},
  {path:'/', name:<RiLinkedinFill />},
  {path:'/', name:<RiGithubFill />},
  {path:'/', name:<RiFacebookFill />},
  {path:'/', name:<RiInstagramFill />},
];

const Socials = ({containerStyles,iconsStyles}) => {
  return (
    <div className={`${containerStyles}`} >
      {icons.map((icon,index)=>{
        return(
        <NavLink to={icon.path} key={index}>
           <div className={`${iconsStyles}`}>{icon.name}</div>
        </ NavLink >
        );
      })}
    </div>
  )
}
export default Socials