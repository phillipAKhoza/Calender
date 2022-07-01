document.addEventListener('DOMContentLoaded', function() {

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next,today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      initialDate: new Date(),
      navLinks: true, 
      editable: true,
      dayMaxEvents: true, 
      events: [
        {
          title: 'All Day Event',
          start: '2022-06-24T13:37:30Z',
          end:  '2022-06-24T13:37:30Z',
          url: 'http://google.com/',
        },
        {
          groupId: 999,
          title: 'Meeting',
          start: '2022-06-05T09:00:00'
        },
        {
          groupId: 999,
          title: 'Conference Event',
          start: '2022-06-05T12:00:00'
        },
        {
          title: 'Long Event',
          start: '2020-09-07',
          end: '2020-09-10'
        },
        {
          title: 'Long Event',
          start: '2022-06-22',
          end: '2022-06-22'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2022-06-09T16:00:00'
        },
       
      ]
    });

    calendar.render();
  });