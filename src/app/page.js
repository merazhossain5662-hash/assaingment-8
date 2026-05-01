import Featurs from "@/components/Featurs";
import Feedback from "@/components/Feedback";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SelectedBooks from "@/components/SelectedBooks";
import Image from "next/image";

export default function Home() {
  return (
   <>
           <Hero></Hero>
           <SelectedBooks></SelectedBooks>
           <Featurs></Featurs>
           <Feedback></Feedback>

   </>
  );
}
