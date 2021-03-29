function importAll(r) {
    return r.keys().map(r);
  }
  
function getImagesByName(name){
const images = importAll(require.context('./assets/pokemon', false, /\.(png)$/));
for(let i=0;i<images.length;i++){
    if(images[i].default.toLowerCase().includes(name)){
        return images[i].default;
    }else continue;
}
}


export {getImagesByName};