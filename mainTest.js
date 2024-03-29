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
             
                if(lambo){
                    lambo.classList.add("active");
                }
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
function showIncrease() {

    increase++;
    const bannerImg = document.querySelectorAll(".banner__img");


    if (increase > bannerImg.length - 1) {
        increase = 0;
    }


    return showSliderMove()



}

function choseIncrease() {
    const controlBlocks = document.querySelectorAll(".control-block");

    controlBlocks.forEach((controlBlock, index) => {
        controlBlock.addEventListener("click", function () {

            return showSliderMove(index)
        })
    })
}




function showSliderMove(index) {
    if (index || index === 0) {
        increase = index

    }

    console.log(increase);
    const controlBlocks = document.querySelectorAll(".control-block");
    const activeControlBlocks = document.querySelector(".control-block.active_block");
    const bannerImg = document.querySelectorAll(".banner__img");
    const bannerContentTitle = document.querySelectorAll(".banner__title");
    const bigText = document.querySelectorAll(".big-text");
    const bannerImgActive = document.querySelector(".banner__img.active");
    const hexagonBanner = document.querySelectorAll(".hexagon__banner");
    const bigTextActive = document.querySelector(".big-text.trans-x-0");
    const bannerContentTitleActive = document.querySelector(".banner__title.active-banner");
    const hexagonBannerActive = document.querySelector(".hexagon__banner.sca-hexa-100");

    activeControlBlocks.classList.remove("active_block")
    controlBlocks[increase].classList.add("active_block");

    bannerImgActive.classList.remove("active");
    bannerImg[increase].classList.add("active");

    bigTextActive.classList.remove("trans-x-0")
    bigText[increase].classList.add("trans-x-0");

    bannerContentTitleActive.classList.remove("active-banner")
    bannerContentTitle[increase].classList.add("active-banner");

    hexagonBannerActive.classList.remove("sca-hexa-100");
    hexagonBanner[increase].classList.add("sca-hexa-100");
    if (bannerContentTitle[1].classList.contains("active-banner")) {
        var firstTextTrans = -1;
        const rotateHexagon = document.querySelectorAll(".bi-hexagon");

        function transText() {
            firstTextTrans++;
            const textTitleTrans = document.querySelectorAll(".transText2");
            if (firstTextTrans > textTitleTrans.length - 1) {
                clearInterval(interal);
                firstTextTrans = 0;
                // rotateHexagon[1].classList.remove("rotate-hexagon")
            }
            textTitleTrans[firstTextTrans].classList.add("transTextActive")
        }
        var interal = setInterval(transText, 300)
    }
    else {
        const textTitleTrans = document.querySelectorAll(".transText2");
        const rotateHexagon = document.querySelectorAll(".bi-hexagon");

        // rotateHexagon[1].classList.add("rotate-hexagon")
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
                // rotateHexagon[0].classList.remove("rotate-hexagon")
            }
            textTitleTrans1[firstTextTrans1].classList.add("transTextActive")
        }
        var interal1 = setInterval(transText, 300)
    }
    else {
        const textTitleTrans1 = document.querySelectorAll(".transText1");
        const rotateHexagon = document.querySelectorAll(".bi-hexagon");
        // rotateHexagon[0].classList.add("rotate-hexagon")
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
                // rotateHexagon[2].classList.remove("rotate-hexagon")
            }
            textTitleTrans3[firstTextTrans3].classList.add("transTextActive")
        }
        var interal3 = setInterval(transText, 300)
    }
    else {
        const textTitleTrans3 = document.querySelectorAll(".transText3");
        const rotateHexagon = document.querySelectorAll(".bi-hexagon");
        // rotateHexagon[2].classList.add("rotate-hexagon")
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
                // rotateHexagon[3].classList.remove("rotate-hexagon")
            }
            textTitleTrans4[firstTextTrans4].classList.add("transTextActive")
        }
        var interal4 = setInterval(transText, 300)
    }
    else {
        const textTitleTrans4 = document.querySelectorAll(".transText4");
        const rotateHexagon = document.querySelectorAll(".bi-hexagon");
        // rotateHexagon[3].classList.add("rotate-hexagon")
        textTitleTrans4.forEach((text4) => {
            text4.classList.remove("transTextActive");
        })
    }

}





var slide = 0;
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
    // const exploreModel = document.querySelector(".explore-model");

    slide++;
    if (slide > slideSkew.length - 1) {
        slide = 0
    }

    return skewNextBack(slide)

}

