// import {registerRoute} from 'workbox-routing';
// import {CacheFirst, StaleWhileRevalidate} from 'workbox-strategies';
// import {CacheableResponsePlugin} from 'workbox-cacheable-response';
// import {ExpirationPlugin} from 'workbox-expiration';

// // Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
// registerRoute(
//   ({url}) => url.origin === 'https://fonts.googleapis.com',
//   new StaleWhileRevalidate({
//     cacheName: 'google-fonts-stylesheets',
//   })
// );

// // Cache the underlying font files with a cache-first strategy for 1 year.
// registerRoute(
//   ({url}) => url.origin === 'https://fonts.gstatic.com',
//   new CacheFirst({
//     cacheName: 'google-fonts-webfonts',
//     plugins: [
//       new CacheableResponsePlugin({
//         statuses: [0, 200],
//       }),
//       new ExpirationPlugin({
//         maxAgeSeconds: 60 * 60 * 24 * 365,
//         maxEntries: 30,
//       }),
//     ],
//   })
// );




// //Afbeeldingen
// registerRoute(
//   ({request}) => request.destination === 'image',
//   new CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new ExpirationPlugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
//       }),
//     ],
//   })
// );


// //CSS en JS
// registerRoute(
//   ({request}) => request.destination === 'script' ||
//                   request.destination === 'style',
//   new StaleWhileRevalidate({
//     cacheName: 'static-resources',
//   })
// );


// //Offline use
// workbox.routing.registerRoute(
//   ({ event }) => event.request.mode === 'navigate',
//   async () => {
//     const defaultBase = '/index.html';
//     return caches
//       .match(workbox.precaching.getCacheKeyForURL(defaultBase))
//       .then(response => {
//           return response || fetch(defaultBase);
//       })
//       .catch(err => {
//         return fetch(defaultBase);
//       });
//   }
// );
