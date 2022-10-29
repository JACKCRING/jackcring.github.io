const d = new Date()
const h = d.getHours();
const m = d.getMinutes();
const s = d.getSeconds();
clock.style.setProperty('--ds', s)
clock.style.setProperty('--dm', m + s/60)
clock.style.setProperty('--dh', h + m/60 + s/3600)