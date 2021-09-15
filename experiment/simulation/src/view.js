(function() {
    angular
        .module('users')
        .directive("experiment", directiveFunction)
})();

/** Variables declaraions */

var qualitative_analysis_stage, tick, exp_canvas;

var ninhydrin_flag, xanthoproteic_flag, pauly_diazo_flag, millon_flag, hopkins_flag, lead_flag, unknown_solution_flag;

var unknown_solution_timer, unknown_solution_count, drop_ninhydrin_timer, drop_ninhydrin_count, drop_hno3_timer;

var drop_hno3_count, solution_on_water_bath_flag, clock_label, clock_label_boiling, hno3_flag, testtube_shaking_count;

var naoh_flag, drop_naoh_timer, drop_naoh_count, boiling_flag, smoke_anim_timer, sulphanilic_flag, amino_acid_flag;

var drop_sulphanilic_timer, drop_sulphanilic_count, nano2_flag, drop_nano2_timer, drop_naoh_count, drop_amino_timer;

var drop_amino_count, na2co3_flag, drop_na2co3_timer, drop_na2co3_count, drop_millon_timer, drop_millon_count, millon_reagent_count;

var acetic_flag, drop_acetic_timer, drop_acetic_count, h2so4_flag, drop_h2so4_count, drop_h2so4_timer, lead_acetate_flag;

var drop_lead_timer, drop_lead_count, water_anim_frame, water_anim_width, presence_of_amino_acid, presence_of_proline, presence_of_tyrosine_millon;

var presence_of_aromatic, absence_of_aromatic, presence_of_tyrosine, presence_of_cysteine, presence_of_tryptophan, naoh_count;

var presence_of_violet_tryptophan, timer, solution_anim_count, solution_anim_timer, water_anim_timer, millon_reagent_flag;

var anim_frame, anim_width, anim_object, smoke_anim_frame, smoke_anim_width, flame_anim_frame, flame_anim_width, flame_anim_timer;

/** Arrays declarations */
var help_array = color_solution_array = color_solution_anim_array = [];

/** Createjs shapes declarations */
var naoh_rect = new createjs.Shape();
var hno3_rect = new createjs.Shape();
var ninhydrin_rect = new createjs.Shape();
var millon_rect = new createjs.Shape();
var sulphanilic_rect = new createjs.Shape();
var nano2_rect = new createjs.Shape();
var amino_acid_rect = new createjs.Shape();
var na2co3_rect = new createjs.Shape();
var h2so4_rect = new createjs.Shape();
var lead_acetate_rect = new createjs.Shape();
var acetic_rect = new createjs.Shape();
var unknown_solution_rect = new createjs.Shape();
var mask_solution_rect = new createjs.Shape();
var hit_solution_rect = new createjs.Shape();
var water_bath_rect = new createjs.Shape();
var dropper_solution_mask = new createjs.Shape();
var smoke_mask_rect = new createjs.Shape();
var boiling_rect = new createjs.Shape();
var water_anim_rect = new createjs.Shape();

