"use client"
import { motion } from "framer-motion"
import { useState } from "react"

// FAQ data
const faqs = [
    {
        question: "What services do you offer?",
        answer: "We provide comprehensive solutions including web development, mobile applications, and digital transformation services."
    },
    {
        question: "How can I get started?",
        answer: "Simply reach out through our contact form or schedule a free consultation call. We'll discuss your needs and create a tailored plan."
    },
    {
        question: "What is your typical process?",
        answer: "We follow an agile methodology, starting with requirements gathering, followed by design, development, testing, and deployment phases."
    },
    {
        question: "What services do you offer?",
        answer: "We provide comprehensive solutions including web development, mobile applications, and digital transformation services."
    },
    {
        question: "How can I get started?",
        answer: "Simply reach out through our contact form or schedule a free consultation call. We'll discuss your needs and create a tailored plan."
    },
    {
        question: "What is your typical process?",
        answer: "We follow an agile methodology, starting with requirements gathering, followed by design, development, testing, and deployment phases."
    },
    {
        question: "What services do you offer?",
        answer: "We provide comprehensive solutions including web development, mobile applications, and digital transformation services."
    },
    {
        question: "How can I get started?",
        answer: "Simply reach out through our contact form or schedule a free consultation call. We'll discuss your needs and create a tailored plan."
    },
    {
        question: "What is your typical process?",
        answer: "We follow an agile methodology, starting with requirements gathering, followed by design, development, testing, and deployment phases."
    },

]

function FaqItem({ question, answer, isOpen, onClick }: {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
}) {
    return (
        <motion.div
            initial={false}
            className="border-b border-gray-200 last:border-b-0"
            whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.01)' }}
        >
            <button
                onClick={onClick}
                className="flex justify-between items-center w-full py-6 text-left group transition-colors duration-200"
            >
                <span className="text-xl font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="ml-6 p-2 rounded-full bg-gray-100 group-hover:bg-blue-100 transition-colors duration-200"
                >
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        className={`transform transition-colors duration-200 ${isOpen ? 'text-blue-600' : 'text-gray-600'}`}
                    >
                        <path
                            d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                            fill="currentColor"
                            fillRule="evenodd"
                        />
                    </svg>
                </motion.div>
            </button>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut"
                }}
                className="overflow-hidden"
            >
                <p className="pb-6 text-gray-600 text-lg leading-relaxed pr-8">
                    {answer}
                </p>
            </motion.div>
        </motion.div>
    )
}

export default function FaqsPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <main className="min-h-screen py-24 px-4 bg-gradient-to-b from-gray-50 to-white mb-56 mt-14 banner-image">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="text-center mb-16">
                    <motion.h1
                        className="text-5xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        className="text-xl text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        Find answers to common questions about our services
                    </motion.p>
                </div>

                <motion.div
                    className="bg-white rounded-2xl shadow-xl p-8 divide-y divide-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </main>
    )
}