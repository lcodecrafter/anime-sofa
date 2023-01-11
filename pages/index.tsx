import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className={`${inter.className} ${styles.className}`}>Hello world</main>;
}
