// skills/24h-regatta-planner/index.ts
import { estimateBoatSpeed } from '../wind-performance/index';

export type ForecastPoint = { timestamp: string; wind_kn: number; wind_dir_deg: number };

function parseIso(s: string) { return new Date(s).getTime(); }

function findForecastAtTime(forecast: ForecastPoint[], t: number) {
  // simple nearest-neighbour by absolute time difference
  let best = forecast[0];
  let bestDiff = Math.abs(parseIso(forecast[0].timestamp) - t);
  for (const f of forecast) {
    const d = Math.abs(parseIso(f.timestamp) - t);
    if (d < bestDiff) { best = f; bestDiff = d; }
  }
  return best;
}

// assumes legs: [{from, to, route:{distance}}] and bearingDeg(fromLat,fromLon,toLat,toLon) available from PWA
export function plan24h(regatta: any, forecast: ForecastPoint[], opts?: { startWindowMinutes?: number, stepMinutes?: number }) {
  const windowM = opts?.startWindowMinutes || 24 * 60;
  const stepM = opts?.stepMinutes || 15;
  const now = Date.now();
  const startCandidates: number[] = [];
  for (let m = 0; m <= windowM; m += stepM) startCandidates.push(now + m * 60_000);

  const legs = (regatta && regatta.plan) || [];
  const results: any[] = [];

  for (const startT of startCandidates) {
    let cursor = startT;
    let totalSeconds = 0;
    const timing: any[] = [];
    for (const leg of legs) {
      const distanceNm = (leg.route && leg.route.distance) || Number(leg.distance) || 0.01;
      // determine bearing for leg if buoys available
      let legCourse = leg.bearing_deg || 0;
      // forecast at cursor
      const f = findForecastAtTime(forecast, cursor);
      const wind = { speed_kn: f.wind_kn, direction_deg_true: f.wind_dir_deg };
      const est = estimateBoatSpeed(wind as any, legCourse);
      let speed = est.estimated_speed_kn;
      if (!(speed > 0)) speed = Math.max(0.5, (f.wind_kn || 5) * 0.3); // fallback
      const seconds = (distanceNm / speed) * 3600;
      timing.push({ leg, start_iso: new Date(cursor).toISOString(), eta_iso: new Date(cursor + seconds * 1000).toISOString(), estimated_speed_kn: Number(speed.toFixed(2)) });
      totalSeconds += seconds;
      cursor += seconds * 1000;
    }
    results.push({ start_iso: new Date(startT).toISOString(), total_hours: totalSeconds / 3600, timing });
  }

  results.sort((a, b) => a.total_hours - b.total_hours);
  const best = results[0];
  return { best_start: best.start_iso, best_total_hours: best.total_hours, alternatives: results.slice(0, 10) };
}

// Demo runner
if (require && (require as any).main === module) {
  const sampleRegatta = { plan: [ { route: { distance: 2.5 }, bearing_deg: 310 }, { route: { distance: 5.0 }, bearing_deg: 90 } ] };
  const now = new Date();
  const forecast = [] as ForecastPoint[];
  for (let i = 0; i < 25; i++) forecast.push({ timestamp: new Date(now.getTime() + i * 60 * 60 * 1000).toISOString(), wind_kn: 8 + Math.sin(i/3)*3, wind_dir_deg: 260 });
  console.log(plan24h(sampleRegatta, forecast, { startWindowMinutes: 6*60, stepMinutes: 60 }));
}
