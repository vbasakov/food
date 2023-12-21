﻿(()=>{"use strict";var __webpack_modules__={396445:(e,t,o)=>{o.d(t,{default:()=>w});var a=o(667294),r=o(887854),i=o.n(r),n=o(408091),d=o(634777),l=o(379333),_="0 0 56 56",s="error_outline_56",p=!1;function u(){p||((0,d.addSpriteSymbol)(new(i())({id:s,viewBox:_,content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="error_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52 4 41.255 4 28 14.745 4 28 4zm0 3C16.402 7 7 16.402 7 28s9.402 21 21 21 21-9.402 21-21S39.598 7 28 7zm0 27a2 2 0 110 4 2 2 0 010-4zm0-17.5a1.5 1.5 0 011.5 1.5v11l-.007.144A1.5 1.5 0 0126.5 29V18l.007-.144A1.5 1.5 0 0128 16.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>'})),p=!0)}var c=function(e){return(0,d.useIsomorphicLayoutEffect)((function(){u()}),[]),a.createElement(l.SvgIcon,(0,n.assign)({},e,{viewBox:_,id:s,width:isNaN(e.width)?56:+e.width,height:isNaN(e.height)?56:+e.height}))};c.mountIcon=u;const w=c},383517:(e,t,o)=>{var a=o(128533),r=o(250777),i=o(88181),n=o(593026),d=o(838571),l=o(907851),_=o(229884);window.Page=r.default,window.page=r.default,window.Wall=i.default,window.wall=i.default,window.WallUpload=n.default,window.Composer=d.default,window._postsSendTimer||(window._postsSendTimer=setTimeout(r.default.postsSend,1e4));try{stManager.done("page.js"),(0,a.tq)().setInteractiveHandler("Wall/fake_news_info",(e=>{var t=e.payload,o=t.event,a=t.dataAttrs;null==o||o.preventDefault();var r=a.title,i=a.text,n=a.more_button_text,d=a.more_button_url,l=a.ok_button_text;(0,_.showFakeInfoNotification)({title:r,text:i,more_button_text:n,more_button_url:d,ok_button_text:l}),ajax.post("al_page.php",{act:"track_fake_news_caption_clicked"})})),(0,a.tq)().setInteractiveHandler("Page/owner_new_photo",(e=>{try{var t=e.payload.dataAttrs.options,o=JSON.parse(t),a=o.ownerId;o.useNewForm?r.default.ownerAvatarUpload(a):r.default.ownerPhoto(a)}catch(e){(0,l.showErrorBox)(getLang("global_error"))}})),(0,a.tq)().setInteractiveHandler("Page/owner_edit_photo",(e=>{try{var t=e.payload.dataAttrs.options,o=JSON.parse(t),a=o.ownerId,i=o.hash;o.useNewForm?r.default.ownerAvatarEdit(a,i):r.default.ownerCrop(a,i)}catch(e){(0,l.showErrorBox)(getLang("global_error"))}})),(0,a.tq)().setInteractiveHandler("Page/owner_set_exist_photo",(e=>{try{var t=e.payload.dataAttrs.options,o=JSON.parse(t),a=o.photo;o.useNewForm?r.default.ownerAvatarSelect(a):showBox("al_page.php",{act:"owner_photo_edit",photo:a},{stat:["owner_photo.css",jsc("web/owner_photo.js"),"tagger.css",jsc("web/tagger.js")]})}catch(e){(0,l.showErrorBox)(getLang("global_error"))}}))}catch(e){}},838571:(e,t,o)=>{o.d(t,{default:()=>s});o(751876),o(283946),o(59357),o(21466);var a=o(414914),r=o(442699),i=o(917685),n=o(469433),d=o(190148),l=o(927663),_={init:function(e,t){if(!(e=ge(e)))return null;var o=(0,a.data)(e,"composer");if(o)return o;o={input:e,inited:!1,options:t},(0,a.data)(e,"composer",o),o.wddWrap=(0,a.ce)("div",{className:"composer_wdd clear_fix "+(t.wddClass||""),id:e.id+"_composer_wdd",innerHTML:'<input type="hidden" id="'+e.id+'_composer_wdd_term"/>'},{width:t.width||(0,a.getSize)(e)[0]}),t.appendTo&&(0,r.isFunction)(t.appendTo)?t.appendTo(o.wddWrap):(0,a.domInsertBefore)(o.wddWrap,e.nextSibling),o.wddInput=o.wddWrap.firstChild,o.wdd=WideDropdown.initSelect(o.wddWrap,extend({text:o.wddInput,input:e,noResult:t.lang.noResult||"",introText:t.lang.introText||"",toup:t.toup,wddOpts:t.wddOpts,searchKeys:t.searchKeys,width:"auto",onItemSelect:_.onItemSelect.bind(_).pbind(o)},t.wddOpts||{url:"hints.php",params:{act:"a_json_friends",from:"composer"}})),e.dd=o.wddWrap.id,_.initEvents(o),t.media&&(o.addMedia=new MediaSelector(t.media.lnk,t.media.preview,t.media.types,t.media.options,t.media.gearEl,t.media.actionsEl)),(0,a.setStyle)(o.wddWrap,"width",""),o.inited=!0,_.updateAutoComplete(o),o.edit=t.edit,o.isReply=t.isReply,_.updateArticleConvertSuggest(o);var i=cur.onMediaChanged;return cur.onMediaChanged=function(){_.updateArticleConvertSuggest(o),i&&i()},o},initEvents:function(e){addEvent(e.input,"keyup keydown keypress",_.onKeyEvent.pbind(e)),addEvent(e.input,"click mousedown mouseup focus blur paste",_.onMouseEvent.pbind(e))},destroy:function(e){WideDropdown.deinit(e.wddWrap),(0,a.cleanElems)(e.input,e.wddWrap),(0,a.re)(e.wddWrap),e.inited=!1,e.addMedia&&e.addMedia.destroy(),(0,a.data)(e.input,"composer",null),(0,a.re)(e.articleConvertEl),e.articleConvertEl=!1},onKeyEvent:function(e,t){var o=!t.shiftKey&&inArray(t.keyCode,[KEY.UP,KEY.DOWN,KEY.RETURN]),n=e.wdd&&o;if("keypress"==t.type||"keydown"==t.type){if(t.keyCode==KEY.RETURN||10==t.keyCode){if(e.select&&e.select.isVisible())return(0,i.triggerEvent)(document,t.type,t),(0,i.cancelEvent)(t);if(t.ctrlKey&&(0,r.isFunction)(e.options.onSubmit))return!0}if(t.keyCode==KEY.TAB){var d=e.input,l=window.Emoji?Emoji.editableVal(d):"",s=_.getCursorPosition(d),p=(l.substr(0,s)+String.fromCodePoint(1)+l.substr(s)).match(/^[\s\S]*(@|\*)[\S]+\s*\([\s\S]*?\001[\s\S]*?\)\s*/);if(p){var u=p[0].length-1;return(0,a.elfocus)(e.input,u,u),(0,i.cancelEvent)(t)}}var c=0;for(var w in e.wdd.shown)c+=1;if(n&&(0,a.isVisible)(e.wdd.listWrap)&&c)return t.type==(browser.opera&&!browser.chrome?"keypress":"keydown")&&WideDropdown._textEvent(t),(0,i.cancelEvent)(t)}if("keyup"==t.type&&!n){if(65==t.keyCode&&t.ctrlKey)return;e.wdd&&inArray(t.keyCode,[KEY.SPACE,KEY.HOME,190,191,78,55,49])&&_.hideSelectList(e)}"keyup"!=t.type||n&&t.keyCode!=KEY.RETURN||_.updateAutoComplete(e,t),_.updateArticleConvertSuggest(e)},isArticleConvertSuggestAvailable:function(e){if(e.edit||e.isReply)return!1;var t=!!cur.wallAddMedia&&cur.wallAddMedia.types,o=!1;if(t)for(var a=0;a<t.length;a++)if("article"==t[a][0]){o=!0;break}if(!o||!(0,n.isArticleEditorAvailable)())return!1;var r=!0;return each(cur.wallAddMedia.getMedias()||[],(function(e,t){if(!inArray(t[0],["photo","video","postpone","mark_as_ads"]))return r=!1,!1})),!!r&&!!(cur.options.articleConvertThreshold>0&&e.curValue.length>=cur.options.articleConvertThreshold)},updateArticleConvertSuggest:function(e){if(_.isArticleConvertSuggestAvailable(e)){if(!e.articleConvertEl){var t=gpeByClass("post_field_wrap",e.input),o=geByClass1("post_actions_btns",t);e.articleConvertEl=(0,a.se)('<button class="article_post_convert round_button">'+getLang("profile_convert_to_article_short")+"</button>"),o?t.insertBefore(e.articleConvertEl,o):t.appendChild(e.articleConvertEl),removeEvent(e.articleConvertEl),addEvent(e.articleConvertEl,"click",(function(){cur.postComposer=e;var t=[];each(cur.wallAddMedia.getMedias()||[],(function(e,o){inArray(o[0],["photo","video"])&&t.push(o[0]+"_"+o[1])})),(0,n.openArticleEditor)(cur.oid,0,{text:e.curValue,medias:t})}))}(0,a.show)(e.articleConvertEl)}else(0,a.re)(e.articleConvertEl),delete e.articleConvertEl},onMouseEvent:function(e,t){"blur"!=t.type?("focus"!=t.type&&"click"!=t.type||_.updateAutoComplete(e,t),"paste"==t.type&&setTimeout(_.updateAutoComplete.pbind(e,t),0)):_.hideSelectList(e)},updateAutoComplete:function(e,t){var o=e.input,a=(e.options&&e.options.getValue||window.Emoji&&Emoji.editableVal||val)(o),r=Math.max(a.lastIndexOf("@"),a.lastIndexOf("*")),i=!1;if(r>-1){var n=_.getCursorPosition(o),d=a.substr(0,n),l=d.match(/(^|[\s.,:\'\"«»;>\)\(]|\#[\w_\.\u0400-\u04FF]+)[@\*]([^,@\*\(\)\?\!\s\n\r \u00A0]*)$/);r=Math.max(d.lastIndexOf("@"),d.lastIndexOf("*")),l&&"."!==l[2].substr(-1)&&(i=l[2])}!1===i&&delete e.ignoredTerm,void 0!==e.ignoredTerm&&i==e.ignoredTerm&&(i=!1),e.curValue=a,e.curTerm=i,e.curPos=r,val(e.wddInput,i),_.toggleSelectList(e),!t||"keyup"!=t.type&&"paste"!=t.type||(e.options.onValueChange&&e.options.onValueChange(a,"keyup"!=t.type),e.addMedia&&e.addMedia.checkMessageURLs(a,"keyup"!=t.type),e.options.checkLen&&e.options.checkLen(a))},toggleSelectList:function(e){var t=e.curTerm;!1===t?_.hideSelectList(e):_.showSelectList(e,t)},hideSelectList:function(e){e.wddInput.focused=!1,WideDropdown._hideList(e.wdd);var t=e.options||{};t.onHide&&t.onHide()},showSelectList:function(e,t){function o(o){e.wddInput.focused=!0,WideDropdown.items(e.wdd.id,o||[]),WideDropdown._updateList(e.wdd,!1,t);var a=e.options||{};a.onShow&&a.onShow()}"function"==typeof cur.wallMentions&&(cur.wallMentions=cur.wallMentions()),cur.wallMentions&&"function"==typeof cur.wallMentions.then?cur.wallMentions.then((function(e){o(e)})):o(cur.wallMentions)},onItemSelect:function(e,t){if(!t)return!1;var o=t[2].replace("@",""),i=t[8]||t[1],n=e.curValue.substr(0,e.curPos),d=e.curValue.substr(e.curPos),l=!!n.match(/\#[\w_\.\u0400-\u04FF]+$/i);document.activeElement.classList.contains("_im_text")&&(/^(?:id|club)\d{1,}$/.test(o)||(l=!0));var s=e.options.poster,p=window.Emoji&&void 0!==e.input.emojiId||s;p||s?d=(0,r.clean)(d):i=(0,r.replaceEntities)(i),cur.selNum=(cur.selNum||0)+1;var u=new RegExp("^(@|\\*)"+(0,r.escapeRE)(e.curTerm)+"(?:\\s+\\((?:(.*?)\\))?\\s*)?","");return d=d.replace(u,(function(e,t,a){var r=t+o+" ";return l?r+=p||s?'<span id="tmp_sel_'+cur.selNum+'"></span>':"":(r+=(p||s?'<span id="tmp_sel_'+cur.selNum+'">':"")+"(",r+=i.replace(/[\(\)\]\[]/g,""),r+=")"+(p||s?"</span>":"")+" "),r})),l||!n||n.match(/[\.\(\)\?\!\s\n\r\'\"«» \u00A0]$/)||(d=" "+d),_.hideSelectList(e),p||s?(Emoji.val(e.input,(0,r.clean)(n)+d),Emoji.focus(e.input),Emoji.editableFocus(e.input,ge("tmp_sel_"+cur.selNum),!0),s&&s.checkText()):(val(e.input,n+d),(0,a.elfocus)(e.input)),(0,r.isFunction)(e.options.onItemSelect)&&e.options.onItemSelect(t),!1},getCursorPosition:function(e){if(void 0!==e.selectionStart)return e.selectionStart;if(void 0!==window.getSelection){var t=window.getSelection();if(!t||!t.rangeCount)return 0;var o=t.getRangeAt(0),r=o.cloneRange(),i=(0,a.ce)("div");return r.selectNodeContents(e),r.setEnd(o.startContainer,o.startOffset),i.appendChild(r.cloneContents()),(window.Emoji?Emoji.editableVal:val)(i).replace(/\n$/,"").length}return 0},getSendParams:function(e,t,o){var i=e.addMedia||{},n=i.chosenMedia||{},_=i&&i.getMedias?i.getMedias():[],s=i.shareData||{},p=e&&e.options.media&&e.options.media.options.limit||0,u=e.input,c=cur.posterWpe&&cur.posterWpeSendParams?cur.posterWpeSendParams.text:(0,r.trim)(window.Emoji?Emoji.editableVal(u):val(u)),w={message:c},f=0,m=hasClass(gpeByClass("post",u),"suggest");isArray(n)&&n.length&&_.push(clone(n)),(0,a.setStyle)(bodyNode,{cursor:"default"});var h=ge("wpe_cont"),g=geByClass1("wpe_error",h);function b(e){g||(g=(0,a.se)('<div class="wpe_error error"><div>'),h.insertBefore(g,(0,a.domFC)(h))),g.innerHTML=e.length>60?'<div class="msg_text">'+e+"</div>":e,(0,a.isVisible)(g)||((0,d.slideDown)(g,100),(0,l.scrollToY)((0,a.getXY)(g)[1]-15),(0,d.animate)(ge("box_layer_wrap"),{scrollTop:0}))}if(g&&hide(g),_.length&&each(_,(function(e,a){var n;if(isArray(a)&&a.length){var d=this[0],l=this[1];if(f>=p&&"postpone"!=d)return!1;switch(d){case"poll":var u=i.pollData(o);if(!u)return w.delayed=!0,!1;(0,r.intval)(l)&&(w.poll_id=(0,r.intval)(l)),l=u.question,delete u.question,w=extend(w,u);break;case"copyright":var h=i.copyrightData();if(h)return void(w=extend(w,h));break;case"share":if(s.failed||!s.title&&(!s.images||!s.images.length)&&!s.photo_url&&!s.video)return cur.shareLastParseSubmitted&&Date.now()-cur.shareLastParseSubmitted<2e3?(w.delayed=!0,!1):void 0;if((cur.options.share||{}).button_exclusive&&s.button_text&&s.button_action){var g;_.length>1&&(g=getLang("global_share_too_many_attachments")),w.message.split("\n").length-1>(cur.options.share||{}).button_exclusive_max_message_newlines&&(g=getLang("global_share_too_many_newlines")),w.message.length>(cur.options.share||{}).button_exclusive_max_message_len&&(g=getLang("global_share_too_long_message"));var v=(0,r.extractUrls)(" "+w.message+" "),E=(0,r.extractUrls)(" "+s.url+" ")[0];if(E&&v.length){"/"===E.query&&(E.query=""),"www."===E.domain.substr(0,4)&&(E.domain=E.domain.substr(4));for(var y=0;y<v.length;++y){var k=v[y];if("/"===k.query&&(k.query=""),"www."===k.domain.substr(0,4)&&(k.domain=k.domain.substr(4)),E.domain!=k.domain||E.query!=k.query){g=getLang("global_share_too_many_links");break}}}if(g)return b(g),w.delayed=!0,!1}if(!s.title)return b(getLang("global_share_title_required")),w.delayed=!0,!1;if(!s.url)return b(getLang("global_share_url_required")),w.delayed=!0,!1;if(s.url=new URL(s.url).href,s.video?(l=s.video_owner_id+"_"+s.video_id,w.snippet_video=1):l=s.prometheus?s.media:s.user_id&&s.photo_id&&!s.noPhoto?s.user_id+"_"+s.photo_id:"",s.share_upload_failed&&!l)return s.share_upload_failed=0,w.delayed=!0,!1;if(s.images&&s.images.length&&!isArray(s.images[cur.shareShowImg])&&!o&&!l&&!s.noPhoto&&!s.video)return i.uploadShare(t),w.delayed=!0,!1;if((cur.options.share||{}).require_image&&!l)return b(getLang("global_share_image_required")),w.delayed=!0,!1;s.initialPattern&&(0,r.trim)(c)==s.initialPattern&&(w.message=""),s.is_vk_mini_app&&(w.is_vk_mini_app=!0,w.is_photo_edit=s.isPhotoEdit,w.image_offset=cur.shareShowImg),extend(w,{url:s.url,module:cur.module,mode:s.mode,title:(0,r.replaceEntities)(s.title),description:(0,r.replaceEntities)(s.description),button_text:(0,r.replaceEntities)(s.button_text),button_action:s.button_action,extra:s.extra,extra_data:s.extraData,photo_url:s.video?"":(0,r.replaceEntities)(s.photo_url),placeholder_inserted:s.placeholder_inserted,open_graph_data:(s.openGraph||{}).data,open_graph_hash:(s.openGraph||{}).hash});break;case"page":s.initialPattern&&(0,r.trim)(c)==s.initialPattern&&(w.message="");break;case"postpone":return w.postpone=val("postpone_date"+i.lnkId),void(cur.postponedLastDate=w.postpone);case"donut_duration":return;case"mark_as_ads":return void(w.mark_as_ads=1);case"pretty_cards":if(!i.prettyCardGallery)return;if(i.prettyCardGallery.needSendData())return i.prettyCardGallery.saveCards(t,(function(e){b(e)})),w.delayed=!0,!1;l=i.prettyCardGallery.getSendData().attachVal;break;case"donut_link":w["attach"+(f+1)+"_owner_id"]=null===(n=this[5])||void 0===n?void 0:n.owner_id}this[3]&&(0,r.trim)(c)==this[3]&&(w.message=""),m&&this[4]&&(l+="_"+this[4]),w["attach"+(f+1)+"_type"]=d,w["attach"+(f+1)]=l,f++}})),!i.multi&&(w.postpone||(i.postponeDate&&i.postponeIsTooltip||i.postponePreview)&&(w.postpone=val("postpone_date"+i.lnkId),cur.postponedLastDate=w.postpone),!w.copyright&&i.copyrightData)){var v=i.copyrightData();v&&(w=extend(w,v))}return i.multi||w.mark_as_ads||!i.markAsAds||(w.mark_as_ads=1),w},reset:function(e){var t=e.input,o=val(t),r=e.addMedia,i={value:o};return window.Emoji?Emoji.val(t,""):t.innerHTML="",r&&(i.urlsCancelled=clone(r.urlsCancelled),r.unchooseMedia(),r.urlsCancelled=[]),(0,a.re)(e.articleConvertEl),i},restore:function(e,t){var o=e.input,a=_.reset(e);return val(o,t.value||""),a}};const s=_},593026:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(66108),core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(296253),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(59357),_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(414914),_web_lib_message_box__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(791563),_web_lib_ui__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(705456),_web_lib_ui_util__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(960139),_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(442699),_shared_lib_convert__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(182408),WallUpload={_videoUploadIndex:null,photoUploaded:function(e,t){var o=void 0!==e.ind?e.ind:e,a=(e.fileName?e.fileName:e).replace(/[&<>"']/g,""),r=e.fileName?o+"_"+e.fileName:e,i=ge("upload"+r+"_progress_wrap");i&&hide(geByClass1("progress_x",i)),ajax.post("al_photos.php",extend({act:"choose_uploaded"},t),{onDone:function(e,t){WallUpload.addMedia().chooseMedia("photo",e,extend(t,{upload_ind:o+"_"+a}))},onFail:WallUpload.uploadFailed.pbind(e)})},uploadFailed:function(e,t){var o=void 0!==e.ind?e.ind:e,a=Upload.options[o],r=(e.fileName?e.fileName:e).replace(/[&<>"']/g,"");if("fileApi"==Upload.types[o]&&!a.wiki_editor){var i,n=e.fileName?o+"_"+e.fileName:e;cur.imMedia?((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.re)("upload"+n+"_progress_wrap"),i=cur.imMedia.lnkId,cur.addMedia[i].unchooseMedia()):cur.addMedia&&((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.re)("upload"+n+"_progress_wrap"),(i=(cur.attachMediaIndexes||{})[r])&&cur.addMedia[i].unchooseMedia()),1==a.filesTotalCount&&setTimeout((0,_web_lib_message_box__WEBPACK_IMPORTED_MODULE_4__.showFastBox)({title:getLang("global_error")},getLang("wall_add_photo_error")).hide,2e3)}(0,_web_lib_ui_util__WEBPACK_IMPORTED_MODULE_6__.topError)("Upload failed",{dt:-1,type:102,url:(ge("file_uploader_form"+o)||{}).action}),Upload.embed(o)},show:function(){cur.uploadInited&&("feed"==cur.wallType?removeClass(cur.uploadWrap,"post_upload_min_wrap"):(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.show)(cur.uploadWrap))},hide:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){cur.uploadInited&&("feed"==cur.wallType?addClass(cur.uploadWrap,"post_upload_min_wrap"):hide(cur.uploadWrap),hide("post_upload_dropbox"))})),addMedia:function(){return cur.dropboxAddMedia||cur.wallAddMedia},attachEl:function(){return WallUpload.dropboxAttachEl||ge("submit_post_box")},attachToEl:function(e){e=ge(e);var t=ge("post_upload_dropbox");if(WallUpload.dropboxAttachEl=e,!e||!t)return!1;e.insertBefore(t,(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domFC)(e))},checkDragDrop:function(){var e=browser,t=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_7__.floatval)(browser.version);return!!(e.msie&&t>=9||e.mozilla&&t>=3.5||e.chrome||e.safari)&&((window.XMLHttpRequest||window.XDomainRequest)&&(window.FormData||window.FileReader&&(window.XMLHttpRequest&&XMLHttpRequest.sendAsBinary||window.ArrayBuffer&&window.Uint8Array&&(window.MozBlobBuilder||window.WebKitBlobBuilder||window.BlobBuilder))))},initCallback:function(){cur.editingPost?WallUpload.init():Wall.showEditPost()},init:function(){cur.withUpload&&(cur.uploadAdded?WallUpload.show():(cur.uploadAdded=!0,window.Upload&&window.VideoInlineUpload?(WallUpload.initLoader(),Wall._videoUploadIndex=WallUpload.initVideoUploader()):stManager.add([jsc("web/upload.js"),"video_upload.js"],(function(){WallUpload.initLoader(),Wall._videoUploadIndex=WallUpload.initVideoUploader()}))))},initVideoUploader:function(){var e=cur.wallUploadVideoOpts;if(e){var t=ge("post_field_upload_video"),o=ge("post_upload_video_dropbox");e.options.from="post";var a=ge("send_post"),r={onUploadAllCompleteDone:function(){(0,_web_lib_ui__WEBPACK_IMPORTED_MODULE_5__.disableButton)(a,!1)},onUploadStartDone:function(){(0,_web_lib_ui__WEBPACK_IMPORTED_MODULE_5__.disableButton)(a,!0)}};return window.VideoInlineUpload.getUploadModule(t,o,e,WallUpload.addMedia(),r)}},initLoader:function initLoader(){removeEvent(bodyNode,"dragover dragenter");var data=cur.wallUploadOpts,field=ge("post_field");if(WallUpload.checkDragDrop()){cur.uploadWrap=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.ce)("div",{className:"post_upload_wrap fl_r",innerHTML:'<div id="post_field_upload" class="post_upload"></div>'}),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domInsertBefore)(cur.uploadWrap,field),cur.uploadVideoWrap=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.ce)("div",{className:"post_upload_video_wrap fl_r",innerHTML:'<div id="post_field_upload_video" class="post_upload_video"></div>'}),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.domInsertBefore)(cur.uploadVideoWrap,field);var submitBox=WallUpload.attachEl();submitBox.insertBefore((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.ce)("div",{id:"post_upload_dropbox",className:"post_upload_dropbox",innerHTML:'<div class="post_upload_dropbox_inner"><div class="post_upload_label drop_label">'+(data.opts.lang.wall_drop_media_here||"Drop files here")+'</div><div class="post_upload_label release_label">'+(data.opts.lang.wall_release_media_here||"Release button to attach files")+"</div></div>"}),submitBox.firstChild),cur.wallUploadInd=Upload.init("post_field_upload",data.url,data.params,{accept:"image/jpeg,image/png,image/gif",dragEl:bodyNode,dropbox:"post_upload_dropbox",file_input:null,file_name:"photo",file_size_limit:26214400,file_types_description:"Image files (*.jpg, *.jpeg, *.png, *.gif)",file_types:"*.jpg;*.JPG;*.jpeg;*.JPEG;*.png;*.PNG;*.gif;*.GIF",file_match:data.opts.ext_re,lang:data.opts.lang,noFlash:1,multiple:1,multi_progress:1,max_files:10,chooseBox:1,clear:1,type:"photo",max_attempts:3,server:data.opts.server,error:data.opts.default_error,error_hash:data.opts.error_hash,label:data.opts.label,wiki_editor:0,onUploadStart:function(e,t){var o=void 0!==e.ind?e.ind:e,a=Upload.options[o];"form"==Upload.types[o]&&(geByClass1("file",ge("choose_photo_upload")).disabled=!0),"fileApi"==Upload.types[o]&&(cur.notStarted&&(cur.preventBoxHide||boxQueue.hideLast(),delete cur.notStarted),a.multi_progress&&this.onUploadProgress(e,0,0))},onUploadComplete:function onUploadComplete(info,res){var params;try{params=eval("("+res+")")}catch(e){params=(0,_shared_lib_convert__WEBPACK_IMPORTED_MODULE_8__.fromQueryString)(res)}params.photos?WallUpload.photoUploaded(info,params):Upload.onUploadError(info)},onUploadProgress:function(e,t,o){var a=void 0!==e.ind?e.ind:e;if("fileApi"==Upload.types[a]){var r=(cur.attachMediaIndexes||{})[a];if(void 0===r||r&&cur.addMedia[r].chosenMedia||cur.imMedia){var i={loaded:t,total:o};e.fileName&&(i.fileName=e.fileName.replace(/[&<>"']/g,"")),WallUpload.addMedia().showMediaProgress("photo",a,i)}}},onUploadError:WallUpload.uploadFailed,onCheckServerFailed:function(){delete cur.uploadInited,WallUpload.hide()},onUploadCompleteAll:function(e){"form"==Upload.types[e]&&Upload.embed(e)},onDragEnter:function(){cur.editingPost?(Wall.hidePosterFeatureTooltip(),WallUpload.init()):Wall.showEditPost()},onNoFilteredCallback:function(e){Wall._videoUploadIndex&&Upload.onFileApiSend(Wall._videoUploadIndex,e)}}),cur.uploadInited=!0,WallUpload.show(),cur.wallUploadFromDrag&&(1==cur.wallUploadFromDrag&&(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_3__.show)("post_upload_dropbox"),delete cur.wallUploadFromDrag)}}};const __WEBPACK_DEFAULT_EXPORT__=WallUpload},229884:(e,t,o)=>{o.d(t,{showFakeInfoNotification:()=>_});var a=o(570655),r=o(667294),i=o(40897),n=o(881150),d=o(396445),l=function(e){var t=e.title,o=e.text,a=e.more_button_text,i=e.more_button_url,l=e.ok_button_text,_=e.onClose;return r.createElement("div",{className:"FakeInfoWarning__box"},r.createElement("div",{className:"FakeInfoWarning__imageContainer"},r.createElement(d.default,null)),r.createElement("div",{className:"FakeInfoWarning__title"},t),r.createElement("div",{className:"FakeInfoWarning__text"},o),!!i&&r.createElement("a",{href:i,target:"_blank",rel:"noopener"},a),r.createElement("div",{className:"FakeInfoWarning__buttonWrap"},r.createElement(n.default,{onClick:_,appearance:"primary"},l)))};function _(e){(0,i.showComponentInBox)(r.createElement(l,(0,a.__assign)({},e,{onClose:function(){(0,i.destroyComponentInBox)(!0)}})),{containerClass:"FakeInfoWarning"})}}},__webpack_module_cache__={},deferred,leafPrototypes,getProto;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var o=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(o.exports,o,o.exports,__webpack_require__),o.loaded=!0,o.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,t,o,a)=>{if(!t){var r=1/0;for(l=0;l<deferred.length;l++){for(var[t,o,a]=deferred[l],i=!0,n=0;n<t.length;n++)(!1&a||r>=a)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[n])))?t.splice(n--,1):(i=!1,a<r&&(r=a));if(i){deferred.splice(l--,1);var d=o();void 0!==d&&(e=d)}}return e}a=a||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>a;l--)deferred[l]=deferred[l-1];deferred[l]=[t,o,a]},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var o=Object.create(null);__webpack_require__.r(o);var a={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var r=2&t&&e;"object"==typeof r&&!~leafPrototypes.indexOf(r);r=getProto(r))Object.getOwnPropertyNames(r).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,__webpack_require__.d(o,a),o},__webpack_require__.d=(e,t)=>{for(var o in t)__webpack_require__.o(t,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},__webpack_require__.e=()=>Promise.resolve(),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={60339:0};__webpack_require__.O.j=t=>0===e[t];var t=(t,o)=>{var a,r,[i,n,d]=o,l=0;for(a in n)__webpack_require__.o(n,a)&&(__webpack_require__.m[a]=n[a]);if(d)var _=d(__webpack_require__);for(t&&t(o);l<i.length;l++)r=i[l],__webpack_require__.o(e,r)&&e[r]&&e[r][0](),e[i[l]]=0;return __webpack_require__.O(_)},o=self.webpackChunkvk=self.webpackChunkvk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var __webpack_exports__=__webpack_require__.O(void 0,[38288,68592,24509,94877,44284,18102,78003,18816,31242,90613,41140],(()=>__webpack_require__(383517)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();