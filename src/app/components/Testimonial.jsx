import React from 'react'
import TesimonialItem from './TesimonialItem'

const data = [
    {
        id: 1,
        name: "Anna",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, temporibus? Velit quasi facilis aliquid blanditiis, unde earum, voluptate quas vel quisquam suscipit tempora. Eius excepturi voluptatem laborum, cupiditate repellendus eum laboriosam expedita modi nam dolorum obcaecati vel reprehenderit sit corrupti!",
        avatar: "/avatar1.png"
    },
    {
        id: 2,
        name: "John",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint perferendis sit alias cumque, voluptates facilis. Earum recusandae obcaecati consectetur unde eos eveniet possimus similique explicabo consequuntur reprehenderit rerum nam quis maxime, nobis enim error.",
        avatar: "/avatar2.png"
    },
    {
        id: 3,
        name: "Amy",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium deserunt nesciunt facere! Nisi repellendus aspernatur autem illo id magni nemo!",
        avatar: "/avatar3.png"
    }
]

export default function Testimonial() {
  return (
    <div id="testimonial" className='container py-10 bg-white scroll-mt-20'>
        <section className="wrapper">

            <h2 className='text-3xl font-lato text-center'><span className='font-grand-hotel text-4xl font-medium'>They are realizing their goals,</span> You can as well! </h2>
            <div className=" p-6 py-10 flex flex-col gap-4 justify-around sm:flex-row ">
                {
                    data.map(person => (
                        <TesimonialItem key={person.id} {...person} />
                    ))
                }
            </div>
        </section>

    </div>
  )
}
