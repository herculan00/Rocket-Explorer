import { Route } from "./route.js"

const route = new Route();

route.add("/","/ROCKET/Stage06/Projet07/pages/home.html")
route.add("/about","/ROCKET/Stage06/Projet07/pages/about.html")
route.add("/contact","/ROCKET/Stage06/Projet07/pages/contact.html")
route.add(404,"/ROCKET/Stage06/Projet07/pages/404.html")


route.handle()

window.onpopstate = () => { route.handle() }

window.route = () => { route.route() }