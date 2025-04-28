import WithoutSimbianSection from "./components/withoutSimbian/withoutSimbianSection";
import WithSimbianSection from "./components/withSimbian/withSimbianSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <WithoutSimbianSection />
      <WithSimbianSection />
    </main>
  );
}
