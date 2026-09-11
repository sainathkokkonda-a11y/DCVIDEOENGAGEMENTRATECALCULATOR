function calculateRate() {
  const views = parseFloat(document.getElementById('views').value) || 0;
  const likes = parseFloat(document.getElementById('likes').value) || 0;
  const comments = parseFloat(document.getElementById('comments').value) || 0;
  const shares = parseFloat(document.getElementById('shares').value) || 0;

  if (views <= 0) {
    alert('Please enter a valid number of views greater than 0.');
    return;
  }

  const totalInteractions = likes + comments + shares;

  if (totalInteractions > views) {
    alert('Total interactions (Likes + Comments + Shares) cannot exceed Total Views. Please check your numbers.');
    return;
  }

  const engagementRate = (totalInteractions / views) * 100;

  document.getElementById('rateValue').innerText = engagementRate.toFixed(2) + '%';
  
  const status = document.getElementById('statusText');
  if (engagementRate < 1) {
    status.innerText = 'Low Engagement Rate';
    status.style.color = '#d32f2f';
  } else if (engagementRate >= 1 && engagementRate <= 3.5) {
    status.innerText = 'Average Engagement Rate';
    status.style.color = '#f57c00';
  } else {
    status.innerText = 'High & Excellent Engagement Rate!';
    status.style.color = '#2e7d32';
  }

  document.getElementById('resultBox').style.display = 'block';
}

function clearFields() {
  document.getElementById('views').value = '';
  document.getElementById('likes').value = '';
  document.getElementById('comments').value = '';
  document.getElementById('shares').value = '';
  document.getElementById('resultBox').style.display = 'none';
}
