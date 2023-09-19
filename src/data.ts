import star from "./assets/star.png";
import stargray from "./assets/star (1).png";
import purple_bg from "./assets/Purple-Lens-Flare-PNG.png";
import chainSvg from "./assets/chain.svg";
import spikeSvg from "./assets/spike.svg";
import metrix from "./assets/metrix 1.png";


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
