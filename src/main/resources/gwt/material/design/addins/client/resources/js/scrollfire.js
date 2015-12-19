function apply(offset, callback) {
    var callbacks = $.Callbacks();
    var done;
    function stickyScroll(e) {

        if( window.pageYOffset > offset) {
            if(done !== true){
                callbacks.add(callback);
                callbacks.fire();
                done = true;
            }
        }else{
            if(done === true){
                done = false;
            }
        }
    }

    window.addEventListener('scroll', stickyScroll, false);
}