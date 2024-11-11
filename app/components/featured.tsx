
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import ContactButtons from './ui/contact-bottons'





export default function Featured() {


  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}

      <ContactButtons />
      {/* <section className="relative  text-white">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/mechanical/pipes.jpg"
              alt="Engineering background"
              layout="fill"
              objectFit="cover"
              className="brightness-40" // Adjust brightness to a lower value
              priority
            /> */}
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}

      {/* Content on top of the image */}

      {/* </div>
        </div>
        <div className="relative container mx-auto px-4 py-24 sm:py-32  z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Powering the Future with MALUNJWA Engineering
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Innovative solutions in Electrical and Mechanical Engineering
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
            Explore Our Services
          </Button>
        </div>
      </section> */}

      {/* About Us Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 py-4 opacity-90"> Engineering Services</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[17px] mb-4 opacity-90">
                MODERN RENOVATOR is a leading engineering firm specializing in cutting-edge electrical and mechanical solutions. With decades of experience and a team of highly skilled engineers, we tackle complex challenges and deliver innovative results.
              </p>
              <p className="text-[17px] mb-4 opacity-90">
                Our commitment to excellence, sustainability, and client satisfaction sets us apart in the industry. We leverage the latest technologies and methodologies to ensure that every project we undertake is completed to the highest standards.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>50+</CardTitle>
                  <CardDescription>Years of Experience</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>1000+</CardTitle>
                  <CardDescription>Projects Completed</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>200+</CardTitle>
                  <CardDescription>Expert Engineers</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>30+</CardTitle>
                  <CardDescription>Countries Served</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Engineering Services</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger value="electrical" >Electrical Engineering</TabsTrigger>
              <TabsTrigger value="mechanical">Mechanical Engineering</TabsTrigger>
            </TabsList>
            <TabsContent value="electrical">
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <Zap className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Power Systems Design</CardTitle>
                    <CardDescription>Efficient and reliable power distribution solutions</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Cpu className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Control Systems</CardTitle>
                    <CardDescription>Advanced automation and process control</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Lightbulb className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Lighting Design</CardTitle>
                    <CardDescription>Energy-efficient and aesthetic lighting solutions</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Shield className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Electrical Protection</CardTitle>
                    <CardDescription>Safeguarding systems against electrical faults</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Activity className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Energy Management</CardTitle>
                    <CardDescription>Optimizing energy usage and efficiency</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Wifi className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Telecommunications</CardTitle>
                    <CardDescription>Design and implementation of communication networks</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="mechanical">
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <Card>
                  <CardHeader>
                    <Cog className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Machine Design</CardTitle>
                    <CardDescription>Custom machinery for various industries</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Thermometer className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>HVAC Systems</CardTitle>
                    <CardDescription>Efficient heating, ventilation, and air conditioning</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Wrench className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Maintenance & Repair</CardTitle>
                    <CardDescription>Comprehensive equipment care and optimization</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Droplet className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Fluid Systems</CardTitle>
                    <CardDescription>Design and optimization of hydraulic and pneumatic systems</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Truck className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Material Handling</CardTitle>
                    <CardDescription>Efficient systems for moving and storing materials</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <Maximize className="w-8 h-8 mb-2 text-blue-600" />
                    <CardTitle>Structural Analysis</CardTitle>
                    <CardDescription>Ensuring integrity and safety of mechanical structures</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section> */}

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our  Approach</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovative Solutions</h3>
              <p className="mb-4">
                At PAINT KINGDOM, we believe in pushing the boundaries of what&apos;s possible. 
                Our team of expert  combines cutting-edge technology with creative problem-solving
                 to deliver innovative solutions that meet and exceed our clients expectations.
              </p>
              <p>
                We stay at the forefront of industry trends and continuously 
                invest in research and development to bring the latest advancements to our projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Sustainable </h3>
              <p className="mb-4">
                Sustainability is at the core of our engineering
                 philosophy. We design with the future in mind,
                  incorporating eco-friendly practices and
                   energy-efficient solutions into all our projects.
              </p>
              <p>
                Our commitment to sustainable engineering not 
                only benefits the environment but also provides 
                long-term cost savings and improved performance for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Painting</CardTitle>

              </CardHeader>
              <CardContent>
                <Image src="/painting/interior-painting.jpg" alt="HVAC System" width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
                <p className='pt-4'>Our general building 
                  services are designed to meet all your 
                  construction and renovation needs.  From 
                  foundations to finishes, we ensure 
                  high-quality craftsmanship, timely 
                  delivery, and attention to detail at every step of the process.</p>

                <div className="mt-1 items-start flex justify-start ">
                  <button

                    className="bg-slate-300 text-green-600 px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300 text-[15px]"
                  >
                    Learn More
                  </button>
                </div>
              </CardContent>





            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Painting Services</CardTitle>

              </CardHeader>
              <CardContent>
                <Image src="/painting/painting.jpg" alt="HVAC System" width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
                <p className='py-2'>Transform your space
                   with our expert painting services.
                    Whether you&#39;re refreshing a single 
                    room, updating your entire home, or 
                    tackling a commercial project, we 
                    provide high-quality interior and
                     exterior painting that enhances 
                     the beauty and value of your property.</p>

                <div className="mt-1 items-start flex justify-start ">
                  <button

                    className="bg-slate-300 text-green-600 px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300 text-[15px]"
                  >
                    Learn More
                  </button>
                </div>

              </CardContent>


            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Welding Services</CardTitle>

              </CardHeader>
              <CardContent>
                <Image src="/painting/welding2.jpg" alt="HVAC System" width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
                <p className='py-2'>Revitalize your property with our professional
                  pressure washing services. We specialize in cleaning and
                  restoring a variety of surfaces, including
                  driveways, patios, siding, decks, and fences.
                  Using high-pressure equipment,
                  we remove dirt, grime, mold, and stains,
                  helping to improve the appearance and longevity
                  of your exterior surfaces. </p>


                <div className="mt-1 items-start flex justify-start ">
                  <button

                    className="bg-slate-300 text-green-600 px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300 text-[15px]"
                  >
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Engineer Your Success?</h2>
          <p className="text-xl mb-8">Contact MODERN RENOVATOR today for innovative electrical and mechanical solutions.</p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
            Get in Touch
          </Button>
        </div>
      </section>









    </div>
  )
}