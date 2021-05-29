const imageInText = {
    id: "imageInText",
    label: "Image et texte",
    fields:
        [

            { name: 'image', label: 'Image', widget: 'image' },
            { name: 'author', label: 'Author', widget: 'markdown' },
            { name: 'title', label: 'Title', widget: 'markdown' },
            { name: 'text', label: 'Texte', widget: 'text' },
        ],



    //pattern: /^\<MdxTextImage image=(.*)\>(\n*.*){0,}(MdxTextImage\>)$/,
    pattern: /^<(MdxTextImage image=(.+?))>(?:[^<]+|<(?!MdxTextImage>))*?<\/MdxTextImage>/g,
    fromBlock: function (match) {
        console.log(match)
        let content = match && match[0] && match[0].matchAll(/"(.+?)"/g)
        let contentText = match && match[0] && match[0].match(/>(\n*.+?\n*)</)
        content = Array.from(content)
        let matchImage = content[0]
        let matchAuthor = content[1]
        let matchTitle = content[2]
        console.log(matchImage[1])
        console.log(matchAuthor[1])
        console.log(matchTitle[1])
        console.log(contentText[1])

/*
        if (!(content && contentText && content[0] && content[1] && content[2] && contentText[1])) {
            return { image: "", author: "", title: "", text: "" }
        }
        else {
            return { image:matchImage[1], author:matchAuthor[1], title: matchTitle[1], text: contentText[1]}
        }
*/
        if (content && contentText && content[0] && content[1] && content[2] && contentText[1]){
           return { image:matchImage[1], author:matchAuthor[1], title: matchTitle[1], text: contentText[1]}
        }
    },
    toBlock: function ({ image, author, title, text }) {
        //console.log({image,author,title,text})
        return `<MdxTextImage image="${image}" author="${author}" title="${title}">  ${text} </MdxTextImage>`
    },
    toPreview: function ({ image, author, title, text }) {
        return `<MdxTextImage image="${image}" author="${author}" title="${title}">  ${text} </MdxTextImage>`

    }
}
export default imageInText;
