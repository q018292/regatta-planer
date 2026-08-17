import { routeId, toNum, mins, tm, bearingDeg, norm } from './util.js';
export class Planner {
  constructor(){ this.routes=[]; this.buoys=[]; this.plan=[]; this.startTime='14:00'; this.startBuoy=''; }
  setData(routes, buoys){ this.routes=routes; this.buoys=buoys; this.routeMap=new Map(routes.map(r=>[r.id,r])); }
  allowed(from){ const counts=this.counts(); return [...new Set(this.routes.filter(r=>r.start===from && (counts[r.id]||0)<Number(r.max)).map(r=>r.end))].sort(); }
  counts(){ const c={}; for(const leg of this.plan) if(leg.id) c[leg.id]=(c[leg.id]||0)+1; return c; }
  addLeg(to, speed){ const from=this.current(); const id=routeId(from,to); const route=this.routeMap.get(id); if(!route) return false; this.plan.push({from,to,id,speed:Number(speed)}); return true; }
  undo(){ this.plan.pop(); }
  current(){ return this.plan.length ? this.plan[this.plan.length-1].to : this.startBuoy; }
  bearing(from,to){ const a=this.buoys.find(b=>b.name===norm(from)); const b=this.buoys.find(b=>b.name===norm(to)); return a&&b&&Number.isFinite(a.lat)&&Number.isFinite(b.lat) ? Math.round(bearingDeg(a.lat,a.lon,b.lat,b.lon))+'°' : ''; }
  state(){ let eta=mins(this.startTime), total=0; const counts=this.counts(); const rows=this.plan.map((leg,i)=>{ const r=this.routeMap.get(leg.id); const sp=toNum(leg.speed); let status='OK', etaTxt=''; if(!r) status='nicht erlaubt'; else if(!(sp>0)) status='Speed fehlt'; else { eta += (r.distance/sp)*60; total += r.distance; etaTxt=tm(eta); if(counts[leg.id] > Number(r.max)) status='Max überschritten'; if(eta > mins(this.startTime)+1440) status='über 24h'; } return {...leg,row:i,route:r,eta:etaTxt,total,status,bearing:this.bearing(leg.from,leg.to)}; }); return {rows,total,lastEta:rows.filter(r=>r.eta).at(-1)?.eta||'--:--',counts}; }
  toJSON(){ return {plan:this.plan,startTime:this.startTime,startBuoy:this.startBuoy}; }
  fromJSON(s){ this.plan=s?.plan||[]; this.startTime=s?.startTime||'14:00'; this.startBuoy=s?.startBuoy||this.startBuoy; }
}
