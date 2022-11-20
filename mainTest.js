function menuBar() {
    const up = document.querySelector(".up");
    const mid = document.querySelector(".mid");
    const down = document.querySelector(".down");
    const menuBar = document.querySelector(".menu-bar");
    menuBar.addEventListener("click", function () {
        up.classList.toggle("rotateUp")
        mid.classList.toggle("ClearMid")
        down.classList.toggle("rotateDown")
    })
}
function seperateUl() {
    const models = document.querySelectorAll(".ul-menu-left__model");

    var element = document.querySelectorAll(".spanMain");

    for (let i = 0; i < element.length; i++) {
        var styles = window.getComputedStyle(element[i], ':after');
    }
    element.forEach(function (ele, indexShowUl) {
        ele.addEventListener("mouseover", function () {
            models[indexShowUl].classList.add("showUl-level1")
        })
    })
    models.forEach(function (model, index) {
        model.addEventListener("mouseover", function () {
            element[index].style.setProperty('--widthSPan', '100%');
        }, false)
    })
    models.forEach(function (model, index) {
        model.addEventListener("mouseout", function () {
            element[index].style.setProperty('--widthSPan', '0%');
        }, false)
    })
}
function bgUl() {
    const liLevel1 = document.querySelectorAll(".ul-menu-left>li");
    const models = document.querySelectorAll(".ul-menu-left__model");
    liLevel1.forEach(function (li, index) {
        li.addEventListener("mouseover", function () {
            const headerUlLevel2 = document.querySelector(".header-ul-level2");
            headerUlLevel2.style.height = models[index].offsetHeight + 60 + "px";
            models.forEach(function (model, indexModel) {
                model.addEventListener("mouseover", function () {
                    headerUlLevel2.style.height = models[index].offsetHeight + 60 + "px";
                })
            })
            models.forEach(function (model, indexModel) {
                model.addEventListener("mouseout", function () {
                    headerUlLevel2.style.height = 0 + "px";
                })
            })
            li.addEventListener("mouseout", function () {
                headerUlLevel2.style.height = 0 + "px";
            })
        })
    })
}
function showUlLevel2() {
    const tabUl = document.querySelectorAll(".tab-ul")
    const element = document.querySelectorAll(".spanMain");


    element.forEach(function (ele, index) {

        ele.addEventListener("mouseover", function () {

            const divHidden = document.querySelectorAll(".hidden")

            divHidden[index].classList.add("block");
            tabUl[index].classList.add("active");
        })
        ele.addEventListener("mouseout", function () {
            const tab = document.querySelector(".tab-ul.active");
            tab.classList.remove("active");
            const divRemove = document.querySelector(".hidden.block");
            divRemove.classList.remove("block")
        })
    })
}
function showUlLevel3() {
    const liLevel2s = document.querySelectorAll(".liLevel2");
    liLevel2s.forEach(function (liLevel2, index) {
        liLevel2.addEventListener("mouseover", function () {
            const ulLevel3s = document.querySelectorAll(".level-3");
            const unSelected = document.querySelectorAll(".unselected")
            ulLevel3s[index].classList.add("active2");
            unSelected[index].classList.add("selected")

        })
    })
    liLevel2s.forEach(function (liLevel2, index) {
        liLevel2.addEventListener("mouseout", function (e) {
            const unSelected = document.querySelectorAll(".unselected");
            const ulLevel3s = document.querySelectorAll(".level-3");
            ulLevel3s[index].classList.remove("active2");
            unSelected[index].classList.add("selected")
        })
    })
    const ulLevel3s = document.querySelectorAll(".level-3");
    ulLevel3s.forEach(function (ulLevel3, indexLiLevel3) {
        ulLevel3.addEventListener("mouseover", function () {
            const headerUlLevel2 = document.querySelector(".header-ul-level2");
            headerUlLevel2.style.height = 508 + "px";
            const ulLevel3s = document.querySelectorAll(".level-3");
            const unSelected = document.querySelectorAll(".unselected")
            ulLevel3s[indexLiLevel3].classList.add("active2");
            unSelected[indexLiLevel3].classList.add("selected");
            const tabUl = document.querySelectorAll(".tab-ul")
            const divHidden = document.querySelectorAll(".hidden")
            divHidden[0].classList.add("block");
            tabUl[0].classList.add("active");
            var element = document.querySelectorAll("span")
            for (let i = 0; i < element.length; i++) {
                var styles = window.getComputedStyle(element[i], ':after');
            }
            const liLevel2as = document.querySelectorAll(".liLevel2>a");
            liLevel2as[indexLiLevel3].classList.add("white");
            element[0].style.setProperty('--widthSPan', '100%');
        })
    })
    ulLevel3s.forEach(function (ulLevel3, indexLiLevel3) {
        ulLevel3.addEventListener("mouseout", function () {
            const headerUlLevel2 = document.querySelector(".header-ul-level2");
            headerUlLevel2.style.height = 0 + "px";
            const ulLevel3s = document.querySelectorAll(".level-3");
            const unSelected = document.querySelectorAll(".unselected")
            ulLevel3s[indexLiLevel3].classList.remove("active2");
            unSelected[indexLiLevel3].classList.remove("selected");
            const tabUl = document.querySelectorAll(".tab-ul")
            const divHidden = document.querySelectorAll(".hidden")
            divHidden[0].classList.remove("block");
            tabUl[0].classList.remove("active");
            var element = document.querySelectorAll("span")
            for (let i = 0; i < element.length; i++) {
                var styles = window.getComputedStyle(element[i], ':after');
            }
            const liLevel2as = document.querySelectorAll(".liLevel2>a");
            liLevel2as[indexLiLevel3].classList.remove("white");
            element[0].style.setProperty('--widthSPan', '0%');
        })
    })
}

