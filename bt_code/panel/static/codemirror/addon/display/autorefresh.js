(function(a){if(typeof exports=="object"&&typeof module=="object"){a(require("../../lib/codemirror"))}else{if(typeof define=="function"&&define.amd){define(["../../lib/codemirror"],a)}else{a(CodeMirror)}}})(function(b){b.defineOption("autoRefresh",false,function(d,e){if(d.state.autoRefresh){a(d,d.state.autoRefresh);d.state.autoRefresh=null}if(e&&d.display.wrapper.offsetHeight==0){c(d,d.state.autoRefresh={delay:e.delay||250})}});function c(d,f){function e(){if(d.display.wrapper.offsetHeight){a(d,f);if(d.display.lastWrapHeight!=d.display.wrapper.clientHeight){d.refresh()}}else{f.timeout=setTimeout(e,f.delay)}}f.timeout=setTimeout(e,f.delay);f.hurry=function(){clearTimeout(f.timeout);f.timeout=setTimeout(e,50)};b.on(window,"mouseup",f.hurry);b.on(window,"keyup",f.hurry)}function a(d,e){clearTimeout(e.timeout);b.off(window,"mouseup",e.hurry);b.off(window,"keyup",e.hurry)}});