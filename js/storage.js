const KEY='regattaPwaV28State', GPS_KEY='regattaPwaV28GpsLog';
export function saveState(state){ localStorage.setItem(KEY, JSON.stringify(state)); }
export function loadState(){ try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null} }
export function clearState(){ localStorage.removeItem(KEY); }
export function saveGpsLog(log){ localStorage.setItem(GPS_KEY, JSON.stringify(log||[])); }
export function loadGpsLog(){ try{return JSON.parse(localStorage.getItem(GPS_KEY)||'[]')||[]}catch{return []} }
