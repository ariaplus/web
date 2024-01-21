const sportsContainer = document.getElementById('sports-container');

fetch('s.json')
  .then(response => response.json())
  .then(trends => {
    sports.forEach(s => {
      const sportsElement = document.createElement('div');
      sportsElement.classList.add('sports');
      sportsElement.innerHTML = `
          <p class="trending-heading">${s.name}</p>
          <p class="trending-text">${s.hashtag}</p>
          <p class="trending-heading">${s.numberposts}</p>
      `;
      sportsContainer.appendChild(sportsElement);
    });
  })
  .catch(error => console.error('Error fetching sports:', error));
