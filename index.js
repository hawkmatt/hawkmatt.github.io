const token = window.location.hash.substring(1);

if (token) {
  window.location =
    "https://token.hawkmatt.workers.dev/file/" + token;
}
