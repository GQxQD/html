(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.补间2 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("APiJNIAAyaIScAAIAASagEgh9gA5IIdmyIJEF7Ii2KcIq1Ahg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-217.4,-59,434.9,118);


(lib.补间1 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("APiJNIAAyaIScAAIAASagEgh9gA5IIdmyIJEF7Ii2KcIq1Ahg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-217.4,-59,434.9,118);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("ApRFiIAArDISjAAIAALDg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1500FF").s().p("ApRFiIAArDISjAAIAALDg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#15B44A").s().p("ApRFiIAArDISjAAIAALDg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.5,-35.5,119,71);


// stage content:
(lib.无标题1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* 单击以显示文本字段
		单击此指定的元件实例可在您指定的 x 坐标和 y 坐标上创建并显示文本字段。
		
		说明:
		1. 用要定位文本字段的 x 坐标替换值 200。
		2. 用要定位文本字段的 y 坐标替换值 100。
		3. 用要在出现的文本字段中显示的文本替换字符串值"Lorem ipsum dolor sit amet"。保留引号。
		*/
		
		this.button_1.addEventListener("click", fl_ClickToPosition.bind(this));
		
		var fl_TF = new createjs.Text();
		var fl_TextToDisplay = "Lorem ipsum dolor sit amet.";
		
		function fl_ClickToPosition()
		{
		
			fl_TF.x = 200;
			fl_TF.y = 100;
			fl_TF.color = "#ff7700";
			fl_TF.font = "20px Arial";
			fl_TF.text = fl_TextToDisplay;
			this.addChild(fl_TF);
		}
		
		/* 在此帧处停止
		Flash 时间轴将在插入此代码的帧处停止/暂停。
		也可用于停止/暂停影片剪辑的时间轴。
		*/
		
		stop();
		stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// 图层 5
	this.text = new cjs.Text("1111111", "48px 'Microsoft YaHei'");
	this.text.lineHeight = 50;
	this.text.lineWidth = 218;
	this.text.setTransform(65.1,280.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(50));

	// 图层 4
	this.instance = new lib.补间1("synched",0);
	this.instance.setTransform(258.5,152);

	this.instance_1 = new lib.补间2("synched",0);
	this.instance_1.setTransform(258.5,152);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},47).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},1).to({startPosition:0},1).to({_off:true},47).wait(1));

	// 图层 2
	this.button_1 = new lib.元件1();
	this.button_1.setTransform(431,316);
	this.button_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,0);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.元件1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.button_1).wait(50));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("AvXLpIAA3RIevAAIAAXRg");
	this.shape.setTransform(224.5,194.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0B62C3").s().p("Au4L2QgPk2gKk+QgPmhAAmoIAAgBQGXgUGjgNQGzgNG8AAIDxABQANE3ALE+QAOGhAAGoQmVAUmkANQm0AOm7AAIjwgCg");
	this.shape_1.setTransform(225.3,194.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#155EBB").s().p("AuZMEQgdkrgVk7QgcmcAAmrIAAgBQGEgmGggbQGwgaG9gBQB5AAB4ACQAbEtAWE7QAcGcAAGqQmDAnmhAaQmvAbm+AAQh5AAh3gCg");
	this.shape_2.setTransform(226,194.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2059B3").s().p("At7MTQgqkigfk2QgsmZABmrIAAgBQFyg6GdgoQGsgpG/AAQB5AAB4AEQAqEhAfE3QAsGZgBGsQlxA5meAoQmsApm/AAQh5AAh4gDg");
	this.shape_3.setTransform(226.8,194.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B55AA").s().p("AtcMhQg4kWgqk0Qg6mUAAmuIAAgBQFhhMGag1QGog2HBAAQB5gBB4AEQA4EXAqE0QA6GUAAGtQlhBNmaA2QmnA2nCAAQh5AAh4gEg");
	this.shape_4.setTransform(227.6,194.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3551A2").s().p("As9MvQhGkMg1kwQhImQAAmuIAAgBQFPhfGXhEQGjhEHEAAQB6ABB4AEQBFEMA1EwQBIGRAAGvQlPBfmXBDQmjBDnEAAQh5ABh4gFg");
	this.shape_5.setTransform(228.4,194.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#404D99").s().p("AseM9QhUkBhAktQhWmMAAmwIAAAAQE+hzGUhRQGfhRHFAAQB6AAB4AGQBTECBAEsQBWGMAAGwQk9BzmUBRQmfBRnFAAQh6gBh4gFg");
	this.shape_6.setTransform(229.1,194.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4890").s().p("AsANLQhhj2hKkqQhlmHAAmxIAAgBQEsiFGQhfQGcheHHAAQB7gBB3AHQBhD2BKEqQBlGIAAGxQkrCGmRBeQmbBfnIAAQh6AAh4gHg");
	this.shape_7.setTransform(229.9,194.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#554488").s().p("ArhNZQhvjrhVkmQhzmEgBmzIAAAAQEbiYGNhtQGYhsHJAAQB7ABB4AHQBuDsBVEmQB0GEgBGyQkZCYmOBsQmXBsnJAAQh7AAh4gHg");
	this.shape_8.setTransform(230.7,194.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#604080").s().p("ArDNnQh8jghgkjQiBl/AAm1IAAAAQEIisGKh5QGUh6HLAAQB7AAB4AJQB8DgBgEkQCBF/AAG0QkICsmKB5QmTB6nMAAQh7AAh4gJg");
	this.shape_9.setTransform(231.4,194.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A3B77").s().p("AqkN1QiLjWhpkeQiQl+AAmzIAAgBQD2i+GHiHQGSiHHLAAQB8AAB3AJQCLDWBpEfQCQF9AAG0Qj2C/mHCHQmSCHnKAAQh8AAh4gKg");
	this.shape_10.setTransform(232.2,194.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#75376F").s().p("AqFODQiZjKh0kcQifl5AAm2IAAAAQDmjSGDiUQGOiVHNAAQB8AAB3ALQCYDLB1EbQCfF6AAG1QjlDSmECUQmNCUnOAAQh8AAh3gKg");
	this.shape_11.setTransform(233,194.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#803366").s().p("ApmOSQinjBh/kYQitl1AAm2IAAgBQDUjlGAiiQGKiiHPAAQB8AAB4AMQClDACAEYQCtF2AAG2QjUDlmACiQmKCinOAAQh9gBh3gKg");
	this.shape_12.setTransform(233.8,194.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8A2F5D").s().p("ApHOfQi1i1iKkVQi7lxAAm4IAAAAQDCj4F9iwQGFiuHSAAQB8AAB4ALQC0C2CKEVQC7FyAAG3QjCD4l9CvQmGCwnQAAQh9AAh3gNg");
	this.shape_13.setTransform(234.5,194.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#952B55").s().p("AopOuQjCiriVkSQjJltAAm4IAAgBQCwkLF6i9QGCi9HTAAQB9AAB3ANQDCCsCVERQDJFtAAG5QiwELl6C8QmBC9nUAAQh9ABh3gNg");
	this.shape_14.setTransform(235.3,194.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9F264D").s().p("AoKO7QjQifigkOQjXlpAAm7IAAAAQCekeF3jKQF9jLHWAAQB9AAB3APQDQCgCfENQDYFqAAG6QifEel2DKQl+DLnVAAQh9gBh3gOg");
	this.shape_15.setTransform(236.1,194.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AA2244").s().p("AnrPKQjeiViqkLQjmlkAAm8IAAgBQCNkxFzjYQF6jXHXAAQB9AAB3AOQDeCVCqELQDmFlAAG8QiNExlzDYQl5DYnYAAQh9AAh3gPg");
	this.shape_16.setTransform(236.8,194.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B51E3C").s().p("AnMPXQjsiKi1kGQj0lhgBm9IAAgBQB8lEFwjmQF2jlHYAAQB/ABB2AQQDsCKC1EGQD0FhABG+Qh8FElwDlQl2DlnYAAQh/ABh2gRg");
	this.shape_17.setTransform(237.6,194.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BF1A33").s().p("AmuPlQj5h+jAkEQkDlcAAnAQBqlXFtjzQFyjzHbAAQB+AAB3ARQD5CADAEDQEDFdAAG/QhqFXltDzQlxDzncAAQh+gBh3gRg");
	this.shape_18.setTransform(238.4,194.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CA152A").s().p("AmPP0QkHh1jKkAQkSlYAAnAQBZlrFpkBQFuj/HdAAQB/gBB2ATQEIB0DJEAQESFYAAHAQhYFrlqEAQltEBndAAQh/AAh3gSg");
	this.shape_19.setTransform(239.1,194.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D41122").s().p("AlxQBQkVhpjUj9QkglUAAnCQBHl9FmkOQFpkOHgAAQB/ABB3ASQEUBqDVD9QEgFUAAHCQhHF9lmENQlqEOneAAQiAABh3gUg");
	this.shape_20.setTransform(239.9,194.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DF0D1A").s().p("AlSQQQkjhfjfj6QkulPAAnDQA0mRFkkbQFlkcHiAAQB/ABB2ATQEkBfDeD5QEvFRAAHCQg1GRljEbQllEcniAAQh/AAh3gUg");
	this.shape_21.setTransform(240.7,194.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EA0811").s().p("AkzQeQkxhUjqj2Qk8lMAAnFQAjmjFgkpQFhkoHjAAQCAAAB3AUQExBUDpD2QE9FMAAHEQgjGklgEpQliEpnjAAQh/gBh3gUg");
	this.shape_22.setTransform(241.5,194.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F40409").s().p("AkUQsQk/hJj0jzQlLlIAAnFQARm3Fdk3QFek2HlAAQCAAAB2AWQE/BKD0DxQFLFJAAHGQgRG2ldE2QldE2nlAAQiBABh2gWg");
	this.shape_23.setTransform(242.2,194.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AtBMNQlalEABnJQgBnIFalEQFZlEHoAAQHpAAFZFEQFaFEgBHIQABHJlaFEQlZFEnpAAQnoAAlZlEg");
	this.shape_24.setTransform(243,194.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F50408").s().p("AkTQtQk/hKj1jxQlMlIAAnGQARm4Fdk3QFdk2HlAAQCAAAB3AVQE/BKD1DxQFMFIAAHGQgRG4ldE2QldE3nlAAQiBAAh2gVg");
	this.shape_25.setTransform(242.3,194.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EB0810").s().p("AkxQfQkxhTjrj2Qk+lLAAnFQAimlFgkqQFhkpHjAAQCAAAB2AUQEyBUDrD0QE+FNAAHEQgiGllgEqQlhEqnjAAQiAgBh3gUg");
	this.shape_26.setTransform(241.5,194.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E00C18").s().p("AlOQSQklhejgj5QkwlQAAnDQAzmSFjkdQFlkdHhgBQB/ABB3ATQElBeDgD4QEwFQAAHEQgzGSliEdQllEdniAAQh/AAh3gTg");
	this.shape_27.setTransform(240.8,194.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D61021").s().p("AlrQEQkYhojWj8QkilUAAnBQBEmBFmkQQFokQHgAAQB/AAB3ATQEXBoDWD8QEiFUAAHBQhDGBlmEPQlpERnfAAQiAAAh2gTg");
	this.shape_28.setTransform(240,194.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CC1429").s().p("AmJP3QkKhzjMj/QkUlYgBnAQBVlvFpkDQFtkDHdAAQB/AAB3ASQEKBzDMD/QEVFYAAHBQhVFulpECQltEDneABQh+gBh3gRg");
	this.shape_29.setTransform(239.3,194.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C21831").s().p("AmnPpQj8h8jCkDQkGlcAAm/IAAgBQBllbFsj2QFwj2HcAAQB/AAB3ARQD8B9DCECQEGFcAAG/QhlFclsD2QlwD2ncAAQh+AAh4gRg");
	this.shape_30.setTransform(238.6,194.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B81D39").s().p("AnEPcQjwiIi3kFQj5lgAAm+QB3lKFvjpQF0joHaAAQB+AAB3APQDvCHC4EGQD5FhAAG9Qh3FKlvDpQl0DpnaAAQh+AAh3gQg");
	this.shape_31.setTransform(237.8,194.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AD2141").s().p("AniPOQjiiSitkJQjrljAAm8IAAgBQCHk3FzjcQF4jdHYAAQB+AAB3AQQDiCRCuEKQDqFjAAG9QiHE3lyDcQl4DcnZAAQh9AAh4gPg");
	this.shape_32.setTransform(237.1,194.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A32549").s().p("An/PBQjVicijkNQjdlnAAm8QCYkkF2jQQF8jPHWAAQB9AAB3AOQDVCdCjEMQDdFoAAG7QiYEll1DOQl8DQnWAAQh+AAh3gOg");
	this.shape_33.setTransform(236.3,194.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#992952").s().p("AocOzQjIimiZkQQjPlsgBm5IAAgBQCqkSF4jCQGAjCHVgBQB8AAB3AOQDICnCZEPQDPFsAAG5QipETl4DCQmBDCnTABQh+AAh2gOg");
	this.shape_34.setTransform(235.6,194.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8F2D5A").s().p("Ao6OmQi6ixiPkTQjBlwAAm4IAAAAQC6kAF8i2QGDi1HSAAQB9AAB3AMQC6CxCPEUQDBFvABG5Qi7EAl7C0QmEC2nSAAQh9AAh3gMg");
	this.shape_35.setTransform(234.9,194.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#853162").s().p("ApYOYQiti7iEkWQi0l0AAm3IAAAAQDLjuF/ipQGIinHQAAQB8gBB3AMQCtC7CFEXQC0FzAAG3QjLDul/CoQmICpnQAAQh8AAh4gMg");
	this.shape_36.setTransform(234.1,194.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7A356A").s().p("Ap1OLQigjFh6kaQiml4AAm2IAAAAQDdjcGBibQGMicHOAAQB8ABB4AKQCfDGB6EaQCmF3AAG2QjcDcmCCbQmLCcnOgBQh8ABh4gLg");
	this.shape_37.setTransform(233.4,194.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#703972").s().p("AqTN9QiSjPhwkdQiYl8AAm0IAAAAQDtjKGFiOQGPiPHNAAQB7AAB4AKQCSDQBwEdQCYF7AAG0QjtDKmFCPQmPCOnMAAQh8AAh4gKg");
	this.shape_38.setTransform(232.6,194.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#663D7A").s().p("AqwNwQiFjbhmkgQiKl9AAm1IAAgBQD+i2GIiCQGTiBHKgBQB8ABB3AIQCFDaBmEiQCKF8AAG2Qj9C2mICCQmTCCnLAAQh7AAh4gJg");
	this.shape_39.setTransform(231.9,194.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5C4183").s().p("ArONiQh3jkhckkQh9mBAAm0IAAgBQEQikGKh0QGVh1HLAAQB7AAB3AIQB4DkBcElQB8GBABGzQkPClmLB0QmWB1nKAAQh7AAh4gIg");
	this.shape_40.setTransform(231.2,194.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#52458B").s().p("ArrNVQhrjvhRknQhvmGAAmxIAAgBQEgiTGOhnQGZhnHJAAQB6AAB4AGQBqDwBSEnQBvGFAAGyQkgCTmOBnQmZBnnJABQh7gBh3gGg");
	this.shape_41.setTransform(230.4,194.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#474993").s().p("AsJNHQhcj5hIkqQhhmKAAmwIAAgBQExiAGShbQGchbHHAAQB6ABB4AGQBdD6BHEqQBhGJAAGxQkxCAmRBbQmcBbnHgBQh6AAh5gGg");
	this.shape_42.setTransform(229.7,194.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3D4E9B").s().p("AsmM6QhQkEg9ktQhTmNAAmwIAAgBQFChuGUhOQGhhNHEAAQB7AAB3AFQBQEEA9EuQBTGOAAGvQlBBumVBNQmgBOnFAAQh6AAh4gFg");
	this.shape_43.setTransform(228.9,194.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3352A3").s().p("AtEMsQhCkOgzkwQhFmSAAmuIAAAAQFThcGXhBQGkhBHDAAQB6AAB4AFQBCEOAzEyQBFGQAAGuQlSBcmYBBQmkBAnDABQh6gBh4gEg");
	this.shape_44.setTransform(228.2,194.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2956AB").s().p("AthMfQg2kZgpk0Qg3mVAAmsIAAgBQFkhJGag0QGpg0HBAAQB5AAB4ADQA1EZApE1QA4GVgBGtQljBImbA1QmnAznCAAQh5AAh4gDg");
	this.shape_45.setTransform(227.5,194.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1F5AB4").s().p("At/MRQgokjgek3QgpmZAAmrIAAgBQF0g3GdgnQGsgnHAABQB5AAB3ACQApEjAeE4QAqGZAAGrQl1A3mdAnQmtAnm/AAQh5AAh4gDg");
	this.shape_46.setTransform(226.7,194.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#145EBC").s().p("AucMEQgbktgUk7QgcmdAAmqIAAgBQGGgkGhgbQGwgaG9AAQB5AAB3ACQAbEuAVE7QAbGdAAGqQmFAkmhAaQmwAam9AAQh5AAh4gBg");
	this.shape_47.setTransform(226,194.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#0A62C4").s().p("Au6L2QgNk3gKk/QgOmhAAmnIAAgBQGXgTGkgNQGzgNG8AAIDwABQANE3ALFAQANGgAAGpQmWASmkANQmzANm8AAIjxgBg");
	this.shape_48.setTransform(225.2,194.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(316.1,293,459.4,268.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;