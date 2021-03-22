import React, { useState } from "react";
import { Email_Data } from './email/Email_Data';
import {Text} from './Text';
import { Numbers } from './Numbers';
import { PhoneNumber } from './PhoneNumber';
import "../style.css"

function Formular({formProp}) {
  const [formData, setFormData] = useState({
    mobile: '',
    email: '',
    passeword: '',
    confirmePasseword: '',
    numbersFields: '',
    stringFields: '',
  })
  const handlerChange = (fieldName) => {
    return (event) => {
      setFormData({ ...formData, [fieldName]: event.target ? event.target.value : event });
    }
  }
  // formField c'est le tableau
  //const listComp = arrayForm.map((comp, index) => <li key={index}>{comp}</li>)
  // dans le return c'est du JSX de base, avec accolade c'est du JS et () dans {} c'est du JSX
  return (
<>
   {formProp.map((comp, index) => 
   (

           (
        comp.type == 'text' && ( 
      <div key={index}> <Text handlerChange={handlerChange(comp.name)} placeholder={comp.placeholder} label={comp.label}/> </div>)
      )
        
        (
          comp.type == 'email' && (
          <div key={index}><Email_Data handlerChange={handlerChange(comp.name)} regex={comp.regex} placeholder={comp.placeholder} label={comp.label} />   </div> )
        )
    )

    )}
 </>
  );
  
}

Formular.defaultProps = {
  formProp: [
    {
      name: 'email',
      label: 'Email',
      regex:/\S+@\S+\.\S+/,
      required: true,
      feedback: {
        type: 'invalid',
        message: 'Entrez une adresse mail valide',
      },
      type: 'email',
      placeholder: 'exempleAdresse@gmail.com'
    },
    {
      name: 'Lastname',
      label: 'Nom',
      required: true,
      feedback: {
        type: 'invalide',
        message: 'Entrez votre nom',
      },
      type: 'text',
      placeholder: 'Nom',
    },
    {
      name: 'Firstname',
      label: 'Prénom',
      required: true,
      feedback: {
        type: 'invalide',
        message: 'Entrez votre prénom',
      },
      type: 'text',
      placeholder: 'Prénom',
    },
    {
      name: 'number',
      label: 'Nombre',
      regex:'',
      required: true,
      feedback: {
        type: 'invalid',
        message: 'Entrez un chiffre valide',
      },
      type: 'number',
      placeholder: '1,000.00'
    },
    {
      name: 'message',
      label:'Message',
      type:'textarea',
    }

  ],
}
export default Formular;