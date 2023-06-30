import Image from 'next/image'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Testimonial from './components/Testimonial'

export default function Home() {
  return (
    <main>
    <Hero />
    <Introduction />
    <Testimonial />
    </main>
  )
}
