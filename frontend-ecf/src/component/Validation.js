export default function Validation(values) {
  const errors = {}

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
  const tel_pattern = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/;

  if(values.name === "") {
    errors.name = "Un nom est Requis !";
  }

  if(values.firstname === "") {
    errors.firstname = "Un prénom est Requis !";
  }

  if(values.tel === "") {
    errors.tel = "Un numéro est Requis !";
  }else if (!tel_pattern.test(values.tel)) {
    errors.tel = "Le numéro est incorrect"
  }

  if(values.email === "") {
    errors.email = "Un email est Requis !"
  } else if (!email_pattern.test(values.email)) {
    errors.email = "L'email est incorrect"
  }

  return errors;
}


//   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
// if(values.password === "") {
//     errors.email = "Un Mot-de-passe est Requis !"
//   } else if (!password_pattern.test(values.password)) {
//     errors.email = "Le Mot-de-passe est incorrect"
//   }