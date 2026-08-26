// agents/performance-agent.ts
// Minimaler Node.js Agent, der den wind-performance Skill nutzt.
import { estimateBoatSpeed } from '../skills/wind-performance/index';

// Beispiel-Wrapper: liest eine Wetter-JSON (wind) und einen Kurs und gibt Empfehlung aus.
async function runDemo() {
  const wind = { speed_kn: 10, direction_deg_true: 250 };
  const course = 300; // true heading
  const res = estimateBoatSpeed(wind as any, course);
  console.log('PerformanceAgent result ->', res);
}

if (require && (require as any).main === module) runDemo();

export {};
