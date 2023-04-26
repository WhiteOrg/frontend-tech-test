export const msInADay = 1000 * 60 * 60 * 24;
export const countdownDate = new Date().getTime() + 7 * msInADay;
export const competitionStartDate = new Date(countdownDate).toUTCString();
export const apiUrl =
  "https://run.mocky.io/v3/5ab803b0-5f91-4855-9d2c-ef5c44d69bff";
export const errorMessage =
  "Fetch failed - please refresh your browser or check your internet connection";
