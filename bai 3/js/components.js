const components = {};
components.welcomeScreen = `
<div class="welcome-container">
        <div class="header">
            <ul class="menu">
                <li id="redirect-to-welcome">Home</li>
                <li id="redirect-to-work">Work</li>
                <li><a target="_blank" href="https://www.facebook.com/thuannhoden12112000">Contact</a></li>
            </ul>
        </div>
        <div class="welcome-wrapper">
            <div class="welcome-main">
                <div id="content">HEY I'M NGUYEN TIEN THUAN</div>
                <button id="redirect-to-project">PROJECT</button>
            </div>
        </div>
    </div>
`
components.projectScreen = `
<div class="project-container">
        <div class="header">
            <ul class="menu">
                <li id="redirect-to-welcome">Home</li>
                <li id="redirect-to-work">Work</li>
                <li><a target="_blank" href="https://www.facebook.com/thuannhoden12112000">Contact</a></li>
            </ul>
        </div>
        <div class="project-wrapper">
        <div class="project" id="project1">
            <a class="image" id="image1" target="_blank" href="https://camerabox.vn/uploads/news/2018_11/chup-anh-thien-nhien-theo-mua-2b.jpg"></a>
            <div class="name"><a target="_blank" href=" https://camerabox.vn/uploads/news/2018_11/chup-anh-thien-nhien-theo-mua-2b.jpg">Ảnh thiên nhiên</a></div>
        </div>

        <div class="project" id="project2">
            <a class="image" id="image2" target="_blank" href="https://kienthuc1805.com/wp-content/uploads/2018/07/1530623044_930_tuyen-tap-hinh-anh-dong-vat-sieu-dang-yeu-dong-vat-780x405.jpg"></a>
            <div class="name "><a target="_blank" href="https://kienthuc1805.com/wp-content/uploads/2018/07/1530623044_930_tuyen-tap-hinh-anh-dong-vat-sieu-dang-yeu-dong-vat-780x405.jpg">Ảnh động vật</a></div>
        </div>
        <div class="project " id="project3 ">
            
                <a class="image" id="image3" target="_blank" href="https://genk.mediacdn.vn/2019/6/21/nasa-hs201427a-hubbleultradeepfield2014-20140603-15611148611642117815243.jpg"></a>
            
            <div class="name "><a target="_blank" href="https://genk.mediacdn.vn/2019/6/21/nasa-hs201427a-hubbleultradeepfield2014-20140603-15611148611642117815243.jpg">Ảnh vũ trụ</a></div>
        </div>
    </div>
    </div>
`