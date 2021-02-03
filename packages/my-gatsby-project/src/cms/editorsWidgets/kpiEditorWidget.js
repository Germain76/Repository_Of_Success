import { toElement, toShortcode } from "../../utils";
const kpiEditorWidget = {
    // Internal id of the component
    id: "kpis",
    // Visible label
    label: "Medaillons",
    // Fields the user need to fill out when adding an instance of the component
    fields: [
      {
        name: "kpis",
        label: "Elements",
        widget: "list",
        fields: [
          { label: "Chiffre", name: "value", widget: "string" },
          { label: "Etiquette", name: "caption", widget: "string" },
        ],
      },
    ],
    // Pattern to identify a block as being an instance of this component
    pattern: /^{{< kpis.*/,
    // Function to extract data elements from the regexp match
    fromBlock: function (match) {
      // TODO : Regex attr by group & one char attr
      const regexp = /(\S+)=\"((?:\\.|[^"\\])*)"/g;
      const attrs = [...match[0].matchAll(regexp)];
      const kpis = [];
      let kpi = {};
      kpis.push(kpi);
      attrs.map((attr) => {
        switch (attr[1]) {
          case "value":
            if (kpi.value !== undefined) {
              kpi = { value: attr[2] };
              kpis.push(kpi);
            } else {
              kpis[kpis.length - 1].value = attr[2];
            }
            break;
          case "caption":
            if (kpi.caption !== undefined) {
              kpi = { caption: attr[2] };
              kpis.push(kpi);
            } else {
              kpis[kpis.length - 1].caption = attr[2];
            }
            break;
        }
      });
      return { kpis };
    },
    // Function to create a text block from an instance of this component
    toBlock: function ({ kpis }) {
      const block = toShortcode(
        "kpis",
        [],
        kpis ? kpis.map((e) => toShortcode("kpi", e)).join("") : null
      );
      return block;
    },
    // Preview output for this component. Can either be a string or a React component
    // (component gives better render performance)
    toPreview: function ({ kpis }) {
      return toElement(
        "ul",
        {
          class: "kpis",
        },
        kpis
          .map((e) =>
            toElement(
              "li",
              {},
              toElement("div", { class: "value" }, e.value) +
                toElement("div", { class: "caption" }, e.caption)
            )
          )
          .join("")
      );
    },
  };export default kpiEditorWidget;