import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {  CheckCircle,  Eye, Target,  Palette, Brush, Ruler } from "lucide-react"
import Navbar from "../components/ui/Navbar"
import Image from "next/image"
import Footer from "../components/ui/footer"

export default function KingdomPaintingLandingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                    <div className="absolute inset-0 overflow-hidden ">
                        <Image
                            src="/painting/exterior-painting.jpg"
                            alt="Roof cleaning in action"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-30"
                        />
                    </div>
                    <div className="container mx-auto pt-[5rem] px-4 text-center relative z-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Transform Your Space with Kingdom Painting</h1>
                        <p className="text-xl mb-8">Professional Interior and Exterior Painting Services</p>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                            Get a Free Quote
                        </Button>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">About Kingdom Painting</h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-lg text-gray-700 mb-6">
                                    At Kingdom Painting, we believe that a fresh coat of paint can truly transform your living or working space. With years of experience and a passion for perfection, our team of skilled painters is dedicated to bringing your vision to life.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    We take pride in our attention to detail, use of premium materials, and commitment to customer satisfaction. Whether you&#39;re looking to refresh your home&#39;s interior or give your business a new look, Kingdom Painting is here to exceed your expectations.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span className="text-gray-700">Licensed & Insured</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span className="text-gray-700">Eco-friendly Options</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="h-5 w-5 text-green-500" />
                                        <span className="text-gray-700">5-Year Warranty</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative h-full">
                                <Image
                                    src="/painting/paint2.jpg"
                                    alt="Roof cleaning in action"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision and Mission Section */}
                <section id="vision-mission" className="py-20 rounded-md bg-blue-600 text-white mx-[2rem] md:mx-[4rem]">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="text-center">
                                <Eye className="h-16 w-16 mx-auto mb-4" />
                                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                                <p className="text-lg">
                                    To be the most trusted and innovative painting company, transforming spaces and elevating the standard of beauty in every community we serve.
                                </p>
                            </div>
                            <div className="text-center">
                                <Target className="h-16 w-16 mx-auto mb-4" />
                                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                                <p className="text-lg">
                                    To deliver exceptional painting services that inspire and delight our clients, while fostering a culture of creativity, integrity, and environmental responsibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Interior Painting */}
                            <Card className="overflow-hidden">
                               
                                <CardContent className="p-6">
                                <div className="relative aspect-video">
                                    <Image
                                        src="/painting/interiorpainting4.jpg"
                                        alt="Interior painting"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                </div>
                                    <h3 className="text-2x pt-4 font-semibold mb-4">Interior Painting</h3>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                            <span>Walls, ceilings, and trim</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                            <span>Color consultation and matching</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                            <span>Texture and faux finish options</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                            <span>Cabinet painting and refinishing</span>
                                        </li>
                                    </ul>
                                    <p className="text-gray-700 mb-6">
                                        Our interior painting services are designed to breathe new life into your home or office. We use low-VOC paints for a healthier environment and offer a wide range of finishes to suit your style.
                                    </p>
                               
                                </CardContent>
                            </Card>

                            {/* Exterior Painting */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="relative aspect-video">
                                        <Image
                                            src="/painting/townhousepaint.jpg"
                                            alt="Interior painting"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-md"
                                        />
                                    </div>

                                    <h3 className="text-2xl  pt-4 font-semibold mb-4">Exterior Painting</h3>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>House siding and trim</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Deck and fence staining</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Pressure washing services</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Weather-resistant coatings</span>
                                        </li>
                                    </ul>
                                    <p className="text-gray-700 mb-6">
                                        Protect and beautify your home&#39;s exterior with our professional painting services. We use durable, weather-resistant paints to ensure a long-lasting finish that stands up to the elements.
                                    </p>
                                   
                                </CardContent>
                            </Card>

                            {/* Commercial Painting */}
                            <Card>
                                <CardContent className="p-6">
                                <div className="relative aspect-video">
                                    <Image
                                        src="/painting/townhousepaint3.jpg"
                                        alt="Interior painting"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                </div>
                                   
                                    <h3 className="text-2xl pt-4 font-semibold mb-4">Commercial Painting</h3>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Office spaces and retail stores</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Warehouses and industrial facilities</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Hotels and restaurants</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Epoxy floor coatings</span>
                                        </li>
                                    </ul>
                                    <p className="text-gray-700 mb-6">
                                        Our commercial painting services are tailored to meet the unique needs of businesses. We work efficiently to minimize disruption and deliver a professional finish that enhances your brand image.
                                    </p>
                                 
                                </CardContent>
                            </Card>

                            {/* Specialty Finishes */}
                            <Card>
                                <CardContent className="p-6">
                                <div className="relative aspect-video">
                                    <Image
                                        src="/painting/painting5.jpg"
                                        alt="Interior painting"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                </div>
                                  
                                    <h3 className="text-2xl pt-4 font-semibold mb-4">Specialty Finishes</h3>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Faux finishes and textures</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Murals and custom designs</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Metallic and pearlescent finishes</span>
                                        </li>
                                        <li className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                                            <span>Venetian plaster</span>
                                        </li>
                                    </ul>
                                    <p className="text-gray-700 mb-6">
                                        Elevate your space with our specialty finishes. Our skilled artisans can create unique textures and effects that add depth, character, and luxury to your walls.
                                    </p>
                                   
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Creative Color Selection Tool */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Visualize Your Perfect Color</h2>
                        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Choose Your Colors</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="wall-color" className="block text-sm font-medium text-gray-700 mb-1">Wall Color</label>
                                            <input type="color" id="wall-color" className="w-full h-10 rounded border-gray-300" />
                                        </div>
                                        <div>
                                            <label htmlFor="trim-color" className="block text-sm font-medium text-gray-700 mb-1">Trim Color</label>
                                            <input type="color" id="trim-color" className="w-full h-10 rounded border-gray-300" />
                                        </div>
                                        <div>
                                            <label htmlFor="accent-color" className="block text-sm font-medium text-gray-700 mb-1">Accent Color</label>
                                            <input type="color" id="accent-color" className="w-full h-10 rounded border-gray-300" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Preview</h3>
                                    <div className="bg-gray-200 h-64 rounded-lg shadow-inner overflow-hidden">
                                        {/* This would be replaced with an actual interactive preview */}
                                        <div className="h-full flex items-center justify-center text-gray-500">
                                            Color preview would render here
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 text-center">
                                <Button>Save Your Color Scheme</Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Painting Process</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                                    <Palette className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">1. Consultation</h3>
                                <p className="text-gray-700">We discuss your vision and provide expert color advice.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                                    <Ruler className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">2. Preparation</h3>
                                <p className="text-gray-700">We carefully prepare the surfaces to ensure a flawless finish.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                                    <Brush className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">3. Painting</h3>
                                <p className="text-gray-700">Our skilled team applies paint with precision and care.</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                                    <CheckCircle className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">4. Final Inspection</h3>
                                <p className="text-gray-700">We ensure every detail meets our high standards.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card>
                                <CardContent className="p-6">
                                    <p className="text-gray-700 mb-4">
                                    &#34;Kingdom Painting transformed our home! Their attention to detail and professionalism were outstanding. We couldn&#39;t be happier with the results.&#34;
                                    </p>
                                    <div className="flex items-center">
                                        <img
                                            src="/placeholder.svg?height=40&width=40"
                                            alt="Client"
                                            className="rounded-full mr-4"
                                        />
                                        <div>
                                            <p className="font-semibold">Sarah Johnson</p>
                                            <p className="text-sm text-gray-500">Homeowner</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <p className="text-gray-700 mb-4">
                                    &#34;We hired Kingdom Painting for our office renovation, and they exceeded our expectations. The team was efficient, clean, and the end result is fantastic!&#34;
                                    </p>
                                    <div className="flex items-center">
                                        <img
                                            src="/placeholder.svg?height=40&width=40"
                                            alt="Client"
                                            className="rounded-full mr-4"
                                        />
                                        <div>
                                            <p className="font-semibold">Mark Thompson</p>
                                            <p className="text-sm text-gray-500">Business Owner</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="p-6">
                                    <p className="text-gray-700 mb-4">
                                    &#34;The specialty finish Kingdom Painting created for our restaurant adds so much character. It&#39;s become a talking point for our customers!&#34;
                                    </p>
                                    <div className="flex items-center">
                                        <img
                                            src="/placeholder.svg?height=40&width=40"
                                            alt="Client"
                                            className="rounded-full mr-4"
                                        />
                                        <div>
                                            <p className="font-semibold">Emily Chen</p>
                                            <p className="text-sm text-gray-500">Restaurant Owner</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section id="contact" className="py-20 bg-blue-600 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Get Your Free Quote Today</h2>
                        <div className="max-w-2xl mx-auto">
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <Input type="text" placeholder="Your Name" className="bg-white text-gray-900" />
                                    <Input type="email" placeholder="Your Email" className="bg-white text-gray-900" />
                                </div>
                                <Input type="tel" placeholder="Your Phone" className="bg-white text-gray-900" />
                                <Textarea placeholder="Tell us about your project" className="bg-white text-gray-900" />
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" id="consent" className="rounded text-blue-600" />
                                    <label htmlFor="consent" className="text-sm">I agree to receive communications from Kingdom Painting</label>
                                </div>
                                <Button type="submit" size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                                    Request a Quote
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
<Footer/>
        </div>
    );
}
