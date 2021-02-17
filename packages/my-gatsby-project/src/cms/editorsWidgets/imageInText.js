const imageInText = {
    id: "imageInText",
    label: "Image et texte",
    fields:
        [
  
        { name: 'image', label: 'Image', widget: 'image'},
        {name: 'author', label: 'Author', widget: 'markdown'},
        {name: 'title', label: 'Title', widget: 'markdown'}, 
        { name: 'text', label: 'Texte', widget: 'text' },
    ],



    //pattern: /^\<MdxTextImage image=(.*)\>(\n*.*){0,}(MdxTextImage\>)$/,
    pattern: /^<(MdxTextImage image=(.+?))>(?:[^<]+|<(?!MdxTextImage>))*?<\/MdxTextImage>/g,
    fromBlock: function (match) {
        console.log(match)
        let content = match && match[0] && match[0].matchAll(/"(.+?)"/g)
        content = Array.from(content)
        let firstMatch = content[0]
        let secondMatch = content[1]
        let thirdMatch = content[2]
        let fourMatch = content [3]
        console.log(firstMatch[1])
        console.log(secondMatch[1])
        console.log(thirdMatch[1])



       
        return {text :"", image :""}
                  
    },
    toBlock: function ({image,author,title,text}) {
        //console.log({image,author,title,text})
        return `<MdxTextImage image="${image}" author="${author}" title="${title}">  ${text} </MdxTextImage>`
    },
    toPreview: function ({image,author,title,text}) {
        return `<MdxTextImage image="${image}" author="${author}" title="${title}">  ${text} </MdxTextImage>`
       
    }
}
export default imageInText;