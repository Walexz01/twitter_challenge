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