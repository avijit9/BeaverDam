"use strict";

$(() => {
    window.p = new Player({
        $container: $("#player"),
        videoSrc: window.video.location,
        videoId: window.video.id,
    });
});