function showModel() {
    const aventadorArray =
        [
            {
                image: "./Lamborghini-Img/Model/Aventador/menu_aven_ultimae3.png",
            },
            {
                image: "./Lamborghini-Img/Model/Aventador/menu_aven_ulti_rds.png",
            },

            {
                image: "./Lamborghini-Img/Model/Aventador/menu_aventador_svj.png",
            },
            {
                image: "./Lamborghini-Img/Model/Aventador/menu_aventador_svjroadster.png",
            },
            {
                image: "./Lamborghini-Img/Model/Huracan/menu_hura_tecnica_01.png",
            },
            {
                image: "./Lamborghini-Img/Model/Huracan/menu_huracan_sto.png",
            },
            {
                image: "./Lamborghini-Img/Model/Huracan/menu_huracan_evo.png",
            },
            {
                image: "./Lamborghini-Img/Model/Huracan/menu_huracan_evo_spider.png",
            },
            {
                image: "./Lamborghini-Img/Model/Huracan/menu_huracan_evo_rwd.png",
            },
            {
                image: "./Lamborghini-Img/Model/Huracan/menu_huracan_evo_rwd_spider.png",
            },
            {
                image: "./Lamborghini-Img/Model/URUS/silhouette-menu.png",
            },
            {
                image: "./Lamborghini-Img/Model/URUS/silhouette_menu_01.png",
            },
            {
                image: "./Lamborghini-Img/Model/URUS/menu_urus.png",
            },
            {
                image: "./Lamborghini-Img/Model/URUS/menu_urus_pearl.png",
            },
            {
                image: "./Lamborghini-Img/Model/URUS/urus_graphite_menu.png",
            },
            {
                image: "./Lamborghini-Img/Model/Limited-series/menu_countach_lpi_01.png",
            },
            {
                image: "./Lamborghini-Img/Model/Limited-series/menu_sian_rds.png",
            },
            {
                image: "./Lamborghini-Img/Model/Limited-series/menu_sianFKP37.png",
            },
            {
                image: "./Lamborghini-Img/Model/CONCEPT/menu_terzo_millennio.png",
            },
            {
                image: "./Lamborghini-Img/Model/CONCEPT/menu_asterion.png",
            },
            {
                image: "./Lamborghini-Img/Model/CONCEPT/menu_estoque.png",
            },

        ]
    const aventador = document.querySelectorAll(".aventador");
    console.log(aventador)
    aventador.forEach(function (aven, indexaven) {
        aven.addEventListener("mouseover", function () {
            const appendMenuLink = document.createElement("div");
            appendMenuLink.className = "menu-link-data";
            var htmls = aventadorArray.map(function (array, indexArray) {
                return `<div class="row">
                
                <div class="col">
                    <div class="lambo d-f jf-c al-c">
                        <img src=${aventadorArray[indexaven].image} alt="" srcset="">
                    </div>
                </div>
                <!-- ---img --- -->
                <div class="content">
                    <div class="col-content">
                        <div class="left d-f jf-c al-c">
                            <div class="contain-information d-f jf-b al-c">

                                <div class="hexagon">
                                    <div class="hexagon2">
                                        <span class="ti-angle-right"></span>
                                    </div>
                                </div>
                                <div class="wrapper d-f fd-c">
                                    <span class="d-f al-c text-model-name text-left">
                                        AVENTADOR LP 780-4
                                        ULTIMAE
                                    </span>
                                    <span class="text-left info-model-text">MODEL INFORMATION</span>
                                </div>
                            </div>
                        </div>
                        <div class="center d-f al-c jf-c fd-c">
                            <div class="wrap-center">
                                <span class="parameter parameterEffect" class="power">
                                    POWER (CV) / POWER (KW)
                                </span>
                                <span class="parameter-line-2 parameterEffect" class="power-parameter">
                                    780 CV / 574 KW
                                </span>
                            </div>
                        </div>
                        <div class="right d-f fd-c">
                            <div class="blank">

                            </div>
                            <div class="blank">

                            </div>
                            <div class="d-f contain-speed">
                                <div class="max-speed d-f fd-c al-c jf-c">
                                    <div class="wrap-center al-c jf-c">
                                        <span class="parameter addTransition" class="speed">
                                            MAX. SPEED
                                        </span>
                                        <span class="parameter-line-2 addTransition" class="power-parameter">
                                            355 KM/H
                                        </span>
                                    </div>
                                </div>
                                <div class="speed-per-s d-f fd-c al-c jf-c">
                                    <div class="wrap-center al-c jf-c">
                                        <span class="parameter moreTransition" class="speed">
                                            MAX. SPEED
                                        </span>
                                        <span class="parameter-line-2 moreTransition" class="power-parameter">
                                            355 KM/H
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- ------------ -->
                </div>

            </div>`
            })
            appendMenuLink.innerHTML = htmls.join("");
            const menuLevel2 = document.querySelector(".header-ul-level2");
            menuLevel2.appendChild(appendMenuLink);
            appendMenuLink.classList.add("active");

            responsiveImg();
        })
        aven.addEventListener("mouseout", menuRemove)
    })

}

