import React from "react"
import { Form, Col, InputGroup, Button, Alert } from 'react-bootstrap'
import axios from "axios"
import * as qs from "query-string"


export const ContactForm = ({ location, success, error, submit, formFields, children }) => {
  const isBrowser = typeof window !== `undefined`;
  // formFields is a string when used in mdx shortcodes

  const fieldsDefinition = eval(formFields);
  const fieldsDefault = {};

  const pathname = location ? location.pathname : isBrowser && window.location.pathname;
  const locationValues = location ? qs.parse(location.search) : isBrowser && qs.parse(window.location.search);

  fieldsDefinition.map((field) => {
    fieldsDefault[field.name] = locationValues[field.name] ? locationValues[field.name] : '';
    return null;
  }); 
  
  const [validated, setValidated] = React.useState(false);
  const [fields, setFields] = React.useState(fieldsDefault);
  const [feedback, setFeedback] = React.useState(null);
  const [processing, setProcessing] = React.useState(false);


  const handleChangeField = (name) => (evt) => {
    fields[name] = evt.target.value || '';
    setFields({ ...fields });
  };
  
  const handleSubmit = async (event) => {

    const form = event.currentTarget;
    setProcessing(true);
    event.preventDefault();
    const formData = { ...fields, "form-name": 'Contact' };

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      //Send value via netlify
      const axiosOptions = {
        url: location.pathname,
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        data: qs.stringify(formData),
      }

      axios(axiosOptions)
        .then(response => {
          setFeedback({ status: 'success', message: success });
          form.reset()
        })
        .catch(err =>
          setFeedback({ status: 'danger', message: error }));
    }

    setValidated(true);
    setProcessing(false);

  };

  return (
    <Form name="Contact" noValidate netlify-honeypot="bot-field" action={pathname} validated={validated} onSubmit={handleSubmit} data-netlify="true">
      {feedback && (<Alert variant={feedback.status}>{feedback.message}</Alert>)}
      <input type="hidden" name="bot-field" />
      {fieldsDefinition.map((field, key) => (
        <Form.Row key={key}>
          <Form.Group as={Col} md="12" controlId={`customValidation${key}`}>
            <Form.Label>{field.label}</Form.Label>
            {
            field.type === 'textarea' ? (
              <>
                <Form.Control as="textarea" rows="3" name={field.name}
                  value={fields[field.name]}
                  onChange={handleChangeField(field.name)}
                />
              </>
            ) : (
              <>
                <InputGroup>
                  <Form.Control
                    required={field.required}
                    type={field.type}
                    name={field.name}
                    value={fields[field.name]}
                    onChange={handleChangeField(field.name)}
                    placeholder={field.placeholder}
                  />
                  {field.feedback && (
                    <Form.Control.Feedback type={field.feedback.type}>
                      {field.feedback.message}
                    </Form.Control.Feedback>
                  )}
                </InputGroup>
              </>
            )
            }
          </Form.Group>
        </Form.Row>
      ))}

      <Form.Row className="align-right" style={{ textAlign: "right" }}>
        <Button disabled={processing} type="submit">{submit}</Button>
      </Form.Row>
    </Form>
  );

};

ContactForm.defaultProps = {
  formFields: [
    {
      name: 'name',
      label: 'Nom',
      required: true,
      feedback: {
        type: 'invalid',
        message: 'Entrez votre nom.',
      },
      type: 'text',
      placeholder: 'Nom'
    },
    {
      name: 'email',
      required: true,
      label: 'Email',
      feedback: {
        type: 'invalid',
        message: 'Entrez votre adresse email.',
      },
      type: 'email',
      placeholder: 'john@doe.com'
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
    },
  ],
  success: "Merci pour votre message.",
  error: "Une erreur s'est produite lors de l'envoi du message.",
  submit: "Envoyer",
}