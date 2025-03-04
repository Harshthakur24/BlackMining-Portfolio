import Image from "next/image";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Popup = ({setShowPopup}) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        
        setLoading(true);

        try {
          toast.loading("Sending Message...")

          const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });

          if(response.status !== 200) {
            throw new Error('Failed to send message')
          }
          
          toast.dismiss();
          toast.success("Message Sent Successfully")

          setTimeout(() => {
            toast.dismiss();
          }, 3000);
        } catch (error) {
          console.error(error);
          toast.dismiss();
          toast.error("Failed to send message")
          setTimeout(() => {
            toast.dismiss();
          }, 3000);
        }
        finally {
          setLoading(false);
        }
      };

    return (
        <div >
            <Toaster />
            <div className="fixed inset-0 flex items-center justify-center z-50 ">

                <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                <div className="bg-white max-md:p-8 p-12 rounded-lg shadow-lg z-10 relative max-w-[800px] max-md:mx-4">

                    <button
                        onClick={() => setShowPopup(false)} 
                        className="absolute top-4 right-4 "
                    >
                        <Image src="/images/close.png" alt="close" width={25} height={25} />
                    </button>

                    <h2 className="text-2xl font-semibold mb-4 text-[#009900]/90 text-center">Best Value for your Scrap Vehicles! Contact Now</h2>
                    <form className="flex flex-col gap-4 items-center mx-auto max-w-[400px] w-full mt-6 " onSubmit={handleSubmit}>
                        <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="p-2 border-[1px] border-black placeholder:text-black/60 bg-transparent rounded-md w-full focus:outline-none "
                        required
                        />
                        <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="p-2  border-[1px] border-black placeholder:text-black/60 bg-transparent rounded-md w-full focus:outline-none "
                        required
                        />
                        <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone Number"
                        onChange={(e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
                        className="p-2  border-[1px] border-black placeholder:text-black/60 bg-transparent rounded-md w-full focus:outline-none "
                        required
                        />
                        <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer w-fit bg-[#F9345b] hover:scale-105 transition-all duration-300 ease-in-out text-white text-[18px] font-semibold py-2 px-4 rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Popup;