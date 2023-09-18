
const routes = {
    "/":"/ROCKET/Stage06/Projet07/pages/home.html",
    "/about":"/ROCKET/Stage06/Projet07/pages/about.html",
    "/contact":"/ROCKET/Stage06/Projet07/pages/contact.html",
    404:"/ROCKET/Stage06/Projet07/pages/404.html",
}

function route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    handle()
}

function handle() {
    const { pathname }  = window.location
    const route = routes[pathname] || routes[404]

    fetch(route).then((data)=>{
      return  data.text()
    }).then((html)=>{
        document.querySelector("#app").innerHTML = html
        console.log(html)
    })
}

handle()

window.onpopstate = handle()

window.route = route()