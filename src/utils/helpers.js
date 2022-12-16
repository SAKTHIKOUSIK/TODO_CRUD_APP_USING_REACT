const date = new Date();

// to get the current Date
export const day = date.toLocaleDateString('default', {
    day: "numeric",
    month: "short",
    year: "numeric"
});

// to get the current Time
export const time = date.toLocaleTimeString('default', {
    hour: "2-digit",
    minute: "2-digit"
});