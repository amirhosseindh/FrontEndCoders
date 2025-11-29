const CACHE_NAME = "react-pwa-cache-v1";


self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cacheFiles = await getAllBuildFiles(); // تابعی که تمام مسیرهای build را برمی‌گرداند
      return cache.addAll(cacheFiles);
    })
  );
  self.skipWaiting();
});


self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => (key !== CACHE_NAME ? caches.delete(key) : null))
        )
      )
  );
  self.clients.claim();
});

// Fetch handler: cache-first
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

async function getAllBuildFiles() {
  return [
    "/",
    "/index.html",
    "/about.html",
    "/contact.html",
    "/manifest.json",
    "/static/js/main.js",
    "/static/js/*.js",
    "/static/css/*.css",
    "/static/media/*.png",
    "/static/media/*.svg",
  ];
}
