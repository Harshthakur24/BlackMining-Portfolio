"use client"
import { ContainerScroll } from "@/src/components/ui/container-scroll-animation"

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-2 bg-[#fafafa] banner-image">
            <h1 className="flex justify-center mt-16 text-5xl md:text-8xl text-black font-bold bg-clip-text">
                About Us
            </h1>
            <ContainerScroll
                titleComponent={
                    <></>

                }
            >
                <div className="p-8 md:p-16 space-y-8 bg-[#fafafa] rounded-2xl">
                    <p className="text-2xl md:text-3xl leading-relaxed text-neutral-800">
                        We are pioneers in sustainable vehicle disposal, committed to transforming end-of-life vehicles into valuable resources while protecting our environment.
                    </p>

                    <p className="text-xl md:text-2xl leading-relaxed text-neutral-700">
                        With over two decades of experience, our team has processed more than 10,000 vehicles, maintaining a remarkable 95% recovery rate. We take pride in our meticulous approach to vehicle recycling, ensuring that every component is either repurposed or responsibly recycled.
                    </p>

                    <p className="text-xl md:text-2xl leading-relaxed text-neutral-700">
                        Our state-of-the-art facilities and expert team work together to provide comprehensive solutions that benefit both our clients and the environment. We believe in transparency, sustainability, and excellence in everything we do.
                    </p>
                </div>
            </ContainerScroll>
        </main>
    )
}