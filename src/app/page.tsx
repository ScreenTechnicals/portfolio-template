import Section1 from "@/components/Sections/HomePage/Section1";
import Section2 from "@/components/Sections/HomePage/Section2";
import Section3 from "@/components/Sections/HomePage/Section3";
import Section4 from "@/components/Sections/HomePage/Section4";
import Section5 from "@/components/Sections/HomePage/Section5";
import Section6 from "@/components/Sections/HomePage/Section6";

export default function Home() {
  return (
    <main className="p-5 2xl:px-10 2xl:py-5 w-full min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
