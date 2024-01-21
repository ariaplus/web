const entContainer = document.getElementById('entertainment-container');

fetch('./e/ent/java/e.json')
  .then(response => response.json())
  .then(ent => {
    ent.forEach(e => {
      const entElement = document.createElement('div');
      entElement.classList.add('X');
      entElement.innerHTML = `
          <p class="trending-heading">${e.name}</p>
          <p class="trending-text">${e.hashtag}</p>
          <p class="trending-heading">${e.numberposts}</p>
      `;
      entContainer.appendChild(entElement);
    });
  })
  .catch(error => console.error('Error fetching ent:', error));
