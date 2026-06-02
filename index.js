const token = window.location.hash.substring(1);

if (token) {
  window.location =
    "https://YOUR-WORKER.workers.dev/file/" + token;
}
