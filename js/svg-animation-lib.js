/**
 * @auhor       LiuTongtong
 * @time        2017-04-11
 */

 (function($){

    if (window.SVGIcon) {
        return;
    }

    var defaultConfig = {
        carrier: "#svg-cart", //svg selector
        iconName: "icon_cart", // 对应字体图标名称, 连接号变成下划线：icon-cart: icon_cart
        hack: "<div class='font-icon'>font-icon</div>"
    };

    function SVGIcon(cf){
        this.config = $.extend({}, defaultConfig, cf);
        this.animateFn = null;
        this.init();        
    }

    SVGIcon.prototype.init = function () {
        var carrier = this.config.carrier;
        var iconName = this.config.iconName;

        //ie 9 及以下显示图片或字体图标
        if(this.isLessThanOrEqualIE9()){
            $(carrier).replaceWith(this.config.hack);
            return;
        }
        //通过icon名称获取并执行相应方法，名称和方法名称一致
        this.initIconByName[iconName](carrier,this);
    }

    //判断IE <= 9
    SVGIcon.prototype.isLessThanOrEqualIE9 = function(){
        var b = document.createElement('b');
        b.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
        return b.getElementsByTagName('i').length === 1;
    }

    SVGIcon.prototype.start = function(){
        this.animateFn.start();
    }
    SVGIcon.prototype.reverse = function(){
        this.animateFn.reverse();
    }


    //所有icon初始化和动画添加到相应名称下
    SVGIcon.prototype.initIconByName ={
        icon_dollar: function(carrier, that){
            var moneySVG = Snap(carrier);
            var money = moneySVG.path("M5.5,9.5c0,1.1,0.9,2,2,2s2-0.9,2-2c0-2.5-4-1.5-4-4c0-1.1,0.9-2,2-2s2,0.9,2,2");
            var moneyC = moneySVG.circle(7.5,7.5,7);
            var moneyL1 = moneySVG.line(7.5,2.5,7.5,3.5);
            var moneyL2 = moneySVG.line(7.5,11.5,7.5,12.5);
            var moneyG = moneySVG.g(money,moneyC,moneyL1,moneyL2)

            moneyG.attr({
                fill: 'none',
                stroke: '#a992e2',
                strokeLinecap:"round"
            });

            that.animateFn = {
                start: function(){
                    Snap.animate(0, 180, function(value) {
                        moneyG.transform(new Snap.Matrix().rotate(value, 7.5,7.5));
                    }, 500, mina.backout);
                },
                reverse:function(){
                    Snap.animate(180, 0, function(value) {
                        moneyG.transform(new Snap.Matrix().rotate(value, 7.5,7.5));
                    }, 500, mina.backin);
                }
            }

        },
        icon_cart: function(carrier, that){
            var cartSVG = Snap(carrier);
            var cart = cartSVG.path("M0.5,1.5h1.2c0.5,0,0.9,0.3,1,0.8l2.1,8.5c0.1,0.4,0.5,0.8,1,0.8h7.4c0.5,0,0.9-0.3,1-0.8 l1.1-5");
            var cartC1 = cartSVG.circle(6,14,1);
            var cartC2 = cartSVG.circle(13,14,1);
            var cartL = cartSVG.path("M15.2,5.5c0.1-0.6-0.3-1-1-1H3.5");
            var cartG = cartSVG.g(cart,cartC1,cartC2,cartL);

            cartG.attr({
                fill: 'none',
                stroke: '#55badf',
                strokeLinecap:"round"
            });

            cartC1.attr({
                stroke: "none",
                fill: '#55badf'
            });
            cartC2.attr({
                stroke: "none",
                fill: '#55badf'
            });

            that.animateFn = {
                start: function(){
                    Snap.animate(0, -20, function(value) {
                        cartL.transform(new Snap.Matrix().rotate(value, 3.7,4.5));
                    }, 100);
                },
                reverse:function(){
                    Snap.animate(-20, 0, function(value) {
                        cartL.transform(new Snap.Matrix().rotate(value, 3.7,4.5));
                    }, 100);
                }
            }
        },
        icon_file: function(carrier, that){
            var fileSVG = Snap(carrier);
            var fileP = fileSVG.polyline(8.5,14.5,14,9,14.5,9.5,9,15,8,15.5);
            var file = fileSVG.path("M5.5,14.5h-3c-0.5,0-1-0.4-1-1v-12c0-0.6,0.5-1,1-1h10c0.6,0,1,0.4,1,1v5");
            var fileL1 = fileSVG.line(12.5,9.5,14,11);
            var fileL2 = fileSVG.line(4.5,3.5,10.5,3.5);
            var fileL3 = fileSVG.line(4.5,5.5,10.5,5.5);
            var fileL4 = fileSVG.line(4.5,7.5,10.5,7.5);
            var fileL5 = fileSVG.line(4.5,9.5,10.5,9.5);
            var fileL6 = fileSVG.line(4.5,11.5,8.5,11.5);
            var fileG = fileSVG.g(fileP,file,fileL1,fileL2,fileL3,fileL4,fileL5,fileL6);

            fileG.attr({
                fill: 'none',
                stroke: '#ec6f5a',
                strokeLinecap:"round"
            });
            fileL1.attr({
                stroke: "#fff"
            });


            that.steps = {
                step1: function(){
                    Snap.animate(4.5, 10.5, function(value) {
                        fileL2.attr({
                            x2:value
                        });
                    }, 200,mina.easeinout);
                },
                step2: function(){
                    Snap.animate(4.5, 10.5, function(value) {
                        fileL3.attr({
                            x2:value
                        });
                    }, 200,mina.easeinout,function(){});
                },
                step3: function(){
                    Snap.animate(4.5, 10.5, function(value) {
                        fileL4.attr({
                            x2:value
                        });
                    }, 200,mina.easeinout,function(){});
                },
                step4: function(){
                    Snap.animate(4.5, 10.5, function(value) {
                        fileL5.attr({
                            x2:value
                        });
                    }, 200,mina.easeinout,function(){});
                },
                step5: function(){
                    Snap.animate(4.5, 8.5, function(value) {
                        fileL6.attr({
                            x2:value
                        });
                    }, 200,mina.easeinout);
                }
            };

            that.animateFn = {
                start: function(){
                    setTimeout(that.steps.step1,100);
                    setTimeout(that.steps.step2,200);
                    setTimeout(that.steps.step3,300);
                    setTimeout(that.steps.step4,400);
                    setTimeout(that.steps.step5,500);
                },
                reverse:function(){
                }
            }
        }
    }

    window.SVGIcon = SVGIcon;

})(jQuery)