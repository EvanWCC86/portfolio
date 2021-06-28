import {AiOutlineHome,AiOutlineProject,AiOutlineContacts} from 'react-icons/ai'

import {GiSkills} from 'react-icons/gi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
export const navbarData = [
    {
        name:"home",
        url:"/",
        icon:<AiOutlineHome />
    },
    {
        name:"about",
        url:"/about",
        icon:<BsFillPersonLinesFill />,
    },
    {
        name:"projects",
        url:"/projects",
        icon:<AiOutlineProject />
    },
    {
        name:"skills",
        url:"/skills",
        icon:<GiSkills />
    },
    {
        name:"contact",
        url:"/contact",
        icon:<AiOutlineContacts />
    },
]