import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    {icon:<FaGithub />, path:'https://github.com/mlgonzaga'},
    {icon:<FaLinkedinIn />, path:'https://www.linkedin.com/in/mateus-luiz-gonzaga/'},
   // {icon:<FaYoutube />, path:''},
    //{icon:<FaTwitter />, path:''},
]
const Socials = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
            {socials.map((item, index)=> {
                return <Link key={index} href={item.path} target="_blank" className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
   
}

export default Socials;
