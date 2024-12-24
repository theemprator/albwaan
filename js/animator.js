function removeAnimatedClasses(element) {
    element.classList.forEach(className => {
        if (className.startsWith('animate__')) {
            element.classList.remove(className);
        }
    });
}

function deanimateElement(element) {
    removeAnimatedClasses(element);
}

function animateElement(element, animation) {
    removeAnimatedClasses(element);
    element.classList.add("animate__animated" + animation);
    element.classList.add("animate__" + animation);
}