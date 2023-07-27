window.addEventListener("scroll", getScrollDistance);
window.addEventListener("resize", getScrollDistance);

function getScrollDistance() {
  const htmlEl = document.documentElement;
  const percentScreenHeightScrolled = htmlEl.scrollTop / htmlEl.clientHeight;
  htmlEl.style.setProperty(
    "--scroll--",
    Math.min(percentScreenHeightScrolled * 100, 100)
  );
}

getScrollDistance();
