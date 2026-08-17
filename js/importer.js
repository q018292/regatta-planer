import { readWorkbook } from './data.js';
export async function importExcel(rakkenFile, bojenFile){ if(!rakkenFile || !bojenFile) throw new Error('Bitte Rakken- und Bojen-Datei auswählen.'); const [rawRakken, rawBojen] = await Promise.all([readWorkbook(rakkenFile), readWorkbook(bojenFile)]); return {rawRakken, rawBojen}; }
