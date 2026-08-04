export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  // Post dates are calendar dates ('2026-08-03'), which Date parses as UTC
  // midnight. Formatting in the viewer's local zone then shifts the day
  // backwards anywhere west of UTC — a post written on the 3rd rendered as
  // the 2nd in Seattle. Pin the output to UTC so every reader sees the same
  // day the post was actually dated.
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
