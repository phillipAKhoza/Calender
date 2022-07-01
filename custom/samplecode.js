
function drawNewsTable() {
  $("#dvTable").html("");
  $('#dvTable').append(html);
  if ($.fn.DataTable.isDataTable('#newsTable'))
    $('#newsTable').DataTable().destroy();
  else {
    var endpointURL =
      _spPageContextInfo.siteAbsoluteUrl +
      "/_api/web/lists/getbytitle('news')/items?$orderby=Release_x0020_Date desc";
    $.ajax({
      url: endpointURL,
      method: 'GET',
      headers: { Accept: 'application/json; odata=verbose' },
      dataType: 'json',
      error: function (data) {
        console.log(data.statusText);
      },
    })
      .then(function (data) {
        if (data) {
          $('#newsTable').DataTable({
            pageLength: 10,
            ordering: true,
            order: [[1, 'desc']],
            data: data.d.results,
            columnDefs: [
              {
                title: 'Headline',
                targets: 0,
                render: function (data, type, full, meta) {
                  return full.Title.replace(/\w\S*/g, (w) =>
                    w.replace(/^\w/, (c) => c.toUpperCase())
                  );
                },
              },
              {
                title: 'Published Date',
                targets: 1,
                render: function (data, type, full, meta) {
                  return new Date(full.Release_x0020_Date).toLocaleDateString('en-ZA');
                },
              },
              {
                title: '',
                targets: 2,
                orderable: false,
                render: function (data, type, full, meta) {
                  return `<a href="/Pages/SingleNews.aspx?newsId=${full.Id}" class="h6 text-heading" style="text-transform: capitalize;" title="${full.Title}">Read More</a>`;
                },
              },
            ],
          });
$("#newsTable thead").addClass('table-dark');
        } else {
          alert('No news articles found!');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

$(document).ready(function () {
  drawNewsTable();
});