function slideSkewBack() {



    const slideSkew = document.querySelectorAll(".slide-skew");


    slide--;
    if (slide < 0) {
        slide = slideSkew.length - 1
    }
    console.log('0', slideSkew[0])
    console.log('1', slideSkew[1])
    console.log('2', slideSkew[2])

    return skewNextBack(slide)

}
function skewNextBack(slide) {
    return slide
}


const controlLeft = document.querySelector(".control-slide-left");
const controlRight = document.querySelector(".control-slide-right");
controlRight.addEventListener("click", function () {
    slideSkewNext();

    console.log(slide);
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

    slideSkew[1].classList.add("active-skew");


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
    const skewTextEffectBlock = document.querySelectorAll(".skewTextEffect");
    skewTextEffectBlock.forEach((textOpaAll, index) => {
        const activeSkewTextEff = document.querySelector(".skewTextEffect.activeSkewTextEffect");
        if (slide > skewTextEffectBlock.length - 1) {
            slide = 0;
        }
        activeSkewTextEff.classList.remove("activeSkewTextEffect");
        skewTextEffectBlock[slide].classList.add("activeSkewTextEffect");

    })
    setTimeout(function () {
        const bigText2s = document.querySelectorAll(".big-text2");
        const activeBigText2 = document.querySelector(".big-text2.trans-x-0");
        activeBigText2.classList.remove("trans-x-0");
        bigText2s[slide].classList.add("trans-x-0");
    }, 200);



    if (skewTextEffectBlock[0].classList.contains("activeSkewTextEffect")) {

        var increaseTextOpa1 = -1;
        setTimeout(function () {
            function textOpa() {
                increaseTextOpa1++;
                const skewTextOpa1 = document.querySelectorAll(".skewTextOpa1");
                if (increaseTextOpa1 > skewTextOpa1.length - 1) {
                    clearInterval(textOpaSkew1);
                    increaseTextOpa1 = 0

                }

                skewTextOpa1[increaseTextOpa1].classList.add("activeOpaText");

            }
            var textOpaSkew1 = setInterval(textOpa, 100);
        }, 700)
    } else {
        const activeOpa = document.querySelectorAll(".skewTextOpa1.activeOpaText");
        activeOpa.forEach((act) => {
            act.classList.remove("activeOpaText");
        })

    }
    // --------------
    if (skewTextEffectBlock[1].classList.contains("activeSkewTextEffect")) {

        var increaseTextOpa2 = -1;
        setTimeout(function () {
            function textOpa() {
                increaseTextOpa2++;
                const skewTextOpa2 = document.querySelectorAll(".skewTextOpa2");
                if (increaseTextOpa2 > skewTextOpa2.length - 1) {
                    clearInterval(textOpaSkew2);
                    increaseTextOpa2 = 0

                }

                skewTextOpa2[increaseTextOpa2].classList.add("activeOpaText");

            }
            var textOpaSkew2 = setInterval(textOpa, 100);
        }, 700)
    } else {
        const activeOpa = document.querySelectorAll(".skewTextOpa2.activeOpaText");
        activeOpa.forEach((act) => {
            act.classList.remove("activeOpaText");
        })

    }
    // --------------
    if (skewTextEffectBlock[2].classList.contains("activeSkewTextEffect")) {

        var increaseTextOpa3 = -1;
        setTimeout(function () {
            function textOpa() {
                increaseTextOpa3++;
                const skewTextOpa3 = document.querySelectorAll(".skewTextOpa3");
                if (increaseTextOpa3 > skewTextOpa3.length - 1) {
                    clearInterval(textOpaSkew3);
                    increaseTextOpa3 = 0

                }

                skewTextOpa3[increaseTextOpa3].classList.add("activeOpaText");

            }
            var textOpaSkew3 = setInterval(textOpa, 100);
        }, 700)
    } else {
        const activeOpa = document.querySelectorAll(".skewTextOpa3.activeOpaText");
        activeOpa.forEach((act) => {
            act.classList.remove("activeOpaText");
        })

    }
})

