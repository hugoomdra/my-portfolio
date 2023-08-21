import Banner from '@/components/banner'
import HeroSection from '@/components/hero-section'
import Projects from '@/components/projects'
import Image from 'next/image'

function displayBanner(){
  let display = false;

  let date = new Date();


  if(date.getDay() === 0 || date.getDay() === 6){
    display = true;
  }else{
    if(date.getHours() >= 18 && date.getHours() <= 22){
      display = true;
    }else if(date.getHours() >= 12 && date.getHours() <= 14){
      display = true;
    }
  }

  console.log(date);
  return display;
}

export default function Home() {
  return (
    <main className="">
      {displayBanner() && <Banner />}
      <HeroSection />
      <Projects />
    </main>
  )
}
