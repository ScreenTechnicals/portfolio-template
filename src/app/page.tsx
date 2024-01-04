import Section1 from "@/components/Sections/HomePage/Section1";
import Section2 from "@/components/Sections/HomePage/Section2";
import Section3 from "@/components/Sections/HomePage/Section3";
import Section4 from "@/components/Sections/HomePage/Section4";

export default function Home() {
  return (
    <main className="p-5 w-full">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
