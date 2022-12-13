import { AboutUs } from '../components/MainPage/AboutUs'
import { CanFind } from '../components/MainPage/CanFind'
import { ContactWithUs } from '../components/MainPage/ContactWithUs'


export default function MainPage() {
  return (
    <>
      <div className="text-5xl font-semibold my-10">Техподдержка FitMospolytech</div>
      <AboutUs/>
      <CanFind />
      <ContactWithUs />
    </>
  )
}
