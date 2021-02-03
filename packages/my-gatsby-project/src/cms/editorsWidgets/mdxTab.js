const mdxTabEditorWidget = {
    id: "mdxTab",
    label: "Titres",
    fields: [{ name: 'mdxTab', label: 'Titres', widget: 'list', allow_add: true, fields: [{ name: `title`, label: `Titre`, widget: `string` }, { name: `url`, label: `url`, widget: `string` }] }],
    pattern: /^<MdxTabs(\s*)content=[a-zA-Z](\s*){2}/, // il manque l'url et une boucle for 
    fromBlock: function (match) {
        //Objets javascript
    },
    toBlock: function ({mdxTab}) {
        console.log({mdxTab})
        return `<MdxTabs content={${JSON.stringify(mdxTab)}}/>`


    },
    toPreview :function ({mdxTab}){

     ${JSON.stringify(mdxTab)}
    }
}
//<MdxTabs content={[{"title": "Le concept", "url": "/le-concept"}, {"title": "Nos engagements", "url": "/pages/nos-engagments"}, {"title": "Fonctionnement", "url": "/pages/fonctionnement"}]} />
//indentify le mdx tab et doit extraire le groupe
//<MdxTabs content={(GROUPE)} /> puis ebsuite utilisé json.parse
//recuperer ligne chevron ouvert mdxTab il y en aura un ou plusieurs 
//JSON.parse(GROUPE)    pour qu'il renvoie
//[{"title": "Le concept", "url": "/le-concept"}, {"title": "Nos engagements", "url": "/pages/nos-engagments"}, {"title": "Fonctionnement", "url": "/pages/fonctionnement"}]
//fromblock avec le resultat de match 

//Dans le toBlock il faut créer une fonction qui permet de créer du MdxTab


//Permets il faut écire le tableau sous forme de Json