var endpointURL =
      _spPageContextInfo.siteAbsoluteUrl +
      "*******";
    $.ajax({
      url: endpointURL,
      method: 'GET',
      headers: { Accept: 'application/json; odata=verbose' },
      dataType: 'json',
      error: function (data) {
        console.log(data.statusText);
      },
    })
    .then(function (data){
        console.log(data);
        let tempArray = data.d.results;
        let events = new Array();
        tempArray.forEach(event => {
            events.push(
                {
                    title: event.Title,
                    start: event.Event_x0020_Date,
                    end: event.Event_x0020_End_x002d_Date,
                    url: event.Event_x0020_Link
                }
            )
        });
        console.log(events);
    })
