"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Check, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

export default function BathSecond() {
  const [activeTab, setActiveTab] = useState('bathroom')

  const services = {
    bathroom: [
      { title: 'Luxury Shower Installation', image: '/barthrooms/bath1.heic', description: 'Transform your bathroom with our state-of-the-art shower systems.' },
      { title: 'Custom Vanity Design', image: '/barthrooms/k&b.jpg', description: 'Tailor-made vanities that combine style and functionality.' },
      { title: 'Tile and Flooring', image: '/barthrooms/bb3.jpg', description: 'Premium materials and expert installation for stunning floors.' },
    ],
    kitchen: [
      { title: 'Gourmet Kitchen Layouts', image: '/kitchenr/k5.jpeg', description: 'Optimize your kitchen space for the ultimate cooking experience.' },
      { title: 'Custom Cabinetry', image: '/kitchenr/kitchen-remodeling1.jpg', description: 'Handcrafted cabinets designed to your exact specifications.' },
      { title: 'Smart Appliance Integration', image: '/kitchenr/kitchen-remodeling3.jpg', description: 'Seamlessly incorporate the latest in kitchen technology.' },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
     <main className="container mx-auto px-4 py-12">
         <section className="mb-16">
      <h2 className="text-3xl md:text-center md:py-[2rem] font-semibold text-gray-800 mb-6">Our World-Class Remodeling Services</h2>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bathroom">Bathroom Remodeling</TabsTrigger>
          <TabsTrigger value="kitchen">Kitchen Remodeling</TabsTrigger>
        </TabsList>
        <TabsContent value="bathroom" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {services.bathroom.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p>{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="kitchen" className="mt-6">
          <div className="grid gap-6 md:grid-cols-3">
            {services.kitchen.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={service.image}
                      alt={service.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <p>{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-400 mr-2" />
                  Unparalleled Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our team of master craftsmen brings decades of experience to every project.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Check className="w-6 h-6 text-green-500 mr-2" />
                  Premium Materials
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>We source only the finest materials to ensure lasting quality and beauty.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ArrowRight className="w-6 h-6 text-blue-500 mr-2" />
                  Innovative Designs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Stay ahead of the curve with our cutting-edge design concepts and technology integration.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Process</h2>
          <div className="space-y-4">
            {['Consultation', 'Design', 'Material Selection', 'Construction', 'Final Walkthrough'].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-4 bg-white rounded-lg shadow-md"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step}</h3>
                  <p className="text-gray-600">We ensure every detail is perfect at each stage.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

       
      </main>

     
    </div>
  )
}