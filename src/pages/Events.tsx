import { useState } from 'react'
import '../App.css';

function Events() {
  // Sample event data
  const events = [
    {
      id: 1,
      month: "January",
      date: "15",
      title: "Coffee & Code Workshop",
      description: "Join us for an interactive workshop where we'll explore the intersection of coffee culture and coding. Learn new programming concepts while enjoying fresh coffee and networking with fellow developers."
    },
    {
      id: 2,
      month: "February",
      date: "8",
      title: "Tech Talk: Modern Web Development",
      description: "An engaging presentation on the latest trends in web development, covering React, TypeScript, and modern CSS techniques. Perfect for both beginners and experienced developers."
    },
    {
      id: 3,
      month: "March",
      date: "22",
      title: "Hack Preparation", // eslint-disable-line spellcheck/spell-checker
      description: "Get ready for our upcoming hack! This session will cover team formation, project ideation, and technical preparation. Don't miss this opportunity to prepare for an exciting coding challenge.", // eslint-disable-line spellcheck/spell-checker
    },
    {
      id: 4,
      month: "April",
      date: "12",
      title: "Industry Networking Event",
      description: "Connect with professionals from leading tech companies. This networking event provides opportunities to learn about career paths, internships, and industry insights."
    }
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
    <div className="w-full bg-stone-300 py-16">
    <div className="min-h-screen">
      {/* Hero Banner Section */}
      <div className="w-full py-20 px-4">
        <div className="bg-stone-500 py-20 rounded-xl text-center">
          <h1 className="text-6xl font-bold text-black mb-4">Events</h1>
          <p className="text-xl text-stone-200">Your Subtitle Here</p>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full bg-stone-100 py-16">
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
                    <span className="text-gray-600 font-medium">Flyer Picture</span>
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

                {/* Description */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-sm max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {currentEvent.description}
                  </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Events