function test() {
    const mouseBackground = document.querySelector(".move-background");
    mouseBackground.addEventListener("mouseover", function () {
        const ulLevel3s = document.querySelectorAll(".level-3");
        const headerUlLevel2 = document.querySelector(".header-ul-level2");
        headerUlLevel2.style.height = 508 + "px";
        const unSelected = document.querySelectorAll(".unselected")
        ulLevel3s[0].classList.add("active2");
        unSelected[0].classList.add("selected");
        const tabUl = document.querySelectorAll(".tab-ul")
        const divHidden = document.querySelectorAll(".hidden")
        divHidden[0].classList.add("block");
        tabUl[0].classList.add("active");
        var element = document.querySelectorAll("span")
        for (let i = 0; i < element.length; i++) {
            var styles = window.getComputedStyle(element[i], ':after');
        }
        const liLevel2as = document.querySelectorAll(".liLevel2>a");
        liLevel2as[0].classList.add("white");
        element[0].style.setProperty('--widthSPan', '100%');
        const aventador = document.querySelectorAll(".aventador");
        // 
    })
    mouseBackground.addEventListener("mouseout", function () {
        const menu = document.querySelector(".menu-link-data");
        menu.remove();
        console.log(1)
    })
}
function menuRemove() {
    const menu = document.querySelector(".menu-link-data");
    menu.remove();
}
function addEffect() {

    const aventador = document.querySelectorAll(".aventador");
    aventador.forEach(function (aven, index) {
        aven.addEventListener("mouseover", function () {
            setTimeout(function () {
                const lambo = document.querySelector(".lambo");
                lambo.classList.add("active");
                const hexas = document.querySelectorAll(".hexagon");
                const hexa2s = document.querySelectorAll(".hexagon2");
                const left = document.querySelectorAll(".left");
                const center = document.querySelectorAll(".center");
                const right = document.querySelectorAll(".right");
                const blank = document.querySelectorAll(".blank");
                const maxSpeed = document.querySelectorAll(".max-speed");
                const textLeft = document.querySelectorAll(".text-left");
                textLeft.forEach(function (text) {
                    text.classList.add("effect");
                })
                hexas.forEach(function (hexa) {
                    hexa.classList.add("hexagon-effect");
                })
                hexa2s.forEach(function (hexa) {
                    hexa.classList.add("hexagon2Effect");
                })
                left.forEach(function (leftChild) {
                    leftChild.classList.add("active");
                })
                center.forEach(function (centerChild) {
                    centerChild.classList.add("active");
                })
                right.forEach(function (rightChild) {
                    rightChild.classList.add("active");
                })
                blank.forEach(function (blankChild) {
                    blankChild.classList.add("active");
                })
                maxSpeed.forEach(function (maxSpeedChild) {
                    maxSpeedChild.classList.add("active");
                })
                const parameter = document.querySelectorAll(".parameterEffect");
                parameter.forEach(function (para) {
                    para.classList.add("effect");
                })
                const transition = document.querySelectorAll(".addTransition");
                transition.forEach(function (transi) {
                    transi.classList.add("effect");
                })
                const moreTransition = document.querySelectorAll(".moreTransition");
                moreTransition.forEach(function (more) {
                    more.classList.add("effect");
                })

            }, 400)
        })
    })
}

