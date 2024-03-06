import * as routeActions from "./route-actions.js"

export function create(router) {
    document.addEventListener('click', (event) => {
        if (!event.target.href) return

        
        router.route()

        routeActions.toggleRoute(event.target)
    })
}