import React, { useEffect, useRef,useState } from "react";
import "./project.css";
import useOnScreen from "../../utils/onscreen";
import cn from "classnames";
import {gsap} from "gsap";
import SplitText from "../../utils/SplitText.min";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projectsdetails from "../Projectsdetailsfolder/details"
gsap.registerPlugin(ScrollTrigger);

const content = [
	{
		id:"first",
		cardphoto:"../../../static/images/musicController/mccreatepage.png",
		cardphoto1:"../../../static/images/musicController/mchomepage.png",
		cardcolor: "#80BABF",
		bodycolor: "#BF8F65",
		title: "Music Controller",
		subtitle: "This project includes spotify api.This is a backend intensive project.Music Controller requires a lot of knowledge on  API's. ",
		card:"card1",
		content2:"Iam using spotify API to access songs for this page,Spotify premium account is required for the app to run.",
		content:"Music Controller,a web application is used in house party celebrations. A room will be created and a code will be generated for that room.Later that code can be used to join that room.",
	
	},
	{
		id:"second",
		cardphoto:"../../../static/images/portfolio/portblue.png",
		cardphoto1:"../../../static/images/portfolio/protfirst.png",
		cardcolor: "#707070",
		bodycolor: "#80BABF",
		title:"Portfolios",
		subtitle: "Profolio websites a best way to present your projects and your personality.Portfolios that i made have got my clients high paying oppertunities.",
		card:"card2",
		content2:"Your projects will exhibit in a creative manner.",
		content:"I swear you,that your portfolio website will attract highly paying clients.This website has a professional look.There are four different modes in this website. These modes are eyecandy for well paying clients.The art direction in this website is fabulous.",

	},

	{
		id:"third",
		cardphoto:"../../../static/images/ecommerce/ehomepage.png",
		cardphoto1:"../../../static/images/ecommerce/eaddtocartpage.png",
		cardcolor: "#733930",
		bodycolor: "#734F36",
		title: "Ecommerce Websites",
		subtitle: "This was my first Ecommerce website.I have built websites that made the company more than $10000. ",
		card:"card3",
		content2:"This website is a wonderfull website to deliver your product worldwide.This website even has online payment method.",
		content:"This is a fully functioning ecommerce website.This website has all the features that amazon is having. I used cookies to store the data in the websites. ",

	},

];

export default function Project(props) {
	const [reveal,setReveal]=useState(true)

	const projectref=useRef()
	const first=useRef()
	const second=useRef()
	const third=useRef()
	const cardsref=useRef()
	const myScreen=useOnScreen(projectref)
	function show(){
		props.callback({hellow:"the project content"})
		console.log("show function")
	}
	useEffect(()=>{
		if (myScreen){
			setReveal(myScreen)
			}
			
	},[myScreen])
	useEffect(()=>{
		setTimeout(()=>{
		let project=document.getElementById("first")
		let project2=document.getElementById("second")
		let project3=document.getElementById("third")
		let allprojects=[project,project2,project3]
		let card=gsap.utils.toArray(".cards")
		const card1=gsap.utils.toArray(".second")
		console.log(card1)
		console.log(project.getElementsByClassName("card"))
		console.log("thecontent",projectref.current)
		for (var i = allprojects.length - 1; i >= 0; i--) {
			console.log(allprojects[i])
			  gsap.to(allprojects[i],{
      	   scrollTrigger:{
           start: "top 11%",
           trigger:allprojects[i],
           scroller:"#Main",
           scrub:0.5,
           end: "top -15%",
              
       },

      borderTopRightRadius: "0%",
      borderTopLeftRadius: "0%",
      
      ease:"none",
      
  })
	 gsap.to(allprojects[i].getElementsByClassName("cards"),{
      	   scrollTrigger:{
           start: "top 108%",
           trigger:allprojects[i],
           scroller:"#Main",
           scrub:0.2,
           end: "top 50%",
              
       },

 	transform:"translateY(-16em) ",


      
      ease:"none",
      
  })
		}

		
		
		 
 
 
 
  ScrollTrigger.refresh();})

	},)

	return (
		<div className="projectt"  data-scroll-section>
		
			<div  className="project">
				<div style={{ marginTop: "26em" }}>
					{content.map((i, index) => (
						<section className="projectswrapper">
							<div id={`${i.id}`}
							ref={projectref} 
								className="projects" 
								style={{ backgroundColor:`${i.bodycolor}` }}
							>
								<div  className="hoverr"></div>
								<div ref={cardsref} onClick={()=>{ window.open( `/home/detail/${i.card}` , "_blank") }} id={`${i.card}`} className="cards">
									<div
										
										className="card first"
										style={{
											backgroundColor: `${i.cardcolor}`,
										}}
									><img src={i.cardphoto} /></div>
									<div
										className="card second"
										style={{
											backgroundColor: `${i.cardcolor}`,
										}}
									><img src={i.cardphoto1} /></div>
								</div>
								<div  className="contentwrapper">
									<div className="title">{i.title}</div>
									<div className="subtitle">{i.subtitle}</div>
								</div>
							</div>
						</section>
					))}
				</div>
				<div className="overlay"></div>
				<div className="contentstart">
					<div className="contentbar"></div>
				</div>
			</div>
		</div>
	);
}
