var routeMapp = [];
var route = (url, template) => {
    routeMapp.push({ 
        url,
        template
    });
}

var resolveRoute = () => {
    var url = window.location.hash.slice(1).toLowerCase() || "/";
    var templateId = routeMapp.find(x=>x.url == url).template
    if(templateId){
        fetch(`./Template/${templateId}.html`)
        .then(a=>a.text())
        .then((data)=>{
            document.getElementById("view").innerHTML = data;
        })
    }
}

window.addEventListener('load', resolveRoute);
window.addEventListener('hashchange',resolveRoute);


route("/", "home");
route("/home", "home");
route("/page-1", "page-1");
route("/page-2", "page-2");
route("/about", "about");