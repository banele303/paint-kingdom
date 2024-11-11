import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Brush, Shield, ThumbsUp, Droplet, Home, Ruler, PaintBucket, Eraser, Feather } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <div className="">
      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Our Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2005, Paint Kingdom has been transforming spaces with vibrant colors and expert craftsmanship for
              over 15 years. What started as a small family business has grown into a trusted name in the industry, known for
              our creativity, attention to detail, and customer-first approach.
            </p>
            <p className="text-gray-600">
              Our journey has been one of continuous innovation and adaptation to new painting techniques and eco-friendly
              materials, always with the goal of providing the best possible service to our clients.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/painting/painting3.jpg"
              alt="Paint Kingdom team at work"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </section>

        {/* Our Values Section */}
        <section className="text-center space-y-12">
          <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <ThumbsUp className="w-12 h-12 text-green-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">Quality Craftsmanship</h3>
                <p className="text-gray-600">We never compromise on the quality of our work.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <Shield className="w-12 h-12 text-green-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">Integrity</h3>
                <p className="text-gray-600">Honesty and transparency in all our dealings.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <Palette className="w-12 h-12 text-green-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">Creativity</h3>
                <p className="text-gray-600">Innovative solutions to bring your vision to life.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Brush className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Interior Painting</h3>
                <p className="text-gray-600 mt-2">
                  Transform your indoor spaces with our expert interior painting services.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Home className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Exterior Painting</h3>
                <p className="text-gray-600 mt-2">
                  Enhance your home&apos;s curb appeal with our durable and beautiful exterior painting.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
             
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Color Consultation</h3>
                <p className="text-gray-600 mt-2">
                  Get expert advice on color schemes to create the perfect ambiance for your space.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Texture Painting</h3>
                <p className="text-gray-600 mt-2">
                  Add depth and character to your walls with our texture painting techniques.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PaintBucket className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Cabinet Painting</h3>
                <p className="text-gray-600 mt-2">
                  Revitalize your kitchen or bathroom with our professional cabinet painting services.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Ruler className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Wallpaper Installation</h3>
                <p className="text-gray-600 mt-2">
                  Expert wallpaper installation to add patterns and personality to your rooms.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Eraser className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Paint Removal</h3>
                <p className="text-gray-600 mt-2">
                  Professional paint removal services for surface preparation or restoration projects.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Droplet className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Staining Services</h3>
                <p className="text-gray-600 mt-2">
                  Enhance the natural beauty of wood surfaces with our expert staining services.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Feather className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Decorative Painting</h3>
                <p className="text-gray-600 mt-2">
                  Create unique, artistic finishes with our decorative painting techniques.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button asChild className="mt-8">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-green-600 text-white rounded-lg p-12 text-center space-y-6">
          <h2 className="text-3xl font-semibold">Ready to Transform Your Space with Color?</h2>
          <p className="text-xl">
            Whether it&apos;s a room refresh or a complete home makeover, we&apos;re here to bring your vision to life. Contact us today!
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}