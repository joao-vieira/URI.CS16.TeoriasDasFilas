export function averageNumber(entry, service) {
  return parseFloat(entry / (service - entry)).toFixed(2);
}

export function averageTime(entry, service) {
  return parseFloat(1 / (service - entry)).toFixed(2);
}

export function averageRate(entry, service) {
  return parseFloat(entry / service).toFixed(2);
}

export function probability(entry, service, n) {
  const result = (1 - entry/service) * Math.pow((entry/service), n);
  return parseFloat(result).toFixed(2);
}