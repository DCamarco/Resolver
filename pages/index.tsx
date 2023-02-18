import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<h1 className='text-5xl text-rose-700 text-center'>Hello</h1>
			<div className='bg'></div>
		</>
	);
}
