"use strict";var x,favorite=[],i=0,count=0;$(".radio-dsktop").click(function(){1==$(this).prop("checked")?(favorite.push($(this).val()),$(".card--li").append("<li>"+favorite[i]+"</li>"),i++):$(this).prop("checked")}),console.log(favorite),$(".data-btn").click(function(){setTimeout(function(){$(".for-design").fadeOut(300),$(".for-workflow").fadeOut(300),$(".data-btn").addClass("icon-card--active"),$(".design-btn").removeClass("icon-card--active"),$(".workflow-btn").removeClass("icon-card--active"),$(".data-btn img").attr("src","images/white-1.svg"),$(".design-btn img").attr("src","images/light-2.svg"),$(".workflow-btn img").attr("src","images/light-3.svg")},400),setTimeout(function(){$(".for-data").fadeIn(800)},700)}),$(".design-btn").click(function(){setTimeout(function(){$(".for-data").fadeOut(300),$(".for-workflow").fadeOut(300),$(".design-btn").addClass("icon-card--active"),$(".data-btn").removeClass("icon-card--active"),$(".workflow-btn").removeClass("icon-card--active"),$(".data-btn img").attr("src","images/light-1.svg"),$(".design-btn img").attr("src","images/white-2.svg"),$(".workflow-btn img").attr("src","images/light-3.svg")},400),setTimeout(function(){$(".for-design").fadeIn(800)},700)}),$(".workflow-btn").click(function(){setTimeout(function(){$(".for-data").fadeOut(300),$(".for-design").fadeOut(300),$(".workflow-btn").addClass("icon-card--active"),$(".design-btn").removeClass("icon-card--active"),$(".data-btn").removeClass("icon-card--active"),$(".data-btn img").attr("src","images/light-1.svg"),$(".design-btn img").attr("src","images/light-2.svg"),$(".workflow-btn img").attr("src","images/white-3.svg")},400),setTimeout(function(){$(".for-workflow").fadeIn(800)},700)});var que=1;$(".question-box").click(function(){var t=$(this);1==que?(setTimeout(function(){t.addClass("card"),t.children(".answer").fadeIn(300)},300),que=2):2==que&&(setTimeout(function(){t.removeClass("card"),t.children(".answer").fadeOut(300)},300),que=1)}),$(".category-question").click(function(){setTimeout(function(){$(".start-questions").fadeOut(300),$(".native-questions").fadeOut(300),$(".pricing-questions").fadeOut(300),$(".support-questions").fadeOut(300),$(".category-question").addClass("active-color"),$(".start-question").removeClass("active-color"),$(".native-question").removeClass("active-color"),$(".pricing-question").removeClass("active-color"),$(".support-question").removeClass("active-color")},400),setTimeout(function(){$(".category-questions").fadeIn(800)},700)}),$(".start-question").click(function(){setTimeout(function(){$(".category-questions").fadeOut(300),$(".native-questions").fadeOut(300),$(".pricing-questions").fadeOut(300),$(".support-questions").fadeOut(300),$(".start-question").addClass("active-color"),$(".category-question").removeClass("active-color"),$(".native-question").removeClass("active-color"),$(".pricing-question").removeClass("active-color"),$(".support-question").removeClass("active-color")},400),setTimeout(function(){$(".start-questions").fadeIn(800)},700)}),$(".native-question").click(function(){setTimeout(function(){$(".category-questions").fadeOut(300),$(".start-questions").fadeOut(300),$(".pricing-questions").fadeOut(300),$(".support-questions").fadeOut(300),$(".native-question").addClass("active-color"),$(".start-question").removeClass("active-color"),$(".category-question").removeClass("active-color"),$(".pricing-question").removeClass("active-color"),$(".support-question").removeClass("active-color")},400),setTimeout(function(){$(".native-questions").fadeIn(800)},400)}),$(".pricing-question").click(function(){setTimeout(function(){$(".category-questions").fadeOut(300),$(".start-questions").fadeOut(300),$(".native-questions").fadeOut(300),$(".support-questions").fadeOut(300),$(".pricing-question").addClass("active-color"),$(".start-question").removeClass("active-color"),$(".native-question").removeClass("active-color"),$(".category-question").removeClass("active-color"),$(".support-question").removeClass("active-color")},400),setTimeout(function(){$(".pricing-questions").fadeIn(800)},700)}),$(".support-question").click(function(){setTimeout(function(){$(".start-questions").fadeOut(300),$(".native-questions").fadeOut(300),$(".pricing-questions").fadeOut(300),$(".category-questions").fadeOut(300),$(".support-question").addClass("active-color"),$(".start-question").removeClass("active-color"),$(".native-question").removeClass("active-color"),$(".pricing-question").removeClass("active-color"),$(".category-question").removeClass("active-color")},400),setTimeout(function(){$(".support-questions").fadeIn(800)},700)});var f=1;function success(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3500}).fire({type:"success",title:"Edit Done Succefully"})}function accept(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3500}).fire({type:"success",title:"Request Accepted successfully"})}function Canceled(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3500}).fire({type:"success",title:"Request Refused successfully"})}function complain(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3500}).fire({type:"success",title:"Compain Sent successfully"})}function success2(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:5500}).fire({type:"success",title:"4SOFT has received your request successfully and we will answer soon"})}function success3(){Swal.mixin({toast:!1,position:"center",showConfirmButton:!1,timer:3e3}).fire({type:"success",title:"Updated successfully"})}function goUP(){window.scrollTo(0,0)}$(".post-all").click(function(){var t=this,e=$(this);1==f?(setTimeout(function(){e.children().children(".all-con").fadeOut(100)},100),setTimeout(function(){e.children().children(".post-image-box").children("img").css({width:"80px",height:"80px"}),e.css({backgroundColor:"#f5f9fa"}),e.children().children(".post-subname2").fadeIn(300)},100),f=2):2==f&&(setTimeout(function(){$(t).children().children(".post-subname2").fadeOut(100)},100),setTimeout(function(){$(t).children().children(".post-image-box").children("img").css({width:"180px",height:"180px"}),$(t).css({backgroundColor:"#FFF"}),$(t).children().children(".all-con").fadeIn(300)},200),f=1)}),$(".team-btn-1").click(function(){setTimeout(function(){$(".team-2").fadeOut(300)},400),setTimeout(function(){$(".team-1").fadeIn(800)},700)}),$(".team-btn-2").click(function(){setTimeout(function(){$(".team-1").fadeOut(300)},400),setTimeout(function(){$(".team-2").fadeIn(800)},700)}),$(".sub-card").click(function(){$(this).hasClass("sub")&&($(this).hide("slide",{direction:"right"},150),$(".main-card").hide("slide",{direction:"left"},150),$(this).show("slide",{direction:"right"},150),$(".main-card").show("slide",{direction:"left"},150)),$(this).addClass("color-shadow").removeClass("sub").removeClass("border-main"),$(".main-card").addClass("border-main").addClass("sub2").removeClass("color-shadow")}),$(".main-card").click(function(){$(this).hasClass("sub2")&&($(this).hide("slide",{direction:"left"},150),$(".sub-card").hide("slide",{direction:"right"},150),$(this).show("slide",{direction:"left"},150),$(".sub-card").show("slide",{direction:"right"},150)),$(this).addClass("color-shadow").removeClass("sub2").removeClass("border-main"),$(".sub-card").addClass("border-main").addClass("sub").removeClass("color-shadow")}),$(".pay11").click(function(){$(this).addClass("active-box"),$(".btn1").addClass("active-btn"),$(this).removeClass("non-active-box"),$(".btn1").removeClass("non-active-btn"),$(".pay22").addClass("non-active-box"),$(".btn2").addClass("non-active-btn"),$(this).css({opacity:1}),$(".pay22").css({opacity:.6})}),$(".pay22").click(function(){$(this).addClass("active-box"),$(".btn2").addClass("active-btn"),$(this).removeClass("non-active-box"),$(".btn2").removeClass("non-active-btn"),$(this).css({opacity:1}),$(".pay11").addClass("non-active-box"),$(".btn1").addClass("non-active-btn"),$(this).css({opacity:1}),$(".pay11").css({opacity:.6})}),$(".moreBox").slice(0,2).show(),0!=$(".blogBox:hidden").length&&$("#loadMore").show(),$("#loadMore").on("click",function(t){t.preventDefault(),$(".moreBox:hidden").slice(0,3).slideDown(),0==$(".moreBox:hidden").length&&$("#loadMore").fadeOut("slow")}),$(".moreBox2").slice(0,2).show(),0!=$(".blogBox2:hidden").length&&$("#loadMore2").show(),$("#loadMore2").on("click",function(t){t.preventDefault(),$(".moreBox2:hidden").slice(0,3).slideDown(),0==$(".moreBox2:hidden").length&&$("#loadMore2").fadeOut("slow")}),$(".moreBox3").slice(0,2).show(),0!=$(".blogBox3:hidden").length&&$("#loadMore3").show(),$("#loadMore3").on("click",function(t){t.preventDefault(),$(".moreBox3:hidden").slice(0,3).slideDown(),0==$(".moreBox3:hidden").length&&$("#loadMore3").fadeOut("slow")}),$(".web-btn").click(function(){setTimeout(function(){$(".mobile").fadeOut(300),$(".desktop").fadeOut(300)},400),setTimeout(function(){$(".web").fadeIn(800)},700)}),$(".mob-btn").click(function(){setTimeout(function(){$(".web").fadeOut(300),$(".desktop").fadeOut(300)},400),setTimeout(function(){$(".mobile").fadeIn(800)},700)}),$(".desk-btn").click(function(){setTimeout(function(){$(".mobile").fadeOut(300),$(".wen").fadeOut(300)},400),setTimeout(function(){$(".desktop").fadeIn(800)},700)}),$(".plus-appear").click(function(){var t=$(this);setTimeout(function(){$(".plus-appear").fadeOut(300)},400),setTimeout(function(){t.parent().parent().children("ul").fadeIn(800),$(".minus-dis").fadeIn(800)},700)}),$(".minus-dis").click(function(){var t=this;$(this);setTimeout(function(){$(t).parent().parent().children("ul").fadeOut(300),$(".minus-dis").fadeOut(300)},400),setTimeout(function(){$(".plus-appear").fadeIn(800)},700)}),$(window).on("scroll",function(){100<=$(window).scrollTop()?$(".nav-scroll").css({backgroundColor:"#FFF",boxShadow:"4px 4px 3px #F5F5F5"}):$(".nav-scroll").css({backgroundColor:"transparent",boxShadow:"none"})}),$(window).on("scroll",function(){100<=$(window).scrollTop()?$(".nav-scroll2").css({backgroundColor:"#FFF",boxShadow:"4px 4px 3px #F5F5F5"}):$(".nav-scroll2").css({backgroundColor:"#FFF",boxShadow:"none"})}),$("#modal1").on("hidden.bs.modal",function(t){$("#modal1 iframe").attr("src",$("#modal1 iframe").attr("src"))}),$(window).on("scroll",function(){300<=$(window).scrollTop()?$("#goUPButton").slideDown(700):$("#goUPButton").slideUp(700)}),$(document).ready(function(){$("a").on("click",function(t){if(""!==this.hash){t.preventDefault();var e=this.hash;$("html, body").animate({scrollTop:$(e).offset().top},1200,function(){window.location.hash=e})}})});var srcBtn=document.getElementById("src-btn2"),fileBtn=document.getElementById("file-btn2"),customTxt2=document.getElementById("customTxt2");srcBtn.addEventListener("click",function(){fileBtn.click()}),fileBtn.addEventListener("change",function(){fileBtn.value?customTxt2.innerHTML=fileBtn.value:customTxt2.innerHTML="No File Chosen yet !"});