// ----------------main--------------------------------------
var increase = 0;
function showSliderMove() {
    const bannerImg = document.querySelectorAll(".banner__img");
    const bannerContentTitle = document.querySelectorAll(".banner__title");
    const bigText = document.querySelectorAll(".big-text");
    const bannerImgActive = document.querySelector(".banner__img.active");
    const hexagonBanner = document.querySelectorAll(".hexagon__banner");
    const bigTextActive = document.querySelector(".big-text.trans-x-0");
    const bannerContentTitleActive = document.querySelector(".banner__title.active-banner");
    const hexagonBannerActive = document.querySelector(".hexagon__banner.sca-hexa-100");
    // const bannerTitleArray = ["AVENTADOR LP 780-4 ULTIMAE", "AVENTADOR LP 780-4 ULTIMAE2", "AVENTADOR LP 780-4 ULTIMAE3", "AVENTADOR LP 780-4 ULTIMAE4"];

    function increaseBanner() {
        increase++;
        if (increase > bannerImg.length - 1) {
            increase = 0;
        }


    }


    setInterval(increaseBanner(), 1000);
    bannerImgActive.classList.remove("active");
    bannerImg[increase].classList.add("active");
    bigTextActive.classList.remove("trans-x-0")
    bigText[increase].classList.add("trans-x-0");
    // bannerContentTitle[increase].innerHTML = bannerTitleArray[increase]
    bannerContentTitleActive.classList.remove("active-banner")
    bannerContentTitle[increase].classList.add("active-banner");
    hexagonBannerActive.classList.remove("sca-hexa-100");
    hexagonBanner[increase].classList.add("sca-hexa-100");
    if (bannerContentTitle[1].classList.contains("active-banner")) {
        var firstTextTrans = -1;
        const rotateHexagon = document.querySelectorAll(".bi-hexagon")
        function transText() {
            firstTextTrans++;
            const textTitleTrans = document.querySelectorAll(".transText2");
            if (firstTextTrans > textTitleTrans.length - 1) {
                clearInterval(interal);
                firstTextTrans = 0;
                rotateHexagon[1].classList.remove("rotate-hexagon")
            }
            textTitleTrans[firstTextTrans].classList.add("transTextActive")
        }
        var interal = setInterval(transText, 300)
    }
    else {
        const textTitleTrans = document.querySelectorAll(".transText2");
        const rotateHexagon = document.querySelectorAll(".bi-hexagon");

        rotateHexagon[1].classList.add("rotate-hexagon")
        textTitleTrans.forEach((text) => {
            text.classList.remove("transTextActive");
        })
    }


    if (bannerContentTitle[0].classList.contains("active-banner")) {
        var firstTextTrans1 = -1;

        function transText() {
            firstTextTrans1++;
            const rotateHexagon = document.querySelectorAll(".bi-hexagon")
            const textTitleTrans1 = document.querySelectorAll(".transText1");
            if (firstTextTrans1 > textTitleTrans1.length - 1) {
                clearInterval(interal1);
                firstTextTrans1 = 0;
                rotateHexagon[0].classList.remove("rotate-hexagon")
            }
            textTitleTrans1[firstTextTrans1].classList.add("transTextActive")
        }
        var interal1 = setInterval(transText, 300)
    }
    else {
        const textTitleTrans1 = document.querySelectorAll(".transText1");
        const rotateHexagon = document.querySelectorAll(".bi-hexagon");
        rotateHexagon[0].classList.add("rotate-hexagon")
        textTitleTrans1.forEach((text1) => {
            text1.classList.remove("transTextActive");
        })
    }

    if (bannerContentTitle[2].classList.contains("active-banner")) {
        var firstTextTrans3 = -1;

        function transText() {
            firstTextTrans3++;
            const rotateHexagon = document.querySelectorAll(".bi-hexagon")
            const textTitleTrans3 = document.querySelectorAll(".transText3");
            if (firstTextTrans3 > textTitleTrans3.length - 1) {
                clearInterval(interal3);
                firstTextTrans3 = 0;
                rotateHexagon[2].classList.remove("rotate-hexagon")
            }
            textTitleTrans3[firstTextTrans3].classList.add("transTextActive")
        }
        var interal3 = setInterval(transText, 300)
    }
    else {
        const textTitleTrans3 = document.querySelectorAll(".transText3");
        const rotateHexagon = document.querySelectorAll(".bi-hexagon");
        rotateHexagon[2].classList.add("rotate-hexagon")
        textTitleTrans3.forEach((text3) => {
            text3.classList.remove("transTextActive");
        })
    }

    if (bannerContentTitle[3].classList.contains("active-banner")) {
        var firstTextTrans4 = -1;

        function transText() {
            const rotateHexagon = document.querySelectorAll(".bi-hexagon")
            firstTextTrans4++;
            const textTitleTrans4 = document.querySelectorAll(".transText4");
            if (firstTextTrans4 > textTitleTrans4.length - 1) {
                clearInterval(interal4);
                firstTextTrans4 = 0;
                rotateHexagon[3].classList.remove("rotate-hexagon")
            }
            textTitleTrans4[firstTextTrans4].classList.add("transTextActive")
        }
        var interal4 = setInterval(transText, 300)
    }
    else {
        const textTitleTrans4 = document.querySelectorAll(".transText4");
        const rotateHexagon = document.querySelectorAll(".bi-hexagon");
        rotateHexagon[3].classList.add("rotate-hexagon")
        textTitleTrans4.forEach((text4) => {
            text4.classList.remove("transTextActive");
        })
    }

}