function appendInfoSkew() {
    const infoSkew = [
        ["HURACÁN STERRATO", "HURACÁN TECNICA", "HURACÁN STO", "HURACÁN EVO", "HURACÁN EVO SPYDER", "HURACÁN EVO RWD", "HURACÁN EVO RWD SPYDER"],
        ["AVENTADOR SVJ", "AVENTADOR SVJ ROADSTER", "AVENTADOR LP 780-4 ULTIMAE ROADSTER", "AVENTADOR LP 780-4 ULTIMAE"],
        ["URUS S", "URUS PERFORMANTE", "URUS", "URUS PEARL CAPSULE", "URUS GRAPHITE CAPSULE"],
    ];
    // for( var i = 0 ; i < infoSkew.length -1 ; i++){
    //    for(var j = 0 ; j < infoSkew.length)
    // }
    skewNextBack(slide);

    function renderLI() {
        return
    }
    // console.log(infoSkew[2]);
    const btnAddInfoSkew = document.querySelector(".hexagon2_banner2_plus");
    btnAddInfoSkew.addEventListener("click", (event) => {
        const controlSkew = document.querySelector(".control");
        const skewTextEffect = document.querySelectorAll(".skewTextEffect");
        const btn_add_moreSkew = document.querySelector(".btn_add_moreSkew");
        setTimeout(function () {
            skewTextEffect.forEach(function (skew) {
                skew.classList.add("display-n");
            })
            btn_add_moreSkew.classList.add("display-n");
            controlSkew.classList.add("display-n");
        }, 300);
        const containExplore = document.querySelector(".contain-explore-model");
        const addDivInfo = document.createElement("div");
        addDivInfo.classList.add("contain_info-model-skew");
        addDivInfo.innerHTML = `<div class="info-model-skew" style="transform : skew(20deg)">
        <div class="back_btn_skew">
            <button class="control-slide-right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="70"
                    width="70">
                    <rect width="256" height="256" fill="none"></rect>
                    <path
                        d="M220,175.3V80.7a8.1,8.1,0,0,0-4.1-7l-84-47.5a7.8,7.8,0,0,0-7.8,0l-84,47.5a8.1,8.1,0,0,0-4.1,7v94.6a8.1,8.1,0,0,0,4.1,7l84,47.5a7.8,7.8,0,0,0,7.8,0l84-47.5A8.1,8.1,0,0,0,220,175.3Z"
                        fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="6" id="mainIconPathAttribute"></path>
                </svg>
                <div class="hexagon2_banner2_info">
                    <i style="font-size: 20px;" class="bi bi-chevron-left btn-left-appendSlide1"></i>
                </div>
            </button>
        </div>
        <div class="contain_ul_skew">
            
        </div>
       </div>`
        containExplore.appendChild(addDivInfo);
        const divSKewInfo = document.querySelector(".contain_ul_skew");
        const ulSkewInfo = document.createElement("ul");
        ulSkewInfo.classList.add("ul_info-model-skew");
        var html = '';
        for (var i = 0; i < infoSkew[slide].length; i++) {

            html += `<li>
            <div class="opa_text_info">
                EXPLORE
            </div>
            <div class="info_model_skew">
                ${infoSkew[slide][i]}
            </div>      
          </li>
          `;

        }
        ulSkewInfo.innerHTML = html;
        divSKewInfo.appendChild(ulSkewInfo);
        setTimeout(function () {
            const activeContainInfoSkew = document.querySelector(".contain_info-model-skew");
            activeContainInfoSkew.classList.add("active_contain_info-model-skew");
            const exploreModel = document.querySelector(".explore-model");
            exploreModel.classList.add("active_explore-model");
        }, 250);
        removeSkewInfo();
    })
}

function removeSkewInfo() {
    const backBtnSkew = document.querySelector(".back_btn_skew");

    backBtnSkew.addEventListener("click", function () {
        const controlSkew = document.querySelector(".control");
        const skewTextEffect = document.querySelectorAll(".skewTextEffect");
        const btn_add_moreSkew = document.querySelector(".btn_add_moreSkew");

        skewTextEffect.forEach(function (skew) {
            skew.classList.remove("display-n");
        })
        btn_add_moreSkew.classList.remove("display-n");
        controlSkew.classList.remove("display-n");
        const activeContainInfoSkew = document.querySelector(".contain_info-model-skew.active_contain_info-model-skew");
        activeContainInfoSkew.classList.remove("active_contain_info-model-skew");
        const exploreModel = document.querySelector(".explore-model.active_explore-model");
        exploreModel.classList.remove("active_explore-model");
        const containInfoSkew = document.querySelector(".contain_info-model-skew");
        setTimeout(function () {
            containInfoSkew.remove();
        }, 285)
    })
}





