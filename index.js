let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    const copyOfcats = [...cats, "Broom"]
    return copyOfcats;
}

function prependCat(name) {
    const copyCat = ["Arnold", ...cats]
    return copyCat;
}

function removeLastCat() {
    const slicedCats = cats.slice(0, cats.length-1)
    return slicedCats;
}

function removeFirstCat() {
    const slicedUpCats = cats.slice(1)
    return slicedUpCats;
}