import { Route } from "./route.js"

const route = new Route();

route.add("/","http://127.0.0.1:5505/Desafios/Stage-06---SPA-Universe/pages/home.html")
route.add("/universe","http://127.0.0.1:5505/Desafios/Stage-06---SPA-Universe/pages/universe.html")
route.add("/explorer","http://127.0.0.1:5505/Desafios/Stage-06---SPA-Universe/pages/explorer.html")
route.add(404,"http://127.0.0.1:5505/Desafios/Stage-06---SPA-Universe/pages/404.html")


route.handle()

window.onpopstate = () => { route.handle() }

window.route = () => { route.route() }