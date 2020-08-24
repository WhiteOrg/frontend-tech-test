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
            days: Math.floor(time / (1000 * 60 * 60 * 24)),
            hours: Math.floor((time / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((time / 1000 / 60) % 60),
            seconds: Math.floor((time / 1000) % 60)
        }
    }

    return remaining;
}