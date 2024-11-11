import Navbar from "../components/ui/Navbar";
import BathSecond from "./bath-second";
import BathroomHero from "./home-hero";
import PortFolio from "./portfollio";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "../components/ui/footer";
import SecondTestimonials from "../pressure-washing/second-testimonials";
import ContactButtons from "../components/ui/contact-bottons";

export default function Home() {
    return (
        <div>
            <Navbar />
            <BathroomHero />
            <BathSecond />
            <PortFolio />



            <SecondTestimonials />

            <section className="px-[2rem] md:px-[5rem]">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ready to Transform Your Space?</h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Schedule Your Free Consultation</CardTitle>
                        <CardDescription>Take the first step towards your dream home.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 border rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 border rounded-md"
                            />
                            <textarea
                                placeholder="Tell us about your project"
                                className="w-full p-2 border rounded-md"
                                rows={4}
                            ></textarea>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Get Started</Button>
                    </CardFooter>
                </Card>
            </section>


            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-[20px]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What types of industries does Modern Builder serve?</AccordionTrigger>
                            <AccordionContent>
                                Modern Builder serves a wide range of industries, including but not limited to manufacturing, energy, construction, infrastructure, telecommunications, and transportation. Our diverse expertise allows us to tackle complex engineering challenges across various sectors.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How does Modern Builder integrate sustainability into its projects?</AccordionTrigger>
                            <AccordionContent>
                                Sustainability is a core principle in all our projects.
                                 We incorporate energy-efficient designs, use
                                  eco-friendly materials when possible, and
                                   optimize systems to reduce resource consumption.
                                    Our team stays updated on the latest green
                                     technologies and sustainable practices to 
                                     ensure we&apos;re always offering the most 
                                     environmentally responsible solutions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Can Modern Builder handle both design and 
                                implementation of engineering projects?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we offer end-to-end engineering services. Our team can
                                 handle every phase of a project, from initial concept and design 
                                 to implementation, testing, and ongoing maintenance. This comprehensive
                                  approach ensures seamless project execution and allows us to maintain
                                   high quality standards throughout the entire process.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>What sets Modern Builder apart from other engineering firms?</AccordionTrigger>
                            <AccordionContent>
                                Modern Builder stands out due to our innovative approach,
                                 multidisciplinary expertise, and commitment to sustainability.
                                  We combine cutting-edge technology with creative problem-solving 
                                  to deliver unique solutions. Our team&apos;s diverse skills in both 
                                  electrical and mechanical engineering allow us to tackle complex, 
                                  integrated projects that other firms might struggle with.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Does Modern Builder offer consulting services?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we provide expert consulting services in both 
                                electrical and mechanical engineering. Our consultants can assist with project 
                                planning, feasibility studies, system optimization,
                                 and technical audits. We work closely with clients
                                  to understand their needs and provide tailored
                                   advice to help them make informed decisions and achieve their goals.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
<ContactButtons/>
            <Footer />

        </div>
    );
}