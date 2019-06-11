MyBanners=new Array('banner1.jpg','banner2.jpg','banner3.jpg','banner4.jpg')
banner=0
function runbanners(){
    
myVar=setInterval(ShowBanners,2000)}
		  
function ShowBanners()
{ if (document.images)
{ banner++
if (banner==MyBanners.length) {
banner=0}
document.ChangeBanner.src=MyBanners[banner]
}
}
function stopbanner()
{clearInterval(myVar);}