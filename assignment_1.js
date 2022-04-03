let userName = "Asmongold TV";
let videoTitle = "NFT Scammers Finally Going to Jail, For A LONG Time | Asmongold Reacts";
let views = 82955;
const datePublished = "Apr 2, 2022";
let likes = 3.1;
let dislikes = 0;
let subscribers = 1.05;
let vidDescription = "They got them. Asmongold surprised to find out the authorities are finally punishing Crypto and NFT fraudsters and discusses with chat while watching KiraTV's video. This is NOT an April Fools joke – these people are going to jail, for a LONG time.";
let numComments = 404;
let videoLength = 326; //seconds
let commentUserName = "Konfuzion";
let commentText = "Asmon comparing the fraud of millions of dollars to him Ninjaing his guild bank in WOTLK is hilarious";
let thumbsUp = 147;
let thumbsDown = 0;
let numReplies = 7;
let videoAdName = "This AK Has No Stock - Full Raid - Escape From Tarkov";
let videoAdUserName = "LVNDMARK";
let videoAdViews = 19;
let videoAdTimeSincePost = 7; // hours
let videoAdTag = "New";

document.write(`
<header class="header">
<nav class="top-nav">
    <div class="left-menu">
        <img class="hide-mobile" src="img/hamburger_menu_icon.png" alt="">
        <img src="img/youtube_logo.png" alt="">
    </div>
    <div class="center-menu">
        <input class="hide-mobile" type="text">
        <a class="spy-glass-icon" href=""><i class="fa-solid fa-magnifying-glass"></i></a>
        <a class="mic-icon hide-mobile" href=""><i class="fa-solid fa-microphone"></i></a>
    </div>
    <div class="right-menu">
        <a class="create-icon hide-mobile" href=""><i class="fa-solid fa-video"></i></a>
        <a class="apps-icon hide-mobile" href=""><i class="fa-brands fa-app-store"></i></a>
        <a class="bell-icon hide-mobile" href=""><i class="fa-solid fa-bell"></i></a>
        <a class="user-icon" href=""><i class="fa-solid fa-user"></i></a>
    </div>
</nav>
<div class="video">
    <div class="video-img">
        <img src="img/YouTube_main_video_img.png" alt="">
    </div>
    <div class="video-info">
        <h3>#Asmongold</h3>
        <h2>${videoTitle}</h2>
    </div>
    <div class="views-button-bar-container">
        <div class="views-container">
            <p>${views} views - ${datePublished}</p>
        </div>
        <div class="button-bar">
            <a href="#"><i class="fa-solid fa-thumbs-up"></i> ${likes}K</a>
            <a href="#"><i class="fa-solid fa-thumbs-down"></i> ${dislikes}</a>
            <a href="#"><i class="fa-solid fa-share"></i> SHARE</a>
            <a href="#"><i class="fa-solid fa-download"></i> DOWNLOAD</a>
            <a href="#"><i class="fa-solid fa-scissors"></i> CLIP</a>
            <a href="#"><i class="fa-solid fa-plus"></i> SAVE</a>
            <a href="#"><i class="fa-solid fa-plus"></i> ...</a>
        </div>
    </div>
</div>

<div class="author-wrapper">
    <div class="user-img">
        <img src="img/asmongold_user_img.png" alt="">
    </div>
    <div class="video-description">
        <p>${userName}</p>
        <p>${subscribers}M subscribers</p>
        <p class="main-description">${vidDescription}</p>
    </div>
</div>

<div class="comments">
    <p>${numComments} Comments</p>
</div>
<div class="comment-wrapper">
    <div class="comment-user-image">
        <img src="img/comment_user_img.png" alt="">
    </div>
    <div class="comment-content">
        <p>${commentUserName}</p>
        <p>${commentText}</p>
        <p><i class="fa-solid fa-thumbs-up"></i> ${thumbsUp} <i class="fa-solid fa-thumbs-down"></i> ${thumbsDown}</p>
        <p>View ${numReplies} replies</p>
    </div>
</div>
<div class="ad-container">
    <div class="ad-image">
        <img src="img/YouTube_ad_video.png" alt="lvndmark video">
        <p class="video-length-label">${(videoLength - videoLength%60) / 60}:${videoLength%60}</p>
    </div>
    <div class="video-content">
        <p>${videoAdName}</p>
        <p>${videoAdUserName}</p>
        <p>${videoAdViews}K views - ${videoAdTimeSincePost} hours ago</p>
        <p>${videoAdTag}</p>
    </div>
</div>
</header>
`);