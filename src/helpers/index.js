export const addDays = (date, days) => {
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    return copy
}

export const calculateRemaining = (date, current = new Date()) => {

    let time = date - current.getTime();
    let remaining = {};

    if (time > 0) {
        remaining = {
            d: Math.floor(time / (1000 * 60 * 60 * 24)),
            h: Math.floor((time / (1000 * 60 * 60)) % 24),
            m: Math.floor((time / 1000 / 60) % 60)
        }
    }

    return remaining;
}