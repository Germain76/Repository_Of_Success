const partenaire = {
    id: "partenaire",
    label: "Ajout d'un partenaire",
    fields:  
        [
            { name: 'nom', label: 'Nom', widget: 'markdown'},
            { name: 'logo', label: 'Logo', widget: 'image' },
            { name: 'url', label: 'Url', widget: 'string' },
            { name: 'description', label: 'Description', widget: 'text' }
        ],



    //pattern: /^\<MdxTextlogo logo=(.*)\>(\n*.*){0,}(MdxTextlogo\>)$/,
    pattern: /^<(Partenaire nom=(.+?))>(?:[^<]+|<(?!Partenaire>))*?<\/Partenaire>/g,
    fromBlock: function (match) {
        console.log(match)
        let content = match && match[0] && match[0].matchAll(/"(.+?)"/g)
        let contentDescription= match && match[0] && match[0].match(/>(\n*.+?\n*)</)

        content = Array.from(content)
        let matchnom = content[0]
        let matchlogo = content[1]
        let matchUrl = content[2]
  
  
        //console.log(matchnom [1])
        //console.log(matchlogo[1])
        //console.log(matchUrl[1])
       console.log(contentDescription[1])

        if (!(content && contentDescription && content[0] && content[1] && content[2]  && contentDescription[1]))
       {   
        return { image: "", author: "", title: "", text: "" }
    
        }
        else{
            return { nom:matchnom [1], logo:matchlogo[1], url: matchUrl[1], description: contentDescription[1]}
        }

        
       

    },
    toBlock: function ({ nom, logo, url, description }) {
        //console.log({logo,nom,url,description})
        return `<Partenaire nom="${nom}" logo="${logo}"  url="${url}"> ${description} </Partenaire>`
    },
    toPreview: function ({ nom, logo, url, description  }) {
        return `<Partenaire nom="${nom}" logo="${logo}"  url="${url}"> ${description} </Partenaire>`

    }
}
export default partenaire;