// CALENDER

document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 'auto',
    events: [
      // Placeholder: add logged period days here (manually or from Firebase)
      {
        title: 'Period',
        start: '2025-06-21',
        display: 'background',
        backgroundColor: '#ffe4ec',
        borderColor: '#f08080'
      },
      {
        title: 'Period',
        start: '2025-06-22',
        display: 'background',
        backgroundColor: '#ffe4ec',
        borderColor: '#f08080'
      }
    ]
  });

  calendar.render();
});

// Navigation placeholders
function goToCyclePage() {
  window.location.href = 'cycleTracker.html'; // Create this page later
}

function goToPCODPage() {
  window.location.href = 'pcodRisks.html'; // Create this page later
}