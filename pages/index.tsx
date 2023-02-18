import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import HeroBear from "../public/HeroImageHQ.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<section className='relative w-screen lg:h-[729px]'>
				<Image src={HeroBear} alt='hero image, bear/honeypot' />
				<div
					className='
				absolute top-0 left-0 
				// Large Screen
				lg:ml-[240px] lg:mr-[1002] lg:mt-[238px] lg:mb-[286px] lg:w-[640px] lg:h-[20%] 
				// Medium Screen
				md:ml-[82px] md:mr-[437] md:my-[96px] md:w-[301px] md:h-[122] 
				//Small Screen
				flex justify-center items-center'
				>
					<h2 className=' text-white text-1xl md:text-2xl lg:text-6xl'>
						Transforming the way Arrcaia interacts with Clients
					</h2>
				</div>
			</section>
			<section></section>
			<section></section>
			<section></section>
			<section></section>
			<section></section>
			<section></section>
		</>
	);
}
