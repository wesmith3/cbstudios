"use client";
import About from "./about";
import NavBar from "./navbar";
import Plot from "./plot";
import Image from 'next/image';
import Award from '../../public/ff_award.webp'
function Home() {
  return (
    <>
      <div className="home">
        <NavBar />
        <div>
          <h4 className="subhead">Film By Wesley Smith</h4>
          <h1 className="heading">DESPERADO</h1>
          <h1 className="bg_heading">MASTERPIECE</h1>
          <Image  className='award' src= {Award} alt="award"/>
        </div>
      </div>
      <Plot />
      <About />
    </>
  );
}

export default Home;
