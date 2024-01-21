const sportsContainer = document.getElementById('sports-container');

fetch('./e/sports/java/s.json')
  .then(response => response.json())
  .then(sports => {
    sports.forEach(s => {
      const sportsElement = document.createElement('div');
      sportsElement.classList.add('X');
      sportsElement.innerHTML = `
          <p class="trending-heading">${s.name}</p>
          <p class="trending-text">${s.hashtag}</p>
          <p class="trending-heading">${s.numberposts}</p>
      `;
      sportsContainer.appendChild(sportsElement);
    });
  })
  .catch(error => console.error('Error fetching sports:', error));
