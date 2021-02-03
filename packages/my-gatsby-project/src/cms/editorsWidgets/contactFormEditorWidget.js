import { toElement, toShortcode } from "../../utils";const contactFormEditorWidget = {
    id: "contactForm",
    label: "Formulaire",
    icon: "wpforms",
    pattern: /^{{< contact-form.*/,
    fromBlock: function (match) {
      const regexp = /(\S+)=\"((?:\\.|[^"\\])*)"/g;
      //Split shortcodes
      const sCodesR = /({{<[^>]*>?|[^<]*>})/g;
      const tagNameR = /{{<\s(\S+)/g;
      const attrs = [...match[0].matchAll(sCodesR)];
      const form = { fields: [] };
      for (let i in attrs) {
        const tagName = [...attrs[i][1].matchAll(tagNameR)][0][1];
        const attributes = [...attrs[i][1].matchAll(regexp)];
        switch (tagName) {
          case "contact-form":
            attributes.map((m) => {
              if (m[2] && m[2] != "undefined") {
                form[m[1]] = m[2];
              }
            });
            break;
          case "form-field":
            const attrObject = {};
            attributes.map((m) => {
              if (m[2]) {
                if (m[1] === "required") {
                  attrObject[m[1]] = m[2] == "true" ? true : false;
                } else if (m[1] === "options") {
                  attrObject[m[1]] = m[2].split(",").map((o) => {
                    const opt = o.split(":");
                    return {
                      value: opt[1],
                      label: opt[0],
                    };
                  });
                } else {
                  attrObject[m[1]] = m[2];
                }
              }
            });
            form.fields.push(attrObject);
            break;
        }
      }
      return form;
    },
    // Function to create a text block from an instance of this component
    toBlock: function ({ fields, success, error, submit }) {
      let inner = "";
      if (fields && fields.length) {
        inner = fields.map((f) => toShortcode("form-field", f)).join("");
      }
      return toShortcode(
        "contact-form",
        {
          success: success ? success : "",
          error: error ? error : "",
          submit: submit ? submit : "",
        },
        inner
      );
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function ({ fields, success, error, submit }) {
      let inner = "";
      if (fields && fields.length) {
        inner =
          fields
            .map((f) => {
              const labelAttrs = {
                class: "col-sm-2 col-form-label",
                for: `edit-${f.name}`,
              };
              if (f.type === "textarea") {
                const attrs = {
                  id: `edit-${f.name}`,
                  required: f.required,
                };
                return toElement(
                  "div",
                  { class: "form-group row" },
                  toElement("label", labelAttrs, f.label) +
                    toElement(
                      "div",
                      { class: "col-sm-10" },
                      toElement("textarea", attrs, "")
                    )
                );
              } else if (["radio", "checkbox", "select"].indexOf(f.type) !== -1) {
                let formItem = f.options
                  .map(
                    (option, i) =>
                      toElement("input", {
                        type: f.type,
                        id: `${f.name}${i}`,
                        name: f.name,
                        class: "control-input",
                        value: option.value,
                      }) +
                      toElement(
                        "label",
                        {
                          for: `${f.name}${i}`,
                          class: "control-label",
                        },
                        option.label
                      )
                  )
                  .join("");
                if (t.type === "select") {
                  formItem = toElement(
                    f.type,
                    { id: f.name, required: f.required },
                    f.options
                      .map((option) =>
                        toElement(
                          "option",
                          {
                            value: option.value,
                          },
                          option.label
                        )
                      )
                      .join("")
                  );
                }
              } else {
                const attrs = {
                  type: f.type == "file-multiple" ? "file" : f.type,
                  class: "rounded-lg form-control",
                  id: `edit-${f.name}`,
                  name: f.name,
                  placeholder: f.placeholder,
                  required: f.required,
                };
                return toElement(
                  "div",
                  { class: "form-group row" },
                  toElement("label", labelAttrs, f.label) +
                    toElement(
                      "div",
                      { class: "col-sm-10" },
                      toElement("input", attrs)
                    )
                );
              }
            })
            .join("") +
          toElement("input", {
            type: "submit",
            value: submit,
            class: "btn btn-primary",
          });
      }
      return toElement("form", { class: "contact-form" }, inner);
    },
    fields: [
      {
        name: "success",
        label: "Message de succès",
        widget: "string",
        required: false,
      },
      {
        name: "error",
        label: "Message d'erreur",
        widget: "string",
        required: false,
      },
      {
        name: "submit",
        label: "Bouton Envoyer",
        widget: "string",
        required: false,
      },
      {
        name: "fields",
        label: "Champs du formulaire",
        hint:
          "Liste des champs du formulaire. Le seul champ obligatoire est le champ 'email' (Nom).",
        widget: "list",
        collapsed: false,
        default: [
          {
            name: "email",
            type: "email",
            label: "E-mail",
            placeholder: "Votre adresse e-mail",
            required: true,
          },
          {
            name: "subject",
            type: "text",
            label: "Sujet",
            placeholder: "Sujet de votre message",
            required: true,
          },
        ],
        fields: [
          {
            name: "name",
            label: "Identifiant",
            widget: "string",
          },
          {
            name: "type",
            label: "Type",
            widget: "select",
            default: "text",
            options: [
              {
                label: "Texte",
                value: "text",
              },
              {
                label: "Email",
                value: "email",
              },
              {
                label: "Telephone",
                value: "phone",
              },
              {
                label: "Date",
                value: "date",
              },
              {
                label: "Fichier",
                value: "file",
              },
              {
                label: "Fichier multiple",
                value: "file-multiple",
              },
              {
                label: "Choix restraint",
                value: "radio",
              },
              {
                label: "Choix multiple",
                value: "checkbox",
              },
              {
                label: "Liste",
                value: "select",
              },
              {
                label: "Champ caché",
                value: "hidden",
              },
              {
                label: "Texte long",
                value: "textarea",
              },
            ],
          },
          {
            name: "label",
            label: "Intitulé",
            widget: "string",
            required: false,
          },
          {
            name: "placeholder",
            label: "Placeholder",
            widget: "string",
            required: false,
          },
          {
            name: "required",
            label: "Requis ?",
            widget: "boolean",
            required: false,
          },
          {
            name: "default",
            label: "Valeur par défaut",
            widget: "string",
            required: false,
          },
          {
            name: "options",
            label: "Options",
            hint:
              "Si le type est parmis Choix restraint, Choix multiple, Liste chaque option représente un choix.",
            widget: "list",
            required: false,
            fields: [
              { name: "label", label: "Label", widget: "string" },
              { name: "value", label: "Value", widget: "string" },
            ],
          },
        ],
      },
    ],
  };export default contactFormEditorWidget;