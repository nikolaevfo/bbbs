let scrollPrev = 0;
export default function isBackScroll() {
  const scrolled = document.documentElement.scrollTop;
  if (scrolled > 100 && scrolled > scrollPrev) {
    scrollPrev = scrolled;
    return true;
  }
  scrollPrev = scrolled;
  return false;
}
