const trendsContainer = document.getElementById('trends-container');

fetch('./e/trends/java/trends.json')
  .then(response => response.json())
  .then(trends => {
    trends.forEach(trend => {
      const trendElement = document.createElement('div');
      trendElement.classList.add('trends');
      trendElement.innerHTML = `
          <p class="trending-heading">${trend.name}</p>
          <p class="trending-text">${trend.hashtag}</p>
          <p class="trending-heading">${trend.numberposts}</p>
      `;
      trendsContainer.appendChild(trendElement);
    });
  })
  .catch(error => console.error('Error fetching trends:', error));
