

const editableText= document.getElementById('editable-text');

if(localStorage.getItem('savedText')){
  editableText.textContent=localStorage.getItem('savedText');
}


editableText.addEventListener('input', function(){

  localStorage.setItem('savedText',this.textContent);
})



// search.addEventListener('keydown', (event) => {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     var text = document.getElementById("search").value;
//     var cleanQuery = text.replace(/ /g, "+");
//     var url = 'https://www.google.com/search?q=' + cleanQuery;
    
//     window.location.href = url;
//   }
// });


