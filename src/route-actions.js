const routeActions = {
    "/": (element) => {
        toggleSelectedElement(element)
    },
    "/universe": (element) => {
        toggleSelectedElement(element)
    },
    "/exploration": (element) => {
        toggleSelectedElement(element)
    },
}

export function toggleRoute(element) {
    const { pathname } = window.location
    routeActions[pathname](element)
}

function toggleSelectedElement(element) {
    const lastElementSelected = document.querySelector(".selected")
    
    element.classList.toggle("selected")
    lastElementSelected.classList.toggle("selected")
}