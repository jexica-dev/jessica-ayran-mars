console.log('Script loaded');

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM ready');

  const container = document.getElementById('container');
  const datasource = {
    provider: 'maptiler',
    apiKey: 'KgiXygh9DFjuV3B7traT',
  };

  console.log('About to initialize...');
  Procedural.init({ container, datasource });
  console.log('Initialized');

  Procedural.setRotationControlVisible(true);

  // Array of beautiful landmarks
  const landmarks = [
    // { name: 'Mont Blanc', latitude: 45.8326364, longitude: 6.8564201 },
    // { name: 'Grand Canyon', latitude: 36.0544, longitude: -112.1401 },
    { name: 'Mount Fuji', latitude: 35.3606, longitude: 138.7278 },
    // { name: 'Matterhorn', latitude: 45.9763, longitude: 7.6586 },
    // { name: 'Yosemite Valley', latitude: 37.7455, longitude: -119.5936 },
    { name: 'Norwegian Fjords', latitude: 61.0912, longitude: 6.7985 },

    { name: 'Black Forest, Germany', latitude: 48.3053, longitude: 8.1567 },
    { name: 'Redwood National Park', latitude: 41.2132, longitude: -124.0046 },

    {
      name: 'Olympic National Forest',
      latitude: 47.8021,
      longitude: -123.6044,
    },
  ];

  // Pick a random landmark
  const randomIndex = Math.floor(Math.random() * landmarks.length);
  const selectedLandmark = landmarks[randomIndex];
  console.log(selectedLandmark);

  // Display the random location
  Procedural.displayLocation(selectedLandmark);
  console.log('Location set:', selectedLandmark.name);

  // Add mouse movement controls
  document.addEventListener('mousemove', function (e) {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    const azimuth = mouseX * 360;
    const tilt = (mouseY - 0.5) * 90;

    Procedural.orbitTarget({
      azimuth: azimuth,
      tilt: tilt,
    });
  });
});

// Track mouse position for spotlight effect
document.addEventListener('mousemove', function (e) {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;

  document.documentElement.style.setProperty('--mouse-x', x + '%');
  document.documentElement.style.setProperty('--mouse-y', y + '%');
});
