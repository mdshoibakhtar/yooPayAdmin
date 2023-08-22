import { ImHome } from 'react-icons/im';
import { PiUsersThreeLight } from 'react-icons/pi';
import { FcDoughnutChart } from 'react-icons/fc';
import { CiWallet ,CiSquareCheck} from 'react-icons/ci';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { MdOutlineInsertChartOutlined } from 'react-icons/md';
export const asideMenu = {
    menuTitle:"YOUR COMPANY",
    menuList:[
        {id:"1",menuName:"Dashboard",path:"/dashboard",changeState:"dashboard",icon:<ImHome/>},
        {
            id:"2",menuName:"Users",path:"/users-lists",changeState:"users",icon:<PiUsersThreeLight/>,
            subMenu:[
                {id:"3",menuName:"User List",path:"/dashboard"},
                {id:"4",menuName:"Edit User",path:"/dashboard"},
                {id:"5",menuName:"Manage Use Wallet",path:"/dashboard"},
                {id:"6",menuName:"Use Wise API Switch",path:"/dashboard"},
            ]
        },
        
        
        {id:"7",menuName:"Direct Child List",path:"/dashboard",icon:<FcDoughnutChart/>},
        {id:"9",menuName:"Wallet Requests",path:"/dashboard",icon:<CiWallet/>},
        {id:"10",menuName:"Manage Operators+BackUP API",path:"/dashboard",icon:<BiMessageSquareEdit/>},
        {id:"6",menuName:"Circle Wise API Switch",path:"/dashboard",icon:<CiSquareCheck/>},
        {id:"8",menuName:"Denominations",path:"/dashboard",icon:<MdOutlineInsertChartOutlined/>,
        subMenu:[
            {id:"9",menuName:"Denomination Wise API Switch	",path:"/dashboard"},
        {id:"10",menuName:"Denomination Range Wise API Switch",path:"/dashboard"},
        ]
    },
        
        // {id:"11",menuName:"Operator API Switch",path:"/dashboard",icon:""},
        // {
        //     id:"12",menuName:"Schemes",path:"",icon:"",
        //     subMenu:[
        //         {id:"12",menuName:"Create Commission Scheme",path:""},
        //         {id:"13",menuName:"Manage Commission Scheme",path:""},
        //         {id:"14",menuName:"DMT Commission Scheme",path:""},
        //         {id:"15",menuName:"AEPS Commission Scheme",path:""},
        //         {id:"16",menuName:"Payout Commission Scheme",path:""},
        //     ]
        // },
        // {id:"13",menuName:"System Settings",path:"/dashboard",icon:""},
        // {id:"11",menuName:"Operator API Switch",path:"/dashboard",icon:""},
        // {
        //     id:"14",menuName:"Amounts",path:"",icon:"",
        //     subMenu:[
        //         {id:"39",menuName:"Amount Master",path:""},
        //         {id:"40",menuName:"Amount Range Masters",path:""},
                
        //     ]
        // },
        // {
        //     id:"15",menuName:"Send Master",path:"",icon:"",
        //     subMenu:[
        //         {id:"39",menuName:"Send Massage",path:""},
        //         {id:"40",menuName:"Send Email",path:""},
        //         {id:"40",menuName:"Send Notifications",path:""},
                
        //     ]
        // },
        /* {id:"15",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"16",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"17",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"18",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"19",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"20",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"21",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"22",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"23",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"24",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"25",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"26",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"27",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"28",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"29",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"30",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"31",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"32",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"33",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"34",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"35",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"36",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"37",menuName:"Dashboard",path:"/dashboard",icon:""},
        {id:"38",menuName:"Dashboard",path:"/dashboard",icon:""}, */
    ]
}