const hash = window.location.hash.slice(1);
const index = parseInt(hash) || 0;

if (art[index]) {
  art[index].fn();
}
