
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
  
  friends_list_to_Received();
  document.onload=friends_list_to_Received()