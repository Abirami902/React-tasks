import React from 'react'
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Big from './Big';
// import watch from './watch.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import { IoIosPaper } from 'react-icons/io';

export const App = () => {

let datas=[
    {
    heading:'FINANCE',
    body:'Unmatched Toner Catridge Quality 20 Less Than Oem Price',
    description:'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
    img:"https://cdn.pixabay.com/photo/2015/06/25/17/21/smart-watch-821557_1280.jpg",
    icon:'fa-solid fa-share',
    iconvalue1:'275',
    width:'widthcard',
    heightss:'heightCardss',
    text:'text1',
    circleImg:'d-none',
    circleImgs:'d-none',
    icons:'fa-solid fa-eye',
    iconvalue2:'275',
    iconss:'fa-solid fa-message',
    iconvalue3:'12',

    
}, 
{
  heading:'FINANCE',
  body:'LAS VEGAS HOW TO HAVE NON GAMBLING RELATED FUN',
  description:'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.The truth is the universe is a constantly changing,moving. text-white',
  icon:'fa-solid fa-share',
  iconvalue1:'275',
  width:'widthcard',
  heightss:'heightCardss',
  color:'bg-danger text-white',
  text:'text-white',
  circleImg:'d-none',
  circleImgs:'d-none',
  icons:'fa-solid fa-eye',
  iconvalue2:'275',
  iconss:'fa-solid fa-message',
  iconvalue3:'12',
  pic:<IoIosPaper />,
  iconpos:'pDown'
}, 
{
  heading:'VIDEO',
  body:'Unmatched Toner Catridge Quality 20 Less Than Oem Price',
  description:'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
  img:"https://wieck-mbusa-production.s3.amazonaws.com/photos/a43d47fe6866a35321a405a8a2656ceaabd3b853/preview-928x522.jpg",
  icon:'fa-solid fa-share',
  iconvalue1:'275',
  width:'widthcard',
  heightss:'heightCardss',
  vedio:"fa-solid fa-play  ",
  circleImg:'d-none',
  circleImgs:'d-none',
  icons:'fa-solid fa-eye',
  iconvalue2:'275',
  iconss:'fa-solid fa-message',
  iconvalue3:'12'
}, 
{
  heading:'FINANCE',
  body:'Unmatched Toner Catridge Quality 20 Less Than Oem Price',
  description:'May 15, 2018',
  des:'Author',
  desc:'KINGA CICHEWICZ',
  height:'heightCard',
  width:'widthcard',
  simg:"grid3.jpg",
  circleImgs:'d-none'

}, 
{
heading:'FINANCE',
body:'Unmatched Toner Catridge Quality 20 Less Than Oem Price',
description:'May 15, 2018',
des:'Author',
desc:'KINGA CICHEWICZ',
height:'heightCard',
width:'widthcard',
simg:"grid4.jpg",
circleImgs:'d-none'
}, 
{
heading:'FINANCE',
body:'Unmatched Toner Catridge Quality 20 Less Than Oem Price',
description:'May 15, 2018',
des:'Author',
desc:'KINGA CICHEWICZ',
height:'heightCard',
width:'widthcard',
simg:"grid5.jpg",
circleImgs:'d-none'
}, 
{
 
  body:'Search Engine Optimization And Advertising',
  description:'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
  img:"watch1.jpg",
  rimg:"grid2.jpg",
  heights:'heightCards',
  width:'widthcard',
  circleImg:'d-none',
  grid:'image'


}
,{
  heading:'LEADERSHIP',
  body:'Unmatched Toner Catridge Quality 20 Less Than Oem Price',
  description:'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
  icon:'fa-solid fa-share',
  iconvalue1:'275',
  heights:'heightCards',
  width:'widthcard',
  circleImg:'d-none',
  circleImgs:'d-none',
  icons:'fa-solid fa-eye',
  iconvalue2:'275',
  iconss:'fa-solid fa-message',
  iconvalue3:'12'
}, 
{
heading:'LEADERSHIP',
body:'Unmatched Toner Catridge Quality 20 Less Than Oem Price',
description:'There is a lot of exciting stuff going on in the stars above us that make astronomy so much fun.',
icon:'fa-solid fa-share',
iconvalue1:'275',
heights:'heightCards',
width:'widthcard',
circleImg:'d-none',
circleImgs:'d-none',
icons:'fa-solid fa-eye',
iconvalue2:'275',
iconss:'fa-solid fa-message',
iconvalue3:'12'}, 
]

  return (
    <>
    <Nav/>
    <div className='d-flex flex-wrap gap-4 justify-content-center m-auto' style={{width:'70%'}}>
 {datas.map((item)=>(
    <>
    <Big vedio={item.vedio} icons={item.icons}  iconss={item.iconss}  icon={item.icon} iconvalue1={item.iconvalue1} heading={item.heading} body={item.body} img={item.img} 
    rimg={item.rimg} description={item.description} des={item.des} desc={item.desc} height={item.height} heights={item.heights}  width={item.width}
    heightss={item.heightss}  color={item.color}  text={item.text} pic={item.pic} iconvalue2={item.iconvalue2} iconvalue3={item.iconvalue3}
    simg={item.simg} circleImg={item.circleImg} circleImgs={item.circleImgs}  grid={item.grid}    class={item.class}/>
    </>
))}
</div>  <Footer/>
    </>
  )
}

export default App;
