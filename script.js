window.onload=()=>{
    var reader = new FileReader(),
        picker = document.getElementById("picker");
        table = document.getElementById("table");

        picker.onchange=()=>reader.readAsText(picker.files[0]);

        reader.onloadend=()=>{
          let csv = reader.result;
          table.innerHTML="";
          let rows = csv.split("\r\n");
          for(let row of rows){
            let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
            if(cols!=null)
            {
              let tr = table.insertRow();
              for(let col of cols)
              {
                let td = tr.insertCell();
                td.innerHTML = col.replace(/(^"|"$)/g,"");
              }
            }

          }
        
      };
  };