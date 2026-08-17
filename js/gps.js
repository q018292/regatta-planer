import { saveGpsLog, loadGpsLog } from './storage.js';
import { downloadText } from './util.js';
export class GpsManager {
  constructor(onUpdate){ this.onUpdate=onUpdate; this.watch=null; this.last=null; this.log=loadGpsLog(); this.sim={enabled:false,sog:5.5,cog:90}; }
  start(){ if(!navigator.geolocation) throw new Error('GPS wird von diesem Browser nicht unterstützt.'); this.watch=navigator.geolocation.watchPosition(p=>this.handle(p), e=>this.onUpdate(null,e), {enableHighAccuracy:true,maximumAge:1000,timeout:10000}); }
  stop(){ if(this.watch!==null) navigator.geolocation.clearWatch(this.watch); this.watch=null; this.last=null; }
  handle(pos){ this.last=pos; const c=pos.coords; const rec={time:new Date().toISOString(),lat:c.latitude,lon:c.longitude,sog:Number.isFinite(c.speed)?c.speed*1.94384:null,cog:Number.isFinite(c.heading)?c.heading:null,accuracy:Number.isFinite(c.accuracy)?c.accuracy:null}; const last=this.log.at(-1); if(!last || last.lat!==rec.lat || last.lon!==rec.lon){ this.log.push(rec); saveGpsLog(this.log); } this.onUpdate(pos,null); }
  speedKn(){ if(this.sim.enabled) return this.sim.sog; if(this.last?.coords && Number.isFinite(this.last.coords.speed)) return this.last.coords.speed*1.94384; return null; }
  cogDeg(){ if(this.sim.enabled) return this.sim.cog; if(this.last?.coords && Number.isFinite(this.last.coords.heading)) return this.last.coords.heading; return null; }
  exportCsv(){ const rows=[['time','lat','lon','sog_kn','cog_deg','accuracy_m'],...this.log.map(p=>[p.time,p.lat,p.lon,p.sog??'',p.cog??'',p.accuracy??''])]; downloadText('regatta-gps-logbuch.csv', rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('
'), 'text/csv;charset=utf-8'); }
  exportGpx(){ const pts=this.log.map(p=>`  <trkpt lat="${p.lat}" lon="${p.lon}"><time>${p.time}</time></trkpt>`).join('
'); downloadText('regatta-gps-track.gpx', `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="RegattaPlaner PWA v28" xmlns="http://www.topografix.com/GPX/1/1">
<trk><name>Regatta GPS Track</name><trkseg>
${pts}
</trkseg></trk>
</gpx>`, 'application/gpx+xml;charset=utf-8'); }
}
