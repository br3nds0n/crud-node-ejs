/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable camelcase */

$('#add_user').submit(function (event) {
  alert('Data Inserted Successfully!')
})

$('#update_user').submit(function (event) {
  event.preventDefault()

  const unindexed_array = $(this).serializeArray()
  const data = {}

  $.map(unindexed_array, function (n, i) {
    data[n.name] = n.value
  })

  const request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: 'PUT',
    data
  }

  $.ajax(request).done(function (response) {
    alert('Data Updated Successfully!')
  })
})

if (window.location.pathname == '/') {
  $ondelete = $('.table tbody td a.delete')
  $ondelete.click(function () {
    const id = $(this).attr('data-id')

    const request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: 'DELETE'
    }

    if (confirm('Do you really want to delete this record?')) {
      $.ajax(request).done(function (response) {
        alert('Data Deleted Successfully!')
        location.reload()
      })
    }
  })
}
