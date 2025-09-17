import { useState } from 'react'
import '../App.css';

function Events() {
  // Sample event data
  const events = [
    {
      id: 1,
      month: "January",
      date: "15",
      title: "Fireside Chat with Women in Semiconductors",
      image: "/images/img1.png",
    },
    {
      id: 2,
      month: "February",
      date: "8",
      title: "Women in AI Panel",
      image: "/images/img2.png",
    },
    {
      id: 3,
      month: "March",
      date: "22",
      title: "Peer Internship Panel",
      image: "/images/img3.png",
    },
    {
      id: 4,
      month: "April",
      date: "12",
      title: "COFFEE and Women in Engineering Conference @ SJSU",
      image: "/images/img4.png",
    },
    {
      id: 5,
      month: "May",
      date: "5",
      title: "E-Craft Week",
      image: "/images/img5.png",
    },
    {
      id: 6,
      month: "June",
      date: "20",
      title: "Professor Islam Lab Tour",
      image: "/images/img6.png",
    },
  ]

  const [currentEventIndex, setCurrentEventIndex] = useState(0)

  const nextEvent = () => {
    setCurrentEventIndex((prevIndex) => 
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    )
  }

  const previousEvent = () => {
    setCurrentEventIndex((prevIndex) => 
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    )
  }

  const currentEvent = events[currentEventIndex]

  return (
    <div className="font-dm-serif-text">
    <div className="w-full bg-white py-16">
      <div className="min-h-screen">
        {/* Hero Banner Section */}
        <div className="w-full py-20 px-4">
          <div className="bg-[#5a3625] py-8 rounded-xl text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Events</h1>
            <p className="text-xl text-white">Your Subtitle Here</p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="w-full bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Event Card */}
              <div className="bg-brown-400 rounded-xl shadow-lg p-6">
                {/* Event Content */}
                <div className="text-center">
                  {/* Date */}
                  <div className="mb-6">
                    <div className="inline-block bg-gray-100 rounded-lg px-6 py-3 shadow-lg">
                      <span className="text-2xl font-semibold text-gray-700">
                        {currentEvent.month} {currentEvent.date}
                      </span>
                    </div>
                  </div>

                  {/* Flyer Picture Placeholder */}
                  <div className="mb-6">
                    <div className="w-64 h-48 mx-auto bg-gray-300 rounded-xl shadow-md flex items-center justify-center">
                      <img src={currentEvent.image} alt={currentEvent.title} className="w-full h-full object-cover rounded-xl" />
                    </div>
                  </div>

                  {/* Event Title */}
                  <div className="mb-6">
                    <div className="inline-block bg-gray-50 rounded-lg px-8 py-4 shadow-sm">
                      <h2 className="text-2xl font-bold text-stone-800">
                        {currentEvent.title}
                      </h2>
                    </div>
                  </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center items-center mt-8 space-x-4">
                  <button
                    onClick={previousEvent}
                    className="px-6 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-200 font-medium shadow-md"
                  >
                    Previous
                  </button>
                  <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                    <span className="text-gray-600 font-medium">
                      {currentEventIndex + 1} of {events.length}
                    </span>
                  </div>
                  <button
                    onClick={nextEvent}
                    className="px-6 py-2 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors duration-200 font-medium shadow-md"
                  >
                    Next
                  </button>
                </div>
              </div> {/* Closing Event Content div */}
              </div> {/* Closing Event Card div */}
            </div> {/* Closing max-w-4xl div */}
          </div> {/* Closing container div */}
        </div> {/* Closing Carousel Section div */}
      </div> {/* Closing min-h-screen div */}
    </div> {/* Closing font-dm-serif-text div */}
  );
}

export default Events;