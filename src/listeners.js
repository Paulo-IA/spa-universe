export function create(router) {
    document.addEventListener('click', (event) => {
        if (!event.target.href) return

        
        router.route()
    })
}