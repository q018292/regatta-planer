// agents/24h-planner-agent.ts
import { plan24h } from '../skills/24h-regatta-planner/index';

async function runDemo() {
  // sample plan and synthetic forecast
  const sampleRegatta = { plan: [ { route: { distance: 2.5 }, bearing_deg: 310 }, { route: { distance: 5.0 }, bearing_deg: 90 } ] };
  const now = new Date();
  const forecast = [] as any[];
  for (let i = 0; i < 25; i++) forecast.push({ timestamp: new Date(now.getTime() + i * 60 * 60 * 1000).toISOString(), wind_kn: 8 + Math.sin(i/3)*3, wind_dir_deg: 260 });
  const result = plan24h(sampleRegatta, forecast, { startWindowMinutes: 12*60, stepMinutes: 30 });
  console.log('24h planner result:', JSON.stringify(result, null, 2));
}

if (require && (require as any).main === module) runDemo();

export {};
