export function averageNumber(entry, service) {
  return parseFloat(entry / (service - entry));
}

export function averageTime(entry, service) {
  return parseFloat(1 / (service - entry));
}

export function averageRate(entry, service) {
  return parseFloat(entry / service);
}

