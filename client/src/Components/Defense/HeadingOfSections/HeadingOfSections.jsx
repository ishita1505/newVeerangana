
import React from "react"
import Slider from "./Slider"
import {Previous,Next} from "./SlidingLogic"
function HeadingOfSections(){
    return(
        <div className="px-12  dark:text-white  dark:bg-custom-primary">
          
            <div className="text-left lg:flex lg:pt-15">
                <div className="flex flex-col items-center justify-center mt-16 mb-8 ">
                    <img className="w-5/5" src={process.env.PUBLIC_URL + "/HeadingSectionImages/9.png"} />
                </div>

                <div className="my-16 ">
                    <h3 className="mt-4 text-custom-muted">BENEFITS</h3>
                    <h1 className="mb-5 text-2xl font-semibold lg:text-3xl">Happening cities</h1>
                    <div className="py-3">
                        <span className="px-2 py-1 text-sm font-bold text-blue-900 bg-blue-100 border rounded-full">Advertising</span>
                        <h2 className="text-xl font-medium">Cost-effective Advertising</h2>
                        <p className="text-custom-muted">With a free listing, you can advertise your rental with no upfront costs</p>
                    </div>
                    <div className="py-3">
                        <span className="px-2 py-1 text-sm font-bold text-green-900 bg-green-100 border rounded-full">Exposure</span>
                        <h2 className="text-xl font-medium">Reach millions with Chisfis</h2>
                        <p className="text-custom-muted">Millions of people are searching for unique places to stay around the world</p>
                    </div>
                    <div className="py-3">
                        <span className="px-2 py-1 text-sm font-bold text-red-900 bg-red-100 border rounded-full">Secure</span>
                        <h2 className="text-xl font-medium">Secure and simple</h2>
                        <p className="text-custom-muted">A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online</p>
                    </div>
                </div>
            </div>


            <div className="">
            <h1 className="text-3xl font-semibold text-left md:text-4xl">Self-Defense Techniques</h1>
            <h2 className="text-lg text-left mt-4 md:text-xl text-custom-muted">A small pictorial description of self defense techniques</h2>
            <div className="flex justify-end md:py-6">
                <button className="px-2 pb-1 mx-1 text-lg font-hairline border rounded-full select-none md:text-4xl" onClick={()=>Previous()}>˂</button>
                <button className="px-2 pb-1 mx-1 text-lg font-hairline border rounded-full select-none md:text-4xl" onClick={()=>Next()}>˃</button>
            </div>

            <Slider/>
            </div>

        </div>
    )
}
export default HeadingOfSections