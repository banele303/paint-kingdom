"use client"

import ContactButtons from "../components/ui/contact-bottons"
import ContactForm from "../components/ui/contact-us"
import Footer from "../components/ui/footer"
import FRQ from "../components/ui/FRQ"
import Navbar from "../components/ui/Navbar"
import AboutHero from "./about-hero"
import AboutUs from "./about-us-main"

export default function Home (){
    return(
        <div>
<Navbar/>
<AboutHero/>
<AboutUs/>
<ContactForm/>
<FRQ/>
<ContactButtons/>
<Footer/>

        </div>

    )
}