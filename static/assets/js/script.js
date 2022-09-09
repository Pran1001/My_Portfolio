fetch("https://jsonplaceholder.typicode.com/posts").then((data)=>{
    // console.log(data);
    return data.json(); //converted to object
}).then((objectData)=>{
    console.log(objectData[0].title);
    let blogData="";
    objectData.map((values)=>{
        blogData+=`<div class=" card "  >
        <h5 class="card-title">${values.title} </h5>
        <p class="card-text">${values.body} </p>
        <button type="button" class="btn btn-primary ">Click</button>
        </div>`
    });
    document.getElementById("blog_body").innerHTML=blogData;
}).catch((err)=>{
    console.log(err);
})


function myFunction(){
    var a = document.getElementById("name").value;
    var b = document.getElementById("date").value;
    var c = document.getElementById("feedback_title").value;
    var d = document.getElementById("txt_msg").value;
    var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (var i = 0; i < checkboxes.length; i++) {
      array.push(checkboxes[i].value)
    }
    var f = document.querySelector('input[name="gender"]:checked').value;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(array);
    console.log(f);

    return false;
   }


function myFunction1() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
