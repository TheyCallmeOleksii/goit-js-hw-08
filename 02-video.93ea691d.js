const e=document.querySelector("iframe"),t=new Player(e);const n=throttle((function(e){localStorage.setItem("videoplayer - current - time",e.seconds)}),1e3);t.on("timeupdate",n);const o=localStorage.getItem("videoplayer - current - time");o&&t.setCurrentTime(o).then((function(e){})).catch((function(e){e.name}));
//# sourceMappingURL=02-video.93ea691d.js.map
