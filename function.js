const daycount = (date) => {
  const old_date = new Date(date);
  const now_date = new Date();

  const timed = now_date.getTime() - old_date.getTime();

  const day = timed / 86400000;
  if (day > 120) {
    return `last donate ${day} the donar is available ${day - 120} day `;
  } else {
    return `last donate ${day} the donar will be available after ${
      120 - day
    } day`;
  }
};
