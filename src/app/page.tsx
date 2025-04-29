import WithoutSimbianSection from "./components/withoutSimbian/withoutSimbianSection";
import WithSimbianSection from "./components/withSimbian/withSimbianSection";
import Navbar from "./components/shared/navbar";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-blue-900">
      <Navbar />
      <WithoutSimbianSection />
      <WithSimbianSection />
    </main>
  );
}
