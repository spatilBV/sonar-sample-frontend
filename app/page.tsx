import { Greeting } from "@/components/Greeting";
import { Counter } from "@/components/Counter";
import { formatPrice, classifyScore } from "@/lib/utils";

export default function HomePage() {
  const demoPrice = formatPrice(1299.5);
  const demoScore = classifyScore(82);

  return (
    <main style={{ maxWidth: 640, marginInline: "auto" }}>
      <h1>SonarQube Cloud — E2E Sample</h1>
      <Greeting name="BroadVision" />
      <p>
        Demo price: <strong>{demoPrice}</strong> · Score band:{" "}
        <strong>{demoScore}</strong>
      </p>
      <Counter initial={0} />
    </main>
  );
}
