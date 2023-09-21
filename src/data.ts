import star from "./assets/star.png";
import stargray from "./assets/star (1).png";
import purple_bg from "./assets/Purple-Lens-Flare-PNG.png";
import chainSvg from "./assets/chain.svg";
import spikeSvg from "./assets/spike.svg";
import metrix from "./assets/metrix 1.png";
import silver_medal from "./assets/silver_medal 1.png";
import gold_medal from "./assets/gold_medal 1.png";
import bronze_medal from "./assets/bronze_medal 1.png";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

interface Link{
    href?:string,
    label:string
    to?:string,
    className?:string
    type?:'nalink'
}

export const Links:Link[] =[
    {
        href:"/#timeline",
        label:"Timeline"

    },
    {
        href:"/#overview",
        label:"Overview"
    },
    {
        href:"/#faq",
        label:"FAQs"
    },
    {
        to:"contact",
        label:"Contact",
        type:"nalink"
    },
    {
        to:"register",
        className:'register_btn btn',
        label:'Register',
        type:"nalink"
    }
]

interface contact{
    label:string,
    href:string,
    Icon:IconType
}
export const contacts:contact[] = [
    {
        label:"+234 679 81819",
        href:'tel:+234 679 81819',
        Icon:BiSolidPhoneCall,
        
    },{
        label:"27,Alara Street Yaba 100012 Lagos State",
        href:'https://maps.app.goo.gl/rpZhSAXitmunZmvY9',
        Icon:FaLocationDot,
        
    }
]

interface social{
    link:string,
    Icon:IconType
}


export const socials:social[]=[
    {
        link:'https://www.instagram.com/walexz014/',
        Icon:BsInstagram
    },
    {
        link:'https://twitter.com/walexz01',
        Icon:FaXTwitter
    },
    {
        link:'https://web.facebook.com/adewaleoluwaseun.adegbite',
        Icon:FaFacebookF
    },
    {
        link:'https://www.linkedin.com/in/adegbite-adewale-oluwaseun-59691b237',
        Icon:FaLinkedinIn
    }
]

export const policies=[
    {
        text:'The Standard License grants you a non-exclusive right to navigate and register for our event'
    },
    {
        text:"You are licensed to use the item available at any free source sites, for your project developement"
    }
]
interface heroImgs{
    className:string
    img:string
}

export const hero_left_imgs:heroImgs[]= [
    {
        className:"star star1",
        img:star
    },
    {
        className:"star star2",
        img:stargray
    },
    {
        className:"star star3",
        img:stargray
    }
    ,
    {
        className:"purple_left purple_bg",
        img:purple_bg
    }
    
]
export const heroSvg:heroImgs[]=[
    {
        className:'hero_svg',
        img:chainSvg
    },{
        className:'hero_svg',
        img:spikeSvg
    },
]

export const herorightImg:heroImgs[]=[
    {
        className:"purple_right purple_bg",
        img:purple_bg
    },
    {
        className:"metrix",
        img:metrix
    }
]
interface Criteria{
    key:string,
    value:string
}

export const criteria:Criteria[] =[
    {
        key:'Innovation and Creativity',
        value:'Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.'
    },
    {
        key:'Functionality',
        value:'Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.'
    },
    {
        key:'Impact and Relevance',
        value:'Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.'
    },
    {
        key:'Technical Complexity',
        value:'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    },
    {
        key:'Adherence to Hackathon Rules',
        value:'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
    },
]
interface FAQ{
    question:string
    answer:string
}
export const FAQTEXT:FAQ[]=[
    {
        question:'Can I work on a project I started before the hackathon?',
        answer:'Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.'
    },
    {
        question:'What happens if I need help during the hackathon?',
        answer:'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    },
    {
        question:"What happens if I don't have an idea for a project?",
        answer:'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'

    },
    {
        question:"Can I join a team or do I have to come with one?",
        answer:'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    },
    {
        question:"What happens after the hackathon ends",
        answer:'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    },
    {
        question:"Can I work on a project I started before the hackathon?",
        answer:'Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.'
    }
]
interface TimeLine {
    heading: string;
    text: string;
    date: string;
  }
export const TimeLines:TimeLine[]=[
    {
        heading:'Hackathon Announcement',
        text:'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
        date:'November 18, 2023'
    },
    {
        heading:"Teams Registration begins",
        text:"Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
        date:"November 18, 2023"
    },
    {
        heading:"Teams Registration ends",
        text:"Interested Participants are no longer Allowed to register",
        date:"November 18, 2023"
    },
    {
        heading:"Announcement of the accepted teams and ideas",
        text:"All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
        date:"November 18, 2023"
    },
    {
        heading:"Getlinked Hackathon 1.0 Offically Begins",
        text:"Accepted teams can now proceed to build their ground breaking skill driven solutions",
        date:"November 18, 2023"
    },
    {
        heading:"Demo Day",
        text:"Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
        date:"November 18, 2023"
    }
]
interface Position{
    pos:number,
    position:string,
    price:string
    badge:string
}

export const Positions:Position[]=[
    {
        pos:2,
        position:'2nd',
        price:"N300,000",
        badge:silver_medal
    },
    {
        pos:1,
        position:"1st",
        price:"N400,000",
        badge:gold_medal
    },
    {
        pos:3,
        position:"3rd",
        price:"N150,000",
        badge:bronze_medal
    }
]