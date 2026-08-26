// wind-performance/index.ts
// Minimaler, dependency-freier TypeScript-Export, der in Node.js per ts-node oder nach Transpile nutzbar ist.

export type Wind = { speed_kn: number; direction_deg_true: number; timestamp?: string };
export type Result = { estimated_speed_kn: number; twa_deg: number; notes?: string };

// Default Polar (TWA -> speed factor relative to wind speed)
const DEFAULT_POLAR: Array<{ twa: number; factor: number }> = [
  { twa: 0, factor: 0.00 },
  { twa: 30, factor: 0.50 },
  { twa: 60, factor: 0.70 },
  { twa: 90, factor: 0.80 },
  { twa: 120, factor: 0.65 },
  { twa: 150, factor: 0.40 },
  { twa: 180, factor: 0.05 }
];

function normalizeAngle(angle: number) {
  let a = angle % 360;
  if (a < 0) a += 360;
  return a;
}

function smallestAngleDiff(a: number, b: number) {
  let d = Math.abs(a - b) % 360;
  return d > 180 ? 360 - d : d;
}

function interpolatePolar(twa: number, polar = DEFAULT_POLAR) {
  // clamp
  if (twa <= polar[0].twa) return polar[0].factor;
  if (twa >= polar[polar.length - 1].twa) return polar[polar.length - 1].factor;
  // find interval
  for (let i = 0; i < polar.length - 1; i++) {
    const a = polar[i];
    const b = polar[i + 1];
    if (twa >= a.twa && twa <= b.twa) {
      const frac = (twa - a.twa) / (b.twa - a.twa);
      return a.factor + frac * (b.factor - a.factor);
    }
  }
  return polar[polar.length - 1].factor;
}

export function estimateBoatSpeed(wind: Wind, course_deg_true: number, opts?: { polar?: Array<{ twa: number; factor: number }>; hullMultiplier?: number }): Result {
  const polar = (opts && opts.polar) || DEFAULT_POLAR;
  const hullMultiplier = opts && opts.hullMultiplier != null ? opts.hullMultiplier : 0.98;
  const windDir = normalizeAngle(wind.direction_deg_true);
  const course = normalizeAngle(course_deg_true);
  const twa = smallestAngleDiff(windDir, course);
  const factor = interpolatePolar(twa, polar as any);
  const estimated = Math.max(0, (wind.speed_kn || 0) * factor * hullMultiplier);
  const notes = `TWA ${Math.round(twa)}°, polar-factor ${factor.toFixed(2)}, hullMult ${hullMultiplier}`;
  return { estimated_speed_kn: Number(estimated.toFixed(2)), twa_deg: Number(twa.toFixed(1)), notes };
}

// If run via node directly (simple demo)
if (require && (require as any).main === module) {
  const sample = estimateBoatSpeed({ speed_kn: 12, direction_deg_true: 270 }, 320);
  console.log('Sample estimate:', sample);
}