var slide =  0;
const arraySkewSlide =
    ["./Lamborghini-Img/model-explore/urus_s_family_chooser.jpg",
        "./Lamborghini-Img/model-explore/ultimae_coupe_Compositing_4terzi.jpg",
        "./Lamborghini-Img/model-explore/family_chooser_tecnica.jpg"];
function renderSkew() {
    const containExploreModel = document.querySelector(".contain-explore-model");
    const exploreModel = document.createElement("div");
    exploreModel.classList.add("explore-model");
    exploreModel.innerHTML = `<div class="slide-skew active-skew">
                        <div class="skew">
                            <div class="skew_background">
                                <img src="./Lamborghini-Img/model-explore/ultimae_coupe_Compositing_4terzi.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    
                    <div class="slide-skew">
                        <div class="skew">
                            <div class="skew_background">
                                <img src="./Lamborghini-Img/model-explore/family_chooser_tecnica.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    
                    <div class="slide-skew">
                        <div class="skew">
                            <div class="skew_background">
                                <img src="./Lamborghini-Img/model-explore/urus_s_family_chooser.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    
                </div>
    `
    containExploreModel.appendChild(exploreModel)
}
const arrayModelSkew =
    ['./Lamborghini-Img/model-explore/urus_s_family_chooser.jpg',
    './Lamborghini-Img/model-explore/ultimae_coupe_Compositing_4terzi.jpg',
    './Lamborghini-Img/model-explore/family_chooser_tecnica.jpg',]
