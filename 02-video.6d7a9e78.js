!function(){var e=document.querySelector("iframe"),t=new Player(e);var r=throttle((function(e){localStorage.setItem("videoplayer - current - time",e.seconds)}),1e3);t.on("timeupdate",r);var n=localStorage.getItem("videoplayer - current - time");n&&t.setCurrentTime(n).then((function(e){})).catch((function(e){e.name}))}();
//# sourceMappingURL=02-video.6d7a9e78.js.map
