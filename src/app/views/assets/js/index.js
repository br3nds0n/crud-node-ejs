/* eslint-disable object-shorthand */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable camelcase */

$('#add_user').submit(function (event) {
  alert('Usuário cadastrado com sucesso!')
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
    data: data
  }

  $.ajax(request).done(function (response) {
    alert('Usuário atualizado com sucesso!')
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

    if (confirm('Deseja deletar o usuário?')) {
      $.ajax(request).done(function (response) {
        alert('Usuário deletado com sucesso!')
        location.reload()
      })
    }
  })
}
