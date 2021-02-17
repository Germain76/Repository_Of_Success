import { checkPropTypes } from "prop-types"

const mdxTab = {
    id: "mdxTab",
    label: "Titre",
    fields: [{ name: 'mdxTab', label: 'Titres', widget: 'list', allow_add: true, fields: [{ name: `title`, label: `Titre`, widget: `string` }, { name: `url`, label: `url`, widget: `string` }] }],
   //pattern: /^<MdxTabs content=\{\[\{("title":"(\w*)(\s*){0,}"),("url":("((\/?)(\w*)(\/?)){1,}"))\}\]\}\/>$/, 
    pattern: /^<MdxTabs content=\{(.*)\}/, 
        //pattern: /^<MdxTabs.*/,
    fromBlock: function (match) {
      console.log(match)
      console.log(match[0])
      
      const content = match && match[0] && match[0].matchAll(/^<MdxTabs content=\{(.*)\}/g)
      console.log(content)
      if(!(content && content[1])){
        return {mdxTab :[ ]}
      }
        else {
          return { mdxTab: JSON.parse(content[1]) }
        }
    

    },
    toBlock: function ({mdxTab}) {
        console.log({mdxTab})
        return `<MdxTabs content={${JSON.stringify(mdxTab)}}/>`
  

    },
  toPreview :function ({mdxTab}){

    
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
export default mdxTab;