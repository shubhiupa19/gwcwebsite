
/*
  // Get all elements with the class 'event-container'
  const eventContainers = document.querySelectorAll('.event-container');

  // Get the current date
  const currentDate = new Date();

  // Loop through each event container
  eventContainers.forEach(container => {
    // Get the event date from the data-event-date attribute
    const eventDateStr = container.getAttribute('data-event-date');
    const eventDate = new Date(eventDateStr);

    // Compare event date with current date
    if (eventDate < currentDate) {
      container.classList.add('grey'); // Add 'grey' class to the container
    }
  });
*/

// Get all event containers
const eventContainers = document.querySelectorAll('.event-container');

// Get the current date
const currentDate = new Date();

// Get the "Upcoming Events" and "Past Events" containers
const upcomingEventsContainer = document.querySelector('.upcoming-events');
const pastEventsContainer = document.querySelector('.past-events');

// Loop through each event container
eventContainers.forEach(eventContainer => {
  const eventDateStr = eventContainer.getAttribute('data-event-date');
  const eventDate = new Date(eventDateStr);

  // Compare event date with current date
  if (eventDate > currentDate) {
    // Move the upcoming event container to the "Upcoming Events" container
    upcomingEventsContainer.appendChild(eventContainer);
  } else {
    // Move the past event container to the "Past Events" container
    pastEventsContainer.appendChild(eventContainer);
  }
});
