import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from 'lucide-react'

export default function SecondTestimonials() {
  // ... (previous code)

  return (
    <div className="">
      {/* ... (previous sections) */}

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "John D.", location: "Camps Bay", quote: "Roof Clean did an excellent job on our tiled roof. It looks brand new and the team was professional throughout.", rating: 5 },
              { name: "Nkosana Lunga.", location: "Constantia", quote: "I was impressed by their attention to detail. They even noticed and repaired a small leak during the cleaning process!", rating: 5 },
              { name: "Minenhle Dube", location: "Constantia", quote: "I was impressed by their attention to detail. They even noticed and repaired a small leak during the cleaning process!", rating: 5 },
              { name: "Sarah M.", location: "Constantia", quote: "I was impressed by their attention to detail. They even noticed and repaired a small leak during the cleaning process!", rating: 5 },
              { name: "Mlabel ndlala.", location: "Constantia", quote: "I was impressed by their attention to detail. They even noticed and repaired a small leak during the cleaning process!", rating: 5 },
              { name: "Sarah M.", location: "Constantia", quote: "I was impressed by their attention to detail. They even noticed and repaired a small leak during the cleaning process!", rating: 5 },
              { name: "Michael R.", location: "Stellenbosch", quote: "Great service at a competitive price. Our gutters have never been cleaner, and they completed the job faster than expected.", rating: 5 }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {i < Math.floor(testimonial.rating) ? (
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        ) : i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 ? (
                          <StarHalf className="w-5 h-5 text-yellow-400 fill-current" />
                        ) : (
                          <Star className="w-5 h-5 text-gray-300" />
                        )}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-2">
                      {testimonial.name[0]}
                    </div>
                    <p className="font-semibold">{testimonial.name}, {testimonial.location}</p>
                  </div>
                  <p className="mb-4 italic pt-3">&#34;{testimonial.quote}&#34;</p>
                 
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ... (remaining sections) */}
    </div>
  )
}