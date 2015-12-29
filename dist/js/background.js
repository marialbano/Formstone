/*! formstone v0.8.35 [background.js] 2015-12-29 | MIT License | formstone.it */

!function(a,b,c){"use strict";function d(a){z.iterate.call(B,s)}function e(){B=a(w.base)}function f(b){b.youTubeGuid=0,b.$container=a('<div class="'+x.container+'"></div>').appendTo(this),b.thisClasses=[x.base,b.customClass],this.addClass(b.thisClasses.join(" "));var c=b.source;b.source=null,h(b,c,!0),e()}function g(a){a.$container.remove(),this.removeClass(a.thisClasses.join(" ")).off(y.namespace),e()}function h(b,c,d){if(c!==b.source){if(b.source=c,b.responsive=!1,b.isYouTube=!1,"object"===a.type(c)&&"string"===a.type(c.video)){var e=c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);e&&e.length>=1&&(b.isYouTube=!0,b.videoId=e[1])}var f=!b.isYouTube&&"object"===a.type(c)&&(c.hasOwnProperty("mp4")||c.hasOwnProperty("ogg")||c.hasOwnProperty("webm"));if(b.video=b.isYouTube||f,b.playing=!1,b.isYouTube)b.playerReady=!1,b.posterLoaded=!1,l(b,c,d);else if("object"===a.type(c)&&c.hasOwnProperty("poster"))k(b,c,d);else{var g=c;if("object"===a.type(c)){var h,m=[],n=[];for(h in c)c.hasOwnProperty(h)&&n.push(h);n.sort(z.sortAsc);for(h in n)n.hasOwnProperty(h)&&m.push({width:parseInt(n[h]),url:c[n[h]],mq:window.matchMedia("(min-width: "+parseInt(n[h])+"px)")});b.responsive=!0,b.sources=m,g=i(b)}j(b,g,!1,d)}}else b.$el.trigger(y.loaded)}function i(a){var c=a.source;if(a.responsive){c=a.sources[0].url;for(var d in a.sources)a.sources.hasOwnProperty(d)&&(b.support.nativeMatchMedia?a.sources[d].mq.matches&&(c=a.sources[d].url):a.sources[d].width<b.fallbackWidth&&(c=a.sources[d].url))}return c}function j(b,c,d,e){var f=[x.media,x.image,e!==!0?x.animated:""].join(" "),g=a('<div class="'+f+'"><img></div>'),h=g.find("img"),i=c;h.one(y.load,function(){C&&g.addClass(x["native"]).css({backgroundImage:"url('"+i+"')"}),g.fsTransition({property:"opacity"},function(){d||m(b)}).css({opacity:1}),t(b),(!d||e)&&b.$el.trigger(y.loaded)}).attr("src",i),b.responsive&&g.addClass(x.responsive),b.$container.append(g),(h[0].complete||4===h[0].readyState)&&h.trigger(y.load),b.currentSource=i}function k(c,d,e){if(c.source&&c.source.poster&&(j(c,c.source.poster,!0,!0),e=!1),!b.isMobile){var f=[x.media,x.video,e!==!0?x.animated:""].join(" "),g='<div class="'+f+'">';g+="<video",c.loop&&(g+=" loop"),c.mute&&(g+=" muted"),g+=">",c.source.webm&&(g+='<source src="'+c.source.webm+'" type="video/webm" />'),c.source.mp4&&(g+='<source src="'+c.source.mp4+'" type="video/mp4" />'),c.source.ogg&&(g+='<source src="'+c.source.ogg+'" type="video/ogg" />'),g+="</video>",g+="</div>";var h=a(g),i=h.find("video");i.one(y.loadedMetaData,function(a){h.fsTransition({property:"opacity"},function(){m(c)}).css({opacity:1}),t(c),c.$el.trigger(y.loaded),c.autoPlay&&p(c)}),c.$container.append(h)}}function l(c,d,e){if(!c.videoId){var f=d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);c.videoId=f[1]}if(c.posterLoaded||(c.source.poster||(c.source.poster="http://img.youtube.com/vi/"+c.videoId+"/0.jpg"),c.posterLoaded=!0,j(c,c.source.poster,!0,e),e=!1),!b.isMobile)if(a("script[src*='youtube.com/iframe_api']").length||a("head").append('<script src="//www.youtube.com/iframe_api"></script>'),D){var g=c.guid+"_"+c.youTubeGuid++,h=[x.media,x.embed,e!==!0?x.animated:""].join(" "),i='<div class="'+h+'">';i+='<div id="'+g+'"></div>',i+="</div>";var k=a(i),l=a.extend(!0,{},{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:g,loop:c.loop?1:0,autoplay:1,origin:A.location.protocol+"//"+A.location.host},c.youtubeOptions);c.$container.append(k),c.player&&(c.oldPlayer=c.player,c.player=null),c.player=new A.YT.Player(g,{videoId:c.videoId,playerVars:l,events:{onReady:function(a){c.playerReady=!0,c.mute&&c.player.mute(),c.autoPlay&&c.player.playVideo()},onStateChange:function(a){c.playing||a.data!==A.YT.PlayerState.PLAYING?c.loop&&c.playing&&a.data===A.YT.PlayerState.ENDED&&c.player.playVideo():(c.playing=!0,c.autoPlay||c.player.pauseVideo(),k.fsTransition({property:"opacity"},function(){m(c)}).css({opacity:1}),t(c),c.$el.trigger(y.loaded)),c.$el.find(w.embed).addClass(x.ready)},onPlaybackQualityChange:function(a){},onPlaybackRateChange:function(a){},onError:function(a){},onApiChange:function(a){}}}),t(c)}else E.push({data:c,source:d})}function m(a){var b=a.$container.find(w.media);b.length>=1&&(b.not(":last").remove(),a.oldPlayer=null)}function n(a){var b=a.$container.find(w.media);b.length>=1&&b.fsTransition({property:"opacity"},function(){b.remove(),delete a.source}).css({opacity:0})}function o(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.pauseVideo();else{var b=a.$container.find("video");b.length&&b[0].pause()}a.playing=!1}}function p(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.playVideo();else{var b=a.$container.find("video");b.length&&b[0].play()}a.playing=!0}}function q(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.mute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!0)}a.playing=!0}a.mute=!0}function r(a){if(a.video){if(a.isYouTube&&a.playerReady)a.player.unMute();else{var b=a.$container.find("video");b.length&&(b[0].muted=!1)}a.playing=!0}a.mute=!1}function s(a){if(a.responsive){var b=i(a);b!==a.currentSource?j(a,b,!1,!0):t(a)}else t(a)}function t(a){for(var b=a.$container.find(w.media),c=0,d=b.length;d>c;c++){var e=b.eq(c),f=a.isYouTube?"iframe":e.find("video").length?"video":"img",g=e.find(f);if(g.length&&("img"!==f||!C)){var h=a.$el.outerWidth(),i=a.$el.outerHeight(),j=u(a,g);a.width=j.width,a.height=j.height,a.left=0,a.top=0;var k=a.isYouTube?a.embedRatio:a.width/a.height;a.height=i,a.width=a.height*k,a.width<h&&(a.width=h,a.height=a.width/k),a.left=-(a.width-h)/2,a.top=-(a.height-i)/2,e.css({height:a.height,width:a.width,left:a.left,top:a.top})}}}function u(b,c){if(b.isYouTube)return{height:500,width:500/b.embedRatio};if(c.is("img")){var d=c[0];if("undefined"!==a.type(d.naturalHeight))return{height:d.naturalHeight,width:d.naturalWidth};var e=new Image;return e.src=d.src,{height:e.height,width:e.width}}return{height:c[0].videoHeight,width:c[0].videoWidth}}var v=b.Plugin("background",{widget:!0,defaults:{autoPlay:!0,customClass:"",embedRatio:1.777777,loop:!0,mute:!0,source:null,youtubeOptions:{}},classes:["container","media","animated","responsive","native","fixed","ready"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_construct:f,_destruct:g,_resize:d,play:p,pause:o,mute:q,unmute:r,resize:t,load:h,unload:n}}),w=v.classes,x=w.raw,y=v.events,z=v.functions,A=b.window,B=[],C="backgroundSize"in b.document.documentElement.style,D=!1,E=[];A.onYouTubeIframeAPIReady=function(){D=!0;for(var a in E)E.hasOwnProperty(a)&&l(E[a].data,E[a].source);E=[]}}(jQuery,Formstone);