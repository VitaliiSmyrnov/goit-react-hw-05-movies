export const getSortedCast = data => {
  const sortedCast = data.sort((a, b) => {
    if (a.profile_path !== null && b.profile_path !== null) {
      return 0; // порядок не змінюється
    }
    if (a.profile_path === null && b.profile_path !== null) {
      return 1; // a після b, бо b має profile_path
    }
    if (a.profile_path !== null && b.profile_path === null) {
      return -1; // a перед b, бо a має profile_path
    }
    return 0; // порядок не змінюється, обидва мають profile_path = null
  });

  return sortedCast;
};
