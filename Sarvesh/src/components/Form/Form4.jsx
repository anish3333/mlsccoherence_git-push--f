import React from 'react'

function Form4() {
    return (
        <div>


            <form className="max-w-md mx-auto mt-16 p-4 bg-white shadow rounded">
                <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
                <div className="mb-4">
                    <label for="name" className="block mb-1">Name</label>
                    <input type="text" id="name" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label for="email" className="block mb-1">Email</label>
                    <input type="email" id="email" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Rating</label>
                    <div className="flex items-center space-x-2">
                        <input type="radio" name="rating" id="rating1" value="1" className="focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <label for="rating1">1</label>
                        <input type="radio" name="rating" id="rating2" value="2" className="focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <label for="rating2">2</label>
                        <input type="radio" name="rating" id="rating3" value="3" className="focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <label for="rating3">3</label>
                        <input type="radio" name="rating" id="rating4" value="4" className="focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <label for="rating4">4</label>
                        <input type="radio" name="rating" id="rating5" value="5" className="focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <label for="rating5">5</label>
                    </div>
                </div>
                <div className="mb-4">
                    <label for="message" className="block mb-1">Message</label>
                    <textarea id="message" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
            </form>
            <div className="h-2 m-2 bg-black" />
        </div>
    )
}

export default Form4