"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FRQ() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-[20px]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>What types of painting services does Paint Kingdom offer?</AccordionTrigger>
                            <AccordionContent>
                                Paint Kingdom provides a full range of painting services, including residential, commercial, and industrial painting. Our expertise covers both interior and exterior projects, ensuring a high-quality finish for any surface.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>How does Paint Kingdom ensure quality and durability in its projects?</AccordionTrigger>
                            <AccordionContent>
                                We prioritize quality by using premium-grade paints and materials, and our experienced painters follow meticulous application techniques. Our team is trained to prepare surfaces thoroughly, ensuring that the paint adheres properly for a lasting and beautiful finish.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Does Paint Kingdom offer color consultation services?</AccordionTrigger>
                            <AccordionContent>
                                Yes, we provide professional color consultation services to help clients choose the best colors for their spaces. Our experts consider your style preferences, lighting, and space to recommend colors that bring your vision to life.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>What sets Paint Kingdom apart from other painting companies?</AccordionTrigger>
                            <AccordionContent>
                                Paint Kingdom stands out with our commitment to quality, attention to detail, and exceptional customer service. We combine skilled craftsmanship with top-of-the-line materials, ensuring each project meets our high standards for aesthetics and durability.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Does Paint Kingdom offer eco-friendly painting options?</AccordionTrigger>
                            <AccordionContent>
                                Absolutely. We offer a selection of eco-friendly paints that are low in volatile organic compounds (VOCs), making them safer for the environment and indoor air quality. Our team is happy to discuss sustainable options for your painting project.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
    )
}
