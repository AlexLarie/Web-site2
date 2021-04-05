$(document).ready(function () {

  $("#form-button-id").click(function (event) {
    $('.contact-form__error_email').text('');
    $('.contact-form__error_tel').text('');
    $('.contact-form__error_name').text('');
    // читаем значения из input'ов формы обратной связи
    let name = $('#name').val()
    let email = $('#email').val()
    let number = $('#phone').val()

    let hasAnyError = false

    if (name === undefined || name === '') {
      hasAnyError = true
      $('.contact-form__error_name').text('Имя не может быть пустым')
    }

    if (email !== undefined || email !== '' ){
      function validateEmail(email) {
        var re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return (re.test(String(email).toLowerCase()));
      }
      if (!validateEmail(email)){
        hasAnyError = true
        $('.contact-form__error_email').text('Email введен не корректно');
      }
    }

    if ((email === undefined || email === '') && (number === undefined || number === '')) {
      hasAnyError = true
      $('.contact-form__error_email').text('Необходимо заполнить хотя бы одно поле контактов');
      $('.contact-form__error_tel').text('Необходимо заполнить хотя бы одно поле контактов');
    }

    if (!hasAnyError) {
      $('.contact-form__error_email').text('');
      $('.contact-form__error_tel').text('');
      $('.contact-form__error_name').text('');
      sendUserInto({
        name: name,
        email: email,
        number: number
      });
      go (); //код в main.js
      clear(); //код в main.js
    }
  })
})
function sendUserInto(user) {
  console.log(user)
  Email.send({
    Host : "iron.hostflyby.net",
    Username : "support@alexlariegroup.by",
    Password : "AlekseiBelov1995",
    To : "leshabelov@mail.ru",
    From : "support@alexlariegroup.by",
    Subject : "New user want to know your pricing",
    Body : `Name: ${user.name}, Email: ${user.email}, Phone: ${user.number}`
  }).then(
    message => console.log(message)
  );
}
