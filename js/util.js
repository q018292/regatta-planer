export const $ = id => document.getElementById(id);
export const norm = v => (v ?? '').toString().trim();
export const toNum = v => { if (typeof v === 'number') return v; const n = parseFloat(norm(v).replace(',', '.')); return Number.isFinite(n) ? n : null; };
export const routeId = (a,b) => `${norm(a)}|${norm(b)}`;
export const esc = s => norm(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
export const mins = t => { const [h,m]=(t||'00:00').split(':').map(Number); return (h||0)*60+(m||0); };
export const tm = m => { m=((Math.round(m)%1440)+1440)%1440; return String(Math.floor(m/60)).padStart(2,'0')+':'+String(m%60).padStart(2,'0'); };
export const haversineNm = (a,b,c,d) => { const R=6371000, rad=x=>x*Math.PI/180; const p1=rad(a),p2=rad(c),dp=rad(c-a),dl=rad(d-b); const x=Math.sin(dp/2)**2+Math.cos(p1)*Math.cos(p2)*Math.sin(dl/2)**2; return 2*R*Math.atan2(Math.sqrt(x),Math.sqrt(1-x))/1852; };
export const bearingDeg = (a,b,c,d) => { const rad=x=>x*Math.PI/180, deg=x=>x*180/Math.PI; const y=Math.sin(rad(d-b))*Math.cos(rad(c)); const x=Math.cos(rad(a))*Math.sin(rad(c))-Math.sin(rad(a))*Math.cos(rad(c))*Math.cos(rad(d-b)); return (deg(Math.atan2(y,x))+360)%360; };
export function downloadText(filename, text, type='text/plain;charset=utf-8') { const blob=new Blob([text],{type}); const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=filename; document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href),1000); }