function bgModelChooser() {
    const arrModelChoosers = [
        "./Lamborghini-Img/model-chooser/huracan_sterrato_home.jpg",
        "./Lamborghini-Img/model-chooser/urus_s_home.jpg"
    ]


    const changeModelChooses = document.querySelectorAll(".change_model_chooser_child");

    // changeModelChooses.forEach(function(changeModelChoose,index){
    //     changeModelChoose.addEventListener("mouseover",function(){
    //         changeModelChooses[index].style.setProperty('--widthModel1', '100%')
    //     })
    // })
    // changeModelChooses.forEach(function(changeModelChoose,index){
    //     changeModelChoose.addEventListener("mouseout",function(){
    //         changeModelChooses[index].style.setProperty('--widthModel1', '0%')
    //     })
    // })

    changeModelChooses.forEach((changeModelChoose, index) => {
        changeModelChoose.addEventListener("click", () => {
            return renderModelChooser(index);
        })
    })

  

}
var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            
            const changeModelChild = document.querySelectorAll(".change_model_chooser_child");
            changeModelChild[0].style.setProperty('--widthModel1', '100%');
        }
    };
})();

function renderModelChooser(index) {


    const imgModelChooser = document.querySelectorAll(".model_chooser_img");

    const activeImgModelChooser = document.querySelector(".model_chooser_img.active_model_chooser");
    const firstCreate = document.querySelectorAll(".first_create_huracan");
    const activeFirstCreate = document.querySelector(".first_create_huracan.active_first_create_huracan");

    const secondCreate = document.querySelectorAll(".second_create_huracan");
    const activeSecondCreate = document.querySelector(".second_create_huracan.active_second_create_huracan");

    const infoModelChooser = document.querySelectorAll(".model_chooser_info");
    const activeInfoModelChooser = document.querySelector(".model_chooser_info.active_model_chooser_info");

    const btnModelChooser = document.querySelectorAll(".btn-model-chooser");
    const activeBtnModelChooser = document.querySelector(".btn-model-chooser.active_btn-model-chooser");

    const changeModelChild = document.querySelectorAll(".change_model_chooser_child");
    const activeChangeModelChild = document.querySelector(".change_model_chooser_child.active_change_model");
    

   

   
    

    activeChangeModelChild.classList.remove("active_change_model");
    changeModelChild[index].classList.add("active_change_model");

    activeChangeModelChild.style.setProperty('--widthModel1', '0%');
    changeModelChild[index].style.setProperty('--widthModel1', '100%');

    activeImgModelChooser.classList.remove("active_model_chooser");
    imgModelChooser[index].classList.add("active_model_chooser");


    activeInfoModelChooser.classList.remove("active_model_chooser_info");
    infoModelChooser[index].classList.add("active_model_chooser_info");

    setTimeout(function () {
        activeBtnModelChooser.classList.remove("active_btn-model-chooser");
        btnModelChooser[index].classList.add("active_btn-model-chooser");

        activeFirstCreate.classList.remove("active_first_create_huracan");
        firstCreate[index].classList.add("active_first_create_huracan");

        activeSecondCreate.classList.remove("active_second_create_huracan");
        secondCreate[index].classList.add("active_second_create_huracan");


    }, 100)


    setTimeout(function () {


        if (imgModelChooser[0].classList.contains("active_model_chooser")) {
            var firstTextTrans3 = -1;

            function transText() {
                firstTextTrans3++;

                const textTitleTrans3 = document.querySelectorAll(`.text_chooser_config0`);
                if (firstTextTrans3 > textTitleTrans3.length - 1) {
                    clearInterval(interal3);
                    firstTextTrans3 = 0;

                }
                textTitleTrans3[firstTextTrans3].classList.add("active_text_chooser_config")
            }
            var interal3 = setInterval(transText, 100)
        }
        else {
            const textTitleTrans3 = document.querySelectorAll(`.text_chooser_config0`);


            textTitleTrans3.forEach((text3) => {
                text3.classList.remove("active_text_chooser_config");
            })
        }



        if (imgModelChooser[1].classList.contains("active_model_chooser")) {
            var firstTextTrans4 = -1;

            function transText4() {
                firstTextTrans4++;

                const textTitleTrans4 = document.querySelectorAll(".text_chooser_config1");
                if (firstTextTrans4 > textTitleTrans4.length - 1) {
                    clearInterval(interal4);
                    firstTextTrans4 = 0;

                }
                textTitleTrans4[firstTextTrans4].classList.add("active_text_chooser_config")
            }
            var interal4 = setInterval(transText4, 100)
        }
        else {
            const textTitleTrans4 = document.querySelectorAll(".text_chooser_config1");


            textTitleTrans4.forEach((text3) => {
                text3.classList.remove("active_text_chooser_config");
            })
        }

    }, 1)



}









function beginLambor() {
    menuBar();
    seperateUl();
    bgUl();
    showUlLevel2();
    showUlLevel3();

    showModel();
    addEffect();
    showSliderMove();
    choseIncrease()
    setInterval(showIncrease(), 5000)
    something()
    renderSkew();
    appendInfoSkew();
    bgModelChooser()

}
beginLambor()