function slideSkewNext() {

    const slideSkew = document.querySelectorAll(".slide-skew");
    

    slide++;
    if (slide > slideSkew.length - 1) {
        slide = 0
    }
   
    return skewNextBack(slide)

}
function showBackNextSkewSlide(slide){
    const slideSkew = document.querySelectorAll(".slide-skew");
    const exploreModel = document.querySelector(".explore-model");
    const skewDiv = document.createElement("div");
    skewDiv.classList.add("slide-skew");
    skewDiv.innerHTML = `<div class="skew">
            <div class="skew_background">
                <img src="${arrayModelSkew[slide]}" alt="">
            </div>
        </div>`;
   

    exploreModel.appendChild(skewDiv);
    slideSkew[0].remove();
    const slideAct = document.querySelector(".slide-skew.active-skew")
    // slideAct.classList.remove("active-skew");
    // setTimeout(function(){
    slideSkew[1].classList.add("active-skew");
    // },500);

    const skewDiv2 = document.createElement("div");
    skewDiv2.classList.add("slide-skew");
    skewDiv2.innerHTML = `<div class="skew">
            <div class="skew_background">
                <img src="${arrayModelSkew[slide]}" alt="">
            </div>
        </div>`;
    
    exploreModel.appendChild(skewDiv2);
    setTimeout(function () {
        skewDiv2.classList.add("active-skew2");
    }, 100)
    setTimeout(function () {
        const skewDivAct2 = document.querySelector(".slide-skew.active-skew2")
        skewDivAct2.remove();
    }, 700)
    console.log(slide);
}

function slideSkewBack() {



    const slideSkew = document.querySelectorAll(".slide-skew");
    // const exploreModel = document.querySelector(".explore-model");

    slide--;
    if (slide < 0) {
        slide = slideSkew.length - 1
    }
  
    return skewNextBack(slide)

}
function skewNextBack(slide){
    return slide
}


const controlLeft = document.querySelector(".control-slide-left");
const controlRight = document.querySelector(".control-slide-right");
controlRight.addEventListener("click", function () {
    slideSkewNext();
    function slideReturn(slide){
        if(slide === 2){
            slide = 1;
        }
        else if ( slide === 1){
            slide = 2 
        }
        else if( slide === 0 ){
            slide = 0
        }
        return slide
    }
    console.log(slide);
    showBackNextSkewSlide(slide)
    
    
})
controlLeft.addEventListener("click", function () {
    slideSkewBack(); 
    function slideReturn(slide){
        if(slide === 2){
            slide = 1;
        }
        else if ( slide === 1){
            slide = 2 
        }
        else if( slide === 0 ){
            slide = 0
        }
        return slide
    }
    showBackNextSkewSlide(slide)
    
})









function beginLambor() {
    menuBar();
    seperateUl();
    bgUl();
    showUlLevel2();
    showUlLevel3();

    showModel();
    addEffect();
    showSliderMove();
    setInterval(showSliderMove, 15000);
    renderSkew();


}
beginLambor()


