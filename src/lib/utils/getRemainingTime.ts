export function getRemainingTime(
  testingHours?: boolean,
  secondsPassed?: number
) {
  const targetDate = new Date(2024, 11, 2); // December 1st, 2024
  const now = testingHours
    ? new Date(2024, 10, 30, 17, 50, 59 - (secondsPassed ?? 0))
    : new Date();

  const timeDifference = targetDate.getTime() - now.getTime();

  if (timeDifference <= 0) {
    return "0";
  }

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (daysDifference > 1) {
    return `${daysDifference} días`;
  }

  const secondsRemaining = Math.floor(timeDifference / 1000);
  const minutesRemaining = Math.floor(secondsRemaining / 60);
  const hoursRemaining = Math.floor(minutesRemaining / 60);

  const seconds = String(secondsRemaining % 60).padStart(2, "0");
  const minutes = String(minutesRemaining % 60).padStart(2, "0");
  const hours = String(hoursRemaining - 24).padStart(2, "0");
  if (hoursRemaining - 24 < 0) {
    return "0";
  }

  return `${hours}:${minutes}:${seconds}`;
}

export function areThereDaysLeft(testingHours?: boolean) {
  const targetDate = new Date(2024, 11, 2); // December 1st, 2024
  const now = testingHours ? new Date(2024, 10, 30, 17, 50, 0) : new Date();

  const timeDifference = targetDate.getTime() - now.getTime();
  if (timeDifference <= 0) {
    return false;
  }

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (daysDifference > 1) {
    return true;
  }
  return false;
}

export function isTomorrow(testingHours?: boolean) {
  const targetDate = new Date(2024, 11, 2); // December 1st, 2024
  const now = testingHours ? new Date(2024, 10, 30, 17, 50, 0) : new Date();

  const timeDifference = targetDate.getTime() - now.getTime();
  if (timeDifference <= 0) {
    return false;
  }

  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  if (daysDifference === 1) {
    return true;
  }
  return false;
}
