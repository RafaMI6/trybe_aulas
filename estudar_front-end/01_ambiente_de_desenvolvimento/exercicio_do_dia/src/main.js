import '../style.css';
import validator from 'validator';

const button = document.querySelector('button');

const calculateSecondDigit = (digitos, digito1) => {
  const eleven = 11;
  const ten = 10;
  let soma = 0;
  for (let i = 0; i < ten; i++) {
    soma += digitos[i] * (eleven - i);
  }
  const resto = (soma * ten) % eleven;
  const digito2 = resto === ten ? 0 : resto;
  if (digito1 === digitos[9] || digito2 === digitos[10]) {
    return true;
  }
};

const validationCpf = (input) => {
  const eleven = 11;
  if (input.length === eleven) {
    const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    if (regex.test(input)) {
      const digitos = input.split('').map((digito) => parseInt(digito, 10));
      let soma = 0;
      const nine = 9;
      const ten = 10;
      for (let i = 0; i < nine; i++) {
        soma += digitos[i] * (ten - i);
      }
      const resto = (soma * ten) % eleven;
      const digito1 = resto === ten ? 0 : resto;

      // Calcula o segundo dígito verificador
      const result = calculateSecondDigit(digitos, digito1);
      if (result) {
        return true;
      }
    }
  }
  return false;
};

button.addEventListener('click', () => {
  const select = document.querySelector('select').value;
  const input = document.querySelector('#inputId').value;
  const p = document.querySelector('p');

  if (select === 'email') {
    const result = validator.isEmail(input);
    if (result) {
      p.innerHTML = 'A validação retornou true';
    }
    return;
  }
  const result = validationCpf(input);
  if (result) {
    p.innerHTML = 'A validação retornou true';
    return;
  }
  p.innerHTML = 'A validação retornou false';
});
