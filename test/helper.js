// way to detect if a jQuery-selector returns an empty object
$.fn.exists = function () {
    return this.length !== 0;
};
