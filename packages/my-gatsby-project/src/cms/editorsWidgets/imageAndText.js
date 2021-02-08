const imageAndText = {
    id : "imageInText",
    label : "Image et texte",
    fields : [{name : 'image', label : 'Image', widget: 'image'}],
    fields : [{name : 'text', label : 'Texte', widget: 'text'}],
    pattern : /^(.*)/,
    fromBlock: function (match){
        return {text:` `}
    }, 
    toBlock: function ({text},{image} ){
        return {} 
    },
    toPreview : function ({text},{image}){

    }
}
export default imageAndText;