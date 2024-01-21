const eContainer = document.getElementById('entertainment-container');

fetch('./e/ent/java/e.json')
  .then(response => response.json())
  .then(ent => {
    trends.forEach(e => {
      const eElement = document.createElement('div');
      trendElement.classList.add('X');
      trendElement.innerHTML = `
          <p class="trending-heading">${e.name}</p>
          <p class="trending-text">${e.hashtag}</p>
          <p class="trending-heading">${e.numberposts}</p>
      `;
      entContainer.appendChild(entElement);
    });
  })
  .catch(error => console.error('Error fetching ent:', error));
