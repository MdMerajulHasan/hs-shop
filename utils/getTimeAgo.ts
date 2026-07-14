export const getTimeAgo = (dateString: number) => {
  const now = new Date();
  const date = new Date(dateString);

  const diffMs = now.getTime() - date.getTime();

  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  if (days < 7) return `${days} days ago`;

  if (weeks === 1) return "1 week ago";
  if (weeks < 5) return `${weeks} weeks ago`;

  if (months === 1) return "1 month ago";
  if (months < 12) return `${months} months ago`;

  if (years === 1) return "1 year ago";

  return `${years} years ago`;
};
