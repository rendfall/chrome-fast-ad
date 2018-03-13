(function (root) {
    var $video = document.getElementsByTagName('video')[0];

    var FAST_RATE_VALUE = 10;
    var NORMAL_RATE_VALUE = 1;

    if ($video) {
        var currentRate = $video.playbackRate;

        $video.playbackRate = (currentRate === NORMAL_RATE_VALUE) ? FAST_RATE_VALUE: NORMAL_RATE_VALUE;

        if ($video.paused) {
            $video.play();
        }
    } else {
        alert('Sorry, no video on page...');
    }
})(this);
