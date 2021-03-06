import './_polyfills';

export function addClasses(element, classes) {
    const elClasses = element.className.trim();
    const elClassesArray = (elClasses) ? elClasses.split(' ') : [];

    element.className = dedupe(classes.trim().split(' ').concat(elClassesArray)).join(' ');
}

export function animationEndEvent() {
    const tempElement = document.createElement('spoink');

    const animationEnds = {
        'animation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd',
        'MozAnimation': 'mozAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd',
    };

    for(const a in animationEnds) {
        if(typeof tempElement.style[a] !== 'undefined') return animationEnds[a];
    }
}

export function dedupe(array) {
    return array.filter((value, index, self) => self.indexOf(value) === index);
}

export function differ(haystack, needles) {
    return haystack.filter(value => needles.indexOf(value) < 0);
}

export function forEach(array, callback, _this) {
    for(let i = 0; i < array.length; i++) callback.call(_this, array[i], i);
}

export function getParents(element, filter) {
    if(typeof filter === 'undefined') filter = '*';

    const parents = [];

    let parent = element.parentNode;

    while(parent !== document) {
        if(parent.matches(filter)) parents.push(parent);

        parent = parent.parentNode;
    }

    return parents;
}

export function isVisible(element) {
    return (
        !!element
        && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
    );
}

export function merge(object1, object2) {
    for(const prop in object2) {
        if(object2.hasOwnProperty(prop)) object1[prop] = object2[prop];
    }

    return object1;
}

export function off(element, events, listener, options) {
    events.split(' ').forEach(event => {
        element.removeEventListener(event, listener, options);
    });
}

export function on(element, events, listener, options) {
    events.split(' ').forEach(event => {
        element.addEventListener(event, listener, options);
    });
}

export function removeClasses(element, classes) {
    const elClasses = element.className.trim();
    const elClassesArray = (elClasses) ? elClasses.split(' ') : [];

    element.className = differ(elClassesArray, classes.trim().split(' ')).join(' ');
}

export function transitionEndEvent() {
    const tempElement = document.createElement('spoink');

    const transitionEnds = {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'mozTransitionEnd',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
    };

    for(const t in transitionEnds) {
        if(typeof tempElement.style[t] !== 'undefined') return transitionEnds[t];
    }
}