function directiveFunction() {
    return {
        restrict: "A",
        link: function(scope, element, attrs, dialogs) {
            /** Variable that decides if something should be drawn on mouse move */
            var experiment = true;
            if (element[0].width > element[0].height) {
                element[0].width = element[0].height;
                element[0].height = element[0].height;
            } else {
                element[0].width = element[0].width;
                element[0].height = element[0].width;
            }
            if (element[0].offsetWidth > element[0].offsetHeight) {
                element[0].offsetWidth = element[0].offsetHeight;
            } else {
                element[0].offsetWidth = element[0].offsetWidth;
                element[0].offsetHeight = element[0].offsetWidth;
            }
            exp_canvas = document.getElementById("demoCanvas");
            exp_canvas.width = element[0].width;
            exp_canvas.height = element[0].height;
            /** Initialisation of stage */
            qualitative_analysis_stage = new createjs.Stage("demoCanvas");  
            queue = new createjs.LoadQueue(true);        
            /** Preloading the images */
            queue.loadManifest([{
                id: "background",
                src: "././images/background.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "burner",
                src: "././images/burner.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "icecubes",
                src: "././images/icecubes.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "clock",
                src: "././images/clock.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "clock_needle",
                src: "././images/clock_needle.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "drop_white",
                src: "././images/drop_white.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "dropper_solution_white",
                src: "././images/dropper_solution_white.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "dropper",
                src: "././images/dropper.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "testtube_solution",
                src: "././images/testtube_solution.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "testtube_blue_solution",
                src: "././images/testtube_blue_solution.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "testtube_yellow_solution",
                src: "././images/testtube_yellow_solution.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "water_under_still",
                src: "././images/water_under_still.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "testtube",
                src: "././images/testtube.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "water_anim",
                src: "././images/water_anim.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "testtube_stand_top",
                src: "././images/testtube_stand_top.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "water_bath_closer",
                src: "././images/water_bath_closer.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "water_bath_cover",
                src: "././images/water_bath_cover.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "beaker_front",
                src: "././images/beaker_front.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "yellow_solution_anim",
                src: "././images/yellow_solution_anim.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "violet_solution_anim",
                src: "././images/violet_solution_anim.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "smoke_anim",
                src: "././images/smoke_anim.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "orange_solution_anim",
                src: "././images/orange_solution_anim.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "red_solution_anim",
                src: "././images/red_solution_anim.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "black_solution_anim",
                src: "././images/black_solution_anim.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "purple_ring_anim",
                src: "././images/purple_ring_anim.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "yellow_white_merged",
                src: "././images/yellow_white_merged.svg",
                type: createjs.LoadQueue.IMAGE
            }, {
                id: "flames",
                src: "././images/flames.svg",
                type: createjs.LoadQueue.IMAGE
            }]);          
            queue.installPlugin(createjs.Sound);
            loadingProgress(queue,qualitative_analysis_stage,exp_canvas.width);
            qualitative_analysis_stage.enableDOMEvents(true);
            qualitative_analysis_stage.enableMouseOver();
            createjs.Touch.enable(qualitative_analysis_stage);
            queue.on("complete", handleComplete, this);            
            tick = setInterval(updateTimer, 100); /** Stage update function in a timer */

            function handleComplete() { 
                /** Loading images and text */
                loadImages(queue.getResult("background"), "background", 0, 0, "", 0, qualitative_analysis_stage, 1);
                createSolutionRect(smoke_mask_rect, 565, 240, 50, 200, ""); /** Rect for smoke animation mask */
                /** Labels for NaOH, Conc. HNO3, Ninhydrin, Millon's Reagent, Sulphanilic Acid, NaNO2, 
                Amino Acid, Na2CO3, H2SO4, Lead Acetate, Acetic Acid and Clock*/
                setText("naoh_text", 125, 263, _("NaOH"), "black", 1.1, qualitative_analysis_stage); 
                setText("hno3_text", 45, 263, _("Conc.HNO3"), "black", 0.9, qualitative_analysis_stage);
                setText("ninhydrin_text", 40, 135, _("Ninhydrin"), "black", 0.9, qualitative_analysis_stage);
                setText("millon_text", 120, 128, _("Millon's Reagent"), "black", 0.9, qualitative_analysis_stage);
                setText("na2co3_text", 570, 135, _("Na2CO3"), "black", 1.1, qualitative_analysis_stage);
                setText("h2so4_text", 650, 135, _("H2SO4"), "black", 1.1, qualitative_analysis_stage);
                setText("lead_text", 658, 252, _("Lead Acetate"), "black", 0.9, qualitative_analysis_stage);
                setText("acetic_acid_text", 576, 251, _("Acetic Acid - Glyoxilic Acid"), "black", 0.85, qualitative_analysis_stage);
                setText("clock_text", 330, 340, "", "white", 1, qualitative_analysis_stage);
                setText("unknown_soln_txt", 365, 615, _("Unknown Solution"), "black", 1, qualitative_analysis_stage);
                /** Rect for dropper solution masking */
                qualitative_analysis_stage.addChild(dropper_solution_mask);
                dropper_solution_mask.x = 350;
                dropper_solution_mask.y = 95;
                dropper_solution_mask.graphics.beginFill("red").drawRect(0, 0, 10, 50).command;
                dropper_solution_mask.alpha = 0.01;
                createSolutionRect(naoh_rect, 95, 172, 60, 90, "pointer"); /** Rect for click, drag and drop NaOH solution */
                createSolutionRect(hno3_rect, 12, 172, 60, 90, "pointer"); /** Rect for click, drag and drop HNO3 solution */        
                createSolutionRect(ninhydrin_rect, 12, 50, 60, 90, "pointer"); /** Rect for click, drag and drop Ninhydrin solution */
                createSolutionRect(millon_rect, 95, 50, 60, 90, "pointer"); /** Rect for click, drag and drop Millon's reagent solution */
                createSolutionRect(na2co3_rect, 540, 50, 60, 90, "pointer"); /** Rect for click, drag and drop Na2CO3 solution */
                createSolutionRect(h2so4_rect, 615, 50, 60, 90, "pointer"); /** Rect for click, drag and drop H2SO4 solution */
                createSolutionRect(lead_acetate_rect, 625, 172, 60, 90, "pointer"); /** Rect for click, drag and drop Lead acetate solution */
                createSolutionRect(acetic_rect, 540, 172, 60, 90, "pointer"); /** Rect for click, drag and drop Acetic acid */
                createSolutionRect(unknown_solution_rect, 322, 390, 70, 110, "pointer"); /** Rect for click, drag and drop unknown solution */
                createSolutionRect(hit_solution_rect, 200, 360, 120, 150, ""); /** Rect for hit with the dropper */ 
                createSolutionRect(water_anim_rect, 120, 520, 80, 100, ""); /** Rect for hit with the dropper */               
                loadImages(queue.getResult("drop_white"), "drop_white", 260, 427, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("dropper_solution_white"), "dropper_solution_white", 138, 60, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("dropper"), "dropper", 138, 150, "move", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("burner"), "burner", -8, 492, "move", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("icecubes"), "icecubes", 197, 80, "move", 0, qualitative_analysis_stage, 1);
                createSolutionRect(sulphanilic_rect, 220, 45, 60, 90, "pointer"); /** Rect for click, drag and drop Sulphanilic solution */
                createSolutionRect(nano2_rect, 320, 45, 60, 90, "pointer"); /** Rect for click, drag and drop NaNO2 solution */
                createSolutionRect(amino_acid_rect, 420, 45, 60, 90, "pointer"); /** Rect for click, drag and drop Amino acid */
                loadImages(queue.getResult("smoke_anim"), "smoke_anim", 547, 170, "", 0, qualitative_analysis_stage, 1);                
                loadImages(queue.getResult("testtube_solution"), "testtube_solution", 250, 470, "", 0, qualitative_analysis_stage, 0.95);
                loadImages(queue.getResult("testtube_blue_solution"), "testtube_blue_solution", 581, 520, "", 0, qualitative_analysis_stage, 0.95);
                loadImages(queue.getResult("testtube_yellow_solution"), "testtube_yellow_solution", 581, 500, "", 0, qualitative_analysis_stage, 0.95);
                loadImages(queue.getResult("yellow_white_merged"), "yellow_white_merged", 250, 545, "", 0, qualitative_analysis_stage, 0.95);
                loadImages(queue.getResult("yellow_solution_anim"), "yellow_solution_anim", 250, 565, "", 0, qualitative_analysis_stage, 0.9);
                loadImages(queue.getResult("orange_solution_anim"), "orange_solution_anim", 250, 530, "", 0, qualitative_analysis_stage, 0.9);
                loadImages(queue.getResult("red_solution_anim"), "red_solution_anim", 250, 530, "", 0, qualitative_analysis_stage, 0.9);
                loadImages(queue.getResult("red_solution_anim"), "millon_solution_anim", 250, 530, "", 0, qualitative_analysis_stage, 0.9);
                loadImages(queue.getResult("black_solution_anim"), "black_solution_anim", 250, 530, "", 0, qualitative_analysis_stage, 0.9);
                loadImages(queue.getResult("purple_ring_anim"), "purple_ring_anim", 250, 560, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("water_under_still"), "water_under_still", 120, 525, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("testtube"), "testtube", 248, 448, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("water_anim"), "water_anim", 120, 525, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("testtube_stand_top"), "testtube_stand_top", 232, 520, "", 0, qualitative_analysis_stage, 1);                
                loadImages(queue.getResult("water_bath_cover"), "water_bath_cover", 550, 434, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("water_bath_closer"), "water_bath_closer", 572, 428, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("beaker_front"), "beaker_front", 115, 507, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("flames"), "flames", 47.5, 440, "", 0, qualitative_analysis_stage, 1);
                loadImages(queue.getResult("clock"), "clock", 260, 170, "", 0, qualitative_analysis_stage, 0.9);
                loadImages(queue.getResult("clock_needle"), "clock_needle", 338, 250, "", 0, qualitative_analysis_stage, 0.9);
                setText("sulphanilic_text", 260, 128, _("Sulphanilic Acid"), "black", 0.9, qualitative_analysis_stage);
                setText("nano2_text", 355, 135, _("NaNO2"), "black", 1.1, qualitative_analysis_stage);
                setText("amino_acid_text", 452, 134, _("Amino Acid"), "black", 0.9, qualitative_analysis_stage);
                createSolutionRect(boiling_rect, 45, 440, 22, 150, "pointer"); /** Heating click rect */
                createSolutionRect(water_bath_rect, 460, 460, 370, 150, "pointer"); /** Rect for water bath events */  
                /** Initializing the variables */
                initialisationOfVariables(); 
                /** Function call for images used in the apparatus visibility */
                initialisationOfImages();
                /** Function call for the initial value of the controls */
                initialisationOfControls(scope);
                /** Translation of strings using gettext */
                translationLabels();
                /** Rect for testube milk masking */
                qualitative_analysis_stage.addChild(mask_solution_rect);
                mask_solution_rect.x = 248;
                mask_solution_rect.y = 595;
                mask_solution_rect.graphics.beginFill("red").drawRect(0, 0, 28, 135).command;
                mask_solution_rect.alpha = 0.01;                
                /** Flame animation function in a atimer */
                flame_anim_timer = setInterval(flameAnimation, 250);
                scope.$apply();
            }

            /** Add all the strings used for the language translation here. '_' is the short cut for 
            calling the gettext function defined in the gettext-definition.js */
            function translationLabels() { 
                /** This help array shows the hints for this experiment */
                help_array = [_("help1"), _("help2"), _("help3"), _("help4"), _("help5"), _("help6"), _("help7"), _("help8"), _("help9"), _("help10"), _("help11"), _("help12"), _("help13"), _("help14"), _("help15"), _("help16"), _("help17"), _("help18"), _("help19"), _("help20"), _("help21"), _("help22"), _("Next"), _("Close")];
                scope.heading = _("Qualitative Analysis of Amino Acid");
                scope.variables = _("Variables");
                scope.result = _("Messages");
                scope.copyright = _("copyright");
                scope.ninhydrin_txt = _("Ninhydrin Test");
                scope.xanthoproteic_txt = _("Xanthoproteic Acid Test");
                scope.pauly_diazo_txt = _("Pauly's Diazo Test");
                scope.millon_txt = _("Millon's Test");
                scope.hopkins_txt = _("Hopkins Cole Test");
                scope.lead_txt = _("Lead Sulphide Test");
                clock_label = _("5 minutes at");
                clock_label_boiling = _("3 to 5 minutes");
                presence_of_proline = _("Yellow color indicates the presence of proline.");
                presence_of_amino_acid = _("Blue color indicates the presence of alpha amino acid.");
                presence_of_aromatic = _("Orange color indicates presence of aromatic amino acid.");
                absence_of_aromatic = _("No change in color indicates absence of aromatic amino acid.");
                presence_of_tyrosine = _("Red color indicates presence of tyrosine or histidine.");
                presence_of_tyrosine_millon = _("Red precipitate indicates the presence of Tyrosine.");
                presence_of_cysteine = _("Black precipitate indicates the presence of cysteine.");
                presence_of_tryptophan = _("No changes in color indicates it may be tryptophan.");
                presence_of_violet_tryptophan = _("Purple violet ring indicates the presence of tryptophan.");
                scope.reset_txt = _("Reset");
                scope.$apply();
            }
        }
    }
}
/** All the texts loading and added to the natural_convection_stage */
function setText(name, textX, textY, value, color, fontSize, container) {
    var _text = new createjs.Text(value, "bold " + fontSize + "em Tahoma, Geneva, sans-serif", color);
    _text.x = textX;
    _text.y = textY;
    _text.textBaseline = "alphabetic";
    _text.name = name;
    _text.text = value;
    _text.textAlign = 'center' 
    _text.lineWidth = 80;
    _text.color = color;
    container.addChild(_text); /** Adding text to the container */
}
/** All the images loading and added to the natural_convection_stage */
function loadImages(image, name, xPos, yPos, cursor, rot, container, scale) {
    var _bitmap = new createjs.Bitmap(image).set({});
    _bitmap.x = xPos;
    _bitmap.y = yPos;
    _bitmap.scaleX = _bitmap.scaleY = scale;
    _bitmap.name = name;
    _bitmap.alpha = 1;
    _bitmap.rotation = rot;
    _bitmap.cursor = cursor;
    if ( name == "testtube_solution" || name == "yellow_white_merged" || name == "yellow_solution_anim" ||  name == "orange_solution_anim" || name == "red_solution_anim" || name == "black_solution_anim" || name == "purple_ring_anim" || name == "millon_solution_anim" ) { 
        _bitmap.mask = mask_solution_rect;
    } else if ( name == "dropper_solution_white" ) {
        _bitmap.mask = dropper_solution_mask;
    } else if ( name == "smoke_anim" ) {
        _bitmap.mask = smoke_mask_rect;
    } else if ( name == "flames" ) {
        _bitmap.mask = boiling_rect;
    } else if ( name == "water_anim" ) {
        _bitmap.mask = water_anim_rect;
    }
    if ( name == "clock_needle" ) {
        _bitmap.regX = _bitmap.image.width / 2;
        _bitmap.regY = _bitmap.image.height / 2; 
    }
    container.addChild(_bitmap); /** Adding bitmap to the container */
}
/** Function to return child element of stage */
function getChild(child_name) {
    return qualitative_analysis_stage.getChildByName(child_name); /** Returns the child element of stage */
} 
/** All variables initialising in this function */
function initialisationOfVariables() {
    anim_frame = 0; /** Frame used for animation */
    smoke_anim_width = 74.985;
    flame_anim_width = 16.967;
    water_anim_width = 81;
    millon_reagent_count = 1; 
    naoh_count = 1;
    solution_anim_count = smoke_anim_count = smoke_anim_frame = flame_anim_frame = 0;
    testtube_shaking_count = unknown_solution_count = drop_ninhydrin_count = 0;   
    drop_hno3_count = drop_naoh_count = drop_sulphanilic_count = drop_nano2_count = 0;    
    drop_amino_count = drop_na2co3_count = drop_millon_count = drop_acetic_count = 0;
    drop_h2so4_count = drop_lead_count = water_anim_frame = 0;    
    solution_on_water_bath_flag = water_bath_rect.mouseEnabled = boiling_rect.mouseEnabled = false;
    ninhydrin_flag = xanthoproteic_flag = hno3_flag = pauly_diazo_flag = millon_flag = false;
    hopkins_flag = lead_flag = unknown_solution_flag = naoh_flag = boiling_flag = false;
    sulphanilic_flag = nano2_flag = amino_acid_flag = na2co3_flag = millon_flag = false;
    acetic_flag = h2so4_flag = lead_acetate_flag = millon_reagent_flag = false;
}
/** Set the initial status of the bitmap and text depends on its visibility and initial values */
function initialisationOfImages() {
    getChild("drop_white").visible = false;
    getChild("dropper_solution_white").visible = false;
    getChild("dropper").visible = false;
    getChild("testtube_blue_solution").visible = false;
    getChild("testtube_yellow_solution").visible = false;
    getChild("yellow_white_merged").visible = false;
    getChild("orange_solution_anim").visible = false;
    getChild("red_solution_anim").visible = false;
    getChild("millon_solution_anim").visible = false;
    getChild("black_solution_anim").visible = false;
    getChild("purple_ring_anim").visible = false;
    getChild("yellow_solution_anim").visible = false;
    getChild("smoke_anim").visible = false;
    getChild("testtube_solution").alpha = 0.5;
    getChild("clock").visible = false;
    getChild("clock_needle").visible = false;
    unknown_solution_rect.mouseEnabled = false;
}
/** Set the initial value of the controls */
function initialisationOfControls(scope) {
    scope.ninhydrin_disable = false;
}
/** Stage updation function */
function updateTimer() {
    qualitative_analysis_stage.update();
}
/** Burner flame animation function */
function flameAnimation() {
    flame_anim_frame++; /** Frame increment */
    if (flame_anim_frame < 3) {
        getChild("flames").x = getChild("flames").x - flame_anim_width; /** Changing of animation object x position */
    } else {
        flame_anim_frame = 0;
        getChild("flames").x = 47.5;
    }
}