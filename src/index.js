import { Router } from "./router.js"
import * as listeners from "./listeners.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")


router.handle()
listeners.create(router)
window.onpopstate = () => router.route()