alert('wow');

let friends_list=document.getElementById("friends_list");
friends_list.innerHTML+="<p>wow</p>"
function friends_list_to_Received () {
  
  
    fetch("/getlist", {
        method: "post", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(window.localStorage)
         // body logindata type must match "Content-Type" header

    })
    .then(response => response.json())
    .then(friends_list_received => {
        console.log(friends_list_received);

     alert(JSON.stringify(friends_list_received));
    });
}

  function checksignin(){
    beforelogin.style.display="block";
    afterlogin.style.display="none";
    return fetchpromise(window.localStorage)
    .then(response => response.json())
      .then(checkresponsedata => {
        console.log("here responsedata is"+(JSON.stringify(checkresponsedata)));
        return Promise.resolve((checkresponsedata));
      });
  }
  function makechanges()
  {
  checksignin()
  .then(tochange => {
  
      console.log(JSON.stringify(tochange.EMAIL));
      if(tochange.success==true){
        beforelogin.style.display="none";
        afterlogin.style.display="block";
        nameafterlogin.innerHTML = tochange.FIRSTNAME;
        passvalues=tochange;
      }
      else{
        if(tochange.success==false){
            beforelogin.style.display="block";
        afterlogin.style.display="none";
         console.log("false");
        }
      }
    
  });
  }
  
  
  friends_list_to_Received();