import React from 'react'
import { Accordian, AccordianItem } from '@/components/accordian'

const faqs = [
  {
    'trigger': 'What services does Black Mining offer?',
    'children': 'We offer complete vehicle disposal services including free vehicle collection, legal documentation handling, and environmentally responsible vehicle processing. We ensure all vehicles are disposed of in compliance with environmental regulations.',
    'value': 1
  },
  {
    'trigger': 'How to get started with disposing off my vehicle?',
    'children': 'Simply fill out our contact form with your vehicle details and contact information, or call us directly. We will arrange a convenient time to collect your vehicle and handle all the necessary paperwork.',
    'value': 2
  },
  {
    'trigger': 'Is your vehicle collection service free?',
    'children': 'Yes, we offer free vehicle collection from your location. Our team will come to pick up your vehicle at a time that suits you, whether it is at your home, workplace, or another location.',
    'value': 3
  },
  {
    'trigger': 'What documents do I need to provide?',
    'children': 'You will need to provide your vehicle registration document (V5C), photo ID, and proof of address. We will guide you through the documentation process and ensure everything is handled legally.',
    'value': 4
  },
  {
    'trigger': 'How long does the process take?',
    'children': 'The entire process typically takes 24-48 hours from initial contact to vehicle collection. The actual collection usually takes about 30 minutes, and we handle all paperwork promptly.',
    'value': 5
  },
  {
    'trigger': 'Is your service environmentally friendly?',
    'children': 'Yes, we follow strict environmental guidelines in our disposal process. We recycle as many parts as possible and ensure hazardous materials are disposed of properly in accordance with environmental regulations.',
    'value': 6
  },
  {
    'trigger': 'Do you handle all types of vehicles?',
    'children': 'Yes, we handle cars, vans, trucks, and other vehicles regardless of their condition. Whether your vehicle is damaged, non-running, or end-of-life, we can help with its disposal.',
    'value': 7
  },
  {
    'trigger': 'Will I receive payment for my vehicle?',
    'children': "Yes, we offer competitive rates based on your vehicle's condition and current market values. We provide free, no-obligation quotes and immediate payment upon collection.",
    'value': 8
  },
  {
    'trigger': 'Are you legally certified for vehicle disposal?',
    'children': "Yes, we are fully licensed and certified for vehicle disposal. We comply with all relevant regulations and provide official documentation for every vehicle we process.",
    'value': 9
  },
]

export const metadata = {
  title: "Black Mining Junkyard LLP | Vehicle Scrapping & Recycling Queries Answered",
  description: "Find answers to common questions about vehicle scrapping, eco-friendly car recycling, legal compliance, scrap value, and government-approved disposal services. Learn more with Black Mining Junkyard LLP’s expert FAQs!",
};

const Faqs = () => {
  return (
    <main className=''>
      <div
        className="hero h-fit py-8 flex flex-col justify-center" 
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('https://images.pexels.com/photos/1887995/pexels-photo-1887995.jpeg?cs=srgb&dl=pexels-ann-h-45017-1887995.jpg&fm=jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="hero-content text-center md:mt-8">
          <div className=" flex flex-col items-center mx-auto px-4 py-16 gap-12">

            <h1 className="text-2xl md:text-5xl font-bold text-white">Get All Your Questions Answered</h1>

            <h1 className='text-4xl md:text-6xl font-bold text-white border-b border-white pb-2 px-4'>FAQs</h1>

            
          </div>
        </div>
      </div>

      <div className='w-full p-4 py-16'>
        <h1 className=' w-full max-w-[1000px] mx-auto text-xl md:text-2xl'> 
          Have questions about our services? This section covers everything from the vehicles we accept to our eco-friendly practices and the scrapping process. For anything not listed, feel free to contact us—we’re here to help!
        </h1>
      </div>

       <div className='w-full p-4 pb-16'>
          <Accordian className='w-full max-w-[1000px] mx-auto bg-blue-300 rounded-3xl p-8'>
            {
              faqs.map((faq) => <AccordianItem key={faq.value} value={faq.value} trigger={faq.trigger}>{faq.children}</AccordianItem>)
            }
          </Accordian>
       </div>
    </main>
  )
}

export default Faqs