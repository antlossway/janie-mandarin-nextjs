import Image from 'next/image'
import React from 'react'

const data = [
  {
    id: 1,
    name: 'everyday mandarin',
    content: "Ready to go beyond your textbook Chinese and learn to speak with confidence? This program covers the spoken mandarin foundations that every Chinese learner needs, no matter how long you’ve been studying Chinese.",
    image: '/daily-mandarin.webp'

  },
  {
    id: 2,
    name: "Exam preparation",
    content: "This course focuses on Mandarin exams. It can help you to prepare for HSK exams. You can also choose to learn specific skills that you need to improve, or to learn comprehensive Mandarin by following HSK standard.",
    image: "/exam.svg"

  },
  {
    id: 3,
    name: "business mandarin",
    content: "This course is based on learning common Chinese business expressions and conversations. You will also learn to understand Chinese culture and Chinese business etiquette to help you communicate and negotiate professionally in the largest market in the world.",
    image: '/business-mandarin.jpeg'
  },
  {
    id: 4,
    name: "school tutoring",
    content: "This course is designed for younger children and teenage students who need tutoring in Chinese language. I can help with homework, preparing for exams, or overcoming specific language difficulties. ",
    image: '/school.webp'
  }
]

export default function courses() {
  return (
    <main className='container py-10'>
      <h1 className='text-4xl capitalize text-center mb-10'>Chinese Courses</h1>
      <div className="wrapper grid place-items-center place-content-center [&>*]:mb-8
       ">
        {
          data.map(course => (
            <section key={course.id}
              className='relative w-full flex flex-col-reverse justify-center items-center gap-6
              sm:flex-row
               sm:[&:nth-child(odd)]:flex-row-reverse
                bg-white dark:bg-black
                rounded-md shadow-md overflow-hidden
              '>
              <div className='px-4 py-6 sm:p-8'>
                <h2 className='uppercase text-3xl font-semibold mb-6'>{course.name}</h2>
                <p className='max-w-[50ch]'>
                {course.content}
                </p>
              </div>
              <Image className="object-cover"
                // fill={true}
                width={400}
                height={200}
                alt={course.name}
                src={course.image} />
            </section>
          ))
        }

      </div>
    </main>
  )
}
