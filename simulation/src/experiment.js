/** Function for creating dynamic rectangles */
function createSolutionRect(name, x_val, y_val, width, height, cursor) {
    name.graphics.beginFill("white").drawRect(x_val, y_val, width, height);
    name.alpha = 0.01;
    name.cursor = cursor;
    qualitative_analysis_stage.addChild(name);
}
/** Click event of Ninhydrin */
function ninhydrinTestEvent(scope, dialogs) {
    ninhydrin_flag = true;
    scope.ninhydrin_disable = true; 
    unknown_solution_rect.mouseEnabled = true;
    equipmentsClick(scope, dialogs); /** Function for click, drag and drop all equipments used in this experiment */
}
/** Click event of Xanthoproteic */
function xanthoproteicEvent(scope, dialogs) {    
    resetAllSettings(scope, dialogs); /** Reset all the flags and images in each button click for different tests */
    unknown_solution_rect.mouseEnabled = true;
    xanthoproteic_flag = true;
    scope.xanthoproteic_disable = true;
}
/** Click event of Xanthoproteic */
function paulysDiazoEvent(scope, dialogs) {
    resetAllSettings(scope, dialogs); /** Reset all the flags and images in each button click for different tests */
    pauly_diazo_flag = true;
    scope.pauly_disable = true; 
}
/** Click event of Xanthoproteic */
function millonTestEvent(scope, dialogs) {
    resetAllSettings(scope, dialogs); /** Reset all the flags and images in each button click for different tests */
    unknown_solution_rect.mouseEnabled = true;
    millon_flag = true;
    scope.millon_disable = true; 
}
/** Click event of Xanthoproteic */
function hopkinColeTestEvent(scope, dialogs) {
    resetAllSettings(scope, dialogs); /** Reset all the flags and images in each button click for different tests */
    unknown_solution_rect.mouseEnabled = true;
    hopkins_flag = true;
    scope.hopkins_disable = true; 
}
/** Click event of Xanthoproteic */
function leadTestEvent(scope, dialogs) {
    resetAllSettings(scope, dialogs); /** Reset all the flags and images in each button click for different tests */
    naoh_rect.mouseEnabled = true;
    unknown_solution_rect.mouseEnabled = true;
    lead_flag = true;
    scope.lead_disable = true; 
}
/** Function for the events of all equipments */
function equipmentsClick(scope, dialogs) {   
    /** Ninhydrin solution click event */
    ninhydrin_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( ninhydrin_flag == true & unknown_solution_flag == true ) {    
            ninhydrin_rect.mouseEnabled = false;  
            getChild("dropper").mouseEnabled = true;    
            dragNinhydrin(scope, "ninhydrin_rect"); /** Function for drag Ninhydrin dropper to near of the testtube */               
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** Conc. HNO3 solution click event */
    hno3_rect.on("pressup", function() {
        color_solution_anim_array = [];        
        if ( (xanthoproteic_flag == true & unknown_solution_flag == true) || (millon_flag == true & boiling_flag == true) ) {  
            hno3_rect.mouseEnabled = false;  
            getChild("dropper").mouseEnabled = true;                
            dragHno3(scope, "hno3_rect"); /** Function for drag HNO3 dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** NaOH solution click event */
    naoh_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( (xanthoproteic_flag == true & boiling_flag == true) || (lead_flag == true & unknown_solution_flag == true) ) {
            naoh_rect.mouseEnabled = false;
            getChild("dropper").mouseEnabled = true;
            dragNaoh(scope, "naoh_rect"); /** Function for drag NaOH dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** Sulphanilic acid click event */
    sulphanilic_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( pauly_diazo_flag == true ) {
            sulphanilic_rect.mouseEnabled = false;
            getChild("dropper").mouseEnabled = true;
            dragSulphanilic(scope, "sulphanilic_rect"); /** Function for drag sulphanilic acid dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** NaNO2 solution click event */
    nano2_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( pauly_diazo_flag == true & sulphanilic_flag == true ) {
            nano2_rect.mouseEnabled = false;
            getChild("dropper").mouseEnabled = true;
            dragNano2(scope, "nano2_rect"); /** Function for drag NaNO2 dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** Amino acid click event */
    amino_acid_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( pauly_diazo_flag == true & nano2_flag == true ) {
            amino_acid_rect.mouseEnabled = false;
            getChild("dropper").mouseEnabled = true;
            dragAminoAcid(scope, "amino_acid_rect"); /** Function for drag amino acid dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /**Na2CO3 solution click event */
    na2co3_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( pauly_diazo_flag == true & amino_acid_flag == true ) {
            na2co3_rect.mouseEnabled = false;
            getChild("dropper").mouseEnabled = true;
            dragNa2co3(scope, "na2co3_rect"); /** Function for drag Na2CO3 dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** Millon's reagent click event */
    millon_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( unknown_solution_flag == true & millon_flag == true ) {
            millon_rect.mouseEnabled = false;
            getChild("dropper").mouseEnabled = true;
            dragMillon(scope, "millon_rect"); /** Function for drag millon's reagent dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** Acetic and Glyoxilic acid click event */
    acetic_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( unknown_solution_flag == true & hopkins_flag == true ) {
            acetic_rect.mouseEnabled = false;
            getChild("dropper").mouseEnabled = true;
            dragAcetic(scope, "acetic_rect"); /** Function for drag acetic acid dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** H2SO4 solution click event */
    h2so4_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( acetic_flag == true ) {
            h2so4_rect.mouseEnabled = false;
            getChild("dropper").mouseEnabled = true;
            dragH2so4(scope, "h2so4_rect"); /** Function for drag H2SO4 dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** Lead acetate solution click event */
    lead_acetate_rect.on("pressup", function() {
        color_solution_anim_array = [];
        if ( lead_flag == true & boiling_flag == true ) {
            lead_acetate_rect.mouseEnabled = false;
            getChild("dropper").mouseEnabled = true;
            dragLeadAcetate(scope, "lead_acetate_rect"); /** Function for drag lead acetate dropper to near of the testtube */ 
        } else {
            dialogs.error(); /** Error alert */
            scope.$apply(); 
        }
    });
    /** Water bath click event */
    water_bath_rect.on("pressup", function() {
        color_solution_anim_array = [];
        solutionWaterBath(scope); /** Function for the solution testtube move to the water bath */
        scope.control_disable = true;
        water_bath_rect.mouseEnabled = false;
        getChild("clock_needle").rotation = 0;
        scope.$apply();
    });
    /** Solution burner click event */
    boiling_rect.on("pressup", function() {
        color_solution_anim_array = [];
        testtube_shaking_count = 0;
        getChild("clock_needle").rotation = 0;
        testtubeSolutionBoiling(scope); /** Function for drag and boil solution */
    });
    /** Unknown solution click event */
    unknown_solution_rect.on("pressup", function() {
        color_solution_anim_array = [];
        unknown_solution_rect.mouseEnabled = false;
        getChild("dropper").mouseEnabled = true;
        dragUnknownSolution(scope, "unknown_solution_rect"); /** Function for drag unknown solution dropper to near of the testtube */ 
    });
}
 /** Function for drag unknown solution dropper to near of the testtube */
function dragUnknownSolution(scope, unknown_solution_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, unknown_solution_rect, "dropper_solution_white", "drop_white", 350, 400, 353, 430, unknown_solution_timer, unknown_solution_count);
}
/** Drag and drop Ninhydrin to the testtube */
function dragNinhydrin(scope, ninhydrin_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, ninhydrin_rect, "dropper_solution_white", "drop_white", 35, 50, 38, 80, drop_ninhydrin_timer, drop_ninhydrin_count);
}
/** Drag and drop HNO3 to the testtube */
function dragHno3(scope, hno3_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, hno3_rect, "dropper_solution_white", "drop_white", 35, 180, 38, 210, drop_hno3_timer, drop_hno3_count);
}
/** Drag and drop NaOH to the testtube */
function dragNaoh(scope, naoh_rect) {    
    /** Drag and drop solution to the testtube */
    dragDropper(scope, naoh_rect, "dropper_solution_white", "drop_white", 120, 180, 123, 220, drop_naoh_timer, drop_naoh_count);   
}
/** Drag and drop Sulphanilic acid to the testtube */
function dragSulphanilic(scope, sulphanilic_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, sulphanilic_rect, "dropper_solution_white", "drop_white", 245, 50, 248, 80, drop_sulphanilic_timer, drop_sulphanilic_count);
}
/** Drag and drop NaNO2 to the testtube */
function dragNano2(scope, nano2_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, nano2_rect, "dropper_solution_white", "drop_white", 345, 50, 348, 80, drop_nano2_timer, drop_nano2_count);
}
/** Drag and drop Amino acid to the testtube */
function dragAminoAcid(scope, amino_acid_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, amino_acid_rect, "dropper_solution_white", "drop_white", 445, 50, 448, 80, drop_amino_timer, drop_amino_count);
}
/** Drag and drop Na2CO3 to the testtube */
function dragNa2co3(scope, na2co3_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, na2co3_rect, "dropper_solution_white", "drop_white", 562, 50, 565, 80, drop_na2co3_timer, drop_na2co3_count);
}
/** Drag and drop Millon's reagent to the testtube */
function dragMillon(scope, millon_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, millon_rect, "dropper_solution_white", "drop_white", 125, 50, 128, 80, drop_millon_timer, drop_millon_count);
}
/** Drag and drop Acetic and glyoxilic acid to the testtube */
function dragAcetic(scope, acetic_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, acetic_rect, "dropper_solution_white", "drop_white", 562, 170, 565, 200, drop_acetic_timer, drop_acetic_count);
}
/** Drag and drop H2SO4 to the testtube */
function dragH2so4(scope, h2so4_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, h2so4_rect, "dropper_solution_white", "drop_white", 645, 50, 646, 80, drop_h2so4_timer, drop_h2so4_count);
}
/** Drag and drop Lead acetate to the testtube */
function dragLeadAcetate(scope, lead_acetate_rect) {
    /** Drag and drop solution to the testtube */
    dragDropper(scope, lead_acetate_rect, "dropper_solution_white", "drop_white", 645, 170, 646, 200, drop_lead_timer, drop_lead_count);
}
/** Move the solution into the top place of water bath */
function solutionWaterBath(scope) {
    var water_bath_open_tween = createjs.Tween.get(getChild("water_bath_closer")).to({
        x:getChild("water_bath_closer").x+35, y: getChild("water_bath_closer").y-10
    }, 1500); /** Water bath lid open tween */
    var testtube_solution_move_tween = createjs.Tween.get(getChild("testtube_solution")).to({
        x: getChild("testtube_solution").x+330, y: getChild("testtube_solution").y-200
    }, 2000); /** Testtube solution move to the top place of water bath */
    var testtube_mask_move_tween = createjs.Tween.get(mask_solution_rect).to({
        x: mask_solution_rect.x+330, y: mask_solution_rect.y-200
    }, 2000); /** Testtube mask move to the top place of water bath */
    /** Testtube move to the top place of water bath and after that testtubePutInWaterBath function is calling */
    var testtube_move_tween = createjs.Tween.get(getChild("testtube")).to({
        x: getChild("testtube").x+330, y: getChild("testtube").y-200
    }, 2000).call(function() { testtubePutInWaterBath(scope)});
}
/** Move the solution into water bath */
function testtubePutInWaterBath(scope) {
    /** Testtube move to water bath and after that displayClock function is calling */
    var testtube_in_waterbath_tween = createjs.Tween.get(getChild("testtube")).to({
        y: getChild("testtube").y+155
    }, 2000).call(function() { displayClock(scope)});
    var testtube_solution_in_waterbath_tween = createjs.Tween.get(getChild("testtube_solution")).to({
        y: getChild("testtube_solution").y+160
    }, 2000); /** Testtube solution move to the water bath */
    var testtube_mask_in_waterbath_tween = createjs.Tween.get(mask_solution_rect).to({
        y: mask_solution_rect.y+160
    }, 2000); /** Testtube mask move to the water bath */
}
/** Function for display clock and time */
function displayClock(scope) {
    /** Loading of clock and clock needle images here */
    getChild("clock").visible = true;
    getChild("clock_needle").visible = true;
    getChild("clock_text").visible = true;
    /** If the test selected is 'Ninhydrin test' the ninhydrinResult function is calling after rotation of clock needle 
    else only the rotation of clock needle is there */
    if ( ninhydrin_flag ) {
        getChild("clock_text").text = clock_label+"100℃";
        var needle_rotation_tween_one = createjs.Tween.get(getChild("clock_needle")).to({
            rotation: 427
        }, 3000).call(function() { ninhydrinResult(scope)});        
    } else {
        getChild("clock_text").text = clock_label_boiling;
        var needle_rotation_tween_two = createjs.Tween.get(getChild("clock_needle")).to({
            rotation: 427
        }, 3000);    
    }  
}
/** Animation function for display the smoke after */
function smokeAnimation() {
    smoke_anim_object = getChild("smoke_anim");
    smoke_anim_object.visible = true;
    smoke_anim_frame++; /** Frame increment */
    if ( smoke_anim_frame <= 19 ) {
        smoke_anim_object.x = smoke_anim_object.x - smoke_anim_width; /** Changing of animation object x position */
    } else {
        smoke_anim_frame = 0; /** Resetting the animation frame */        
        smoke_anim_object.x = 547; /** Resetting the position of water animation object */
    }
}
/** Function for the Ninhydrin test result */
function ninhydrinResult(scope) {
    /** Remove the clock, clock needle and clock text here */
    getChild("clock").visible = false;
    getChild("clock_needle").visible = false;
    getChild("clock_text").visible = false;
    /** Array for the random color display of solution */
    color_solution_array = ["testtube_blue_solution", "testtube_yellow_solution"];
    random_color = Math.floor(Math.random() * color_solution_array.length);
    getChild(color_solution_array[random_color]).visible = true;
    var testtube_in_waterbath_tween = createjs.Tween.get(getChild("testtube")).to({
        y: getChild("testtube").y-135
    }, 2000); /** Testtube movement from water bath */
    var testtube_solution_in_waterbath_tween = createjs.Tween.get(getChild(color_solution_array[random_color])).to({
        y: getChild("testtube_solution").y-52
    }, 2000); /** Testtube solution movement from water bath */
    scope.result_txt = false;   
    /** Smoke animation timer */    
    smoke_anim_timer = setInterval(function() { 
        smoke_anim_count++;
        smokeAnimation(scope, smoke_anim_count); /** Smoke animation function */
        if ( smoke_anim_count == 19 ) {
            smoke_anim_count = 0;
            if ( random_color == 0 ) { /** If the solution color is blue */
                scope.xanthoproteic_disable = false;        
                scope.result_text = presence_of_amino_acid;
                scope.$apply();  
            } else { /** Else the solution color is yellow */
                scope.result_text = presence_of_proline;
                scope.$apply();
            }
        }
    }, 150); 
    solution_on_water_bath_flag = true;
    scope.$apply();
}
/** Resetting of all flags and images in this function */
function resetAllSettings(scope, dialogs) {
    clearInterval(unknown_solution_timer);
    clearInterval(drop_ninhydrin_timer);
    clearInterval(drop_hno3_timer);
    clearInterval(drop_naoh_timer);
    clearInterval(drop_sulphanilic_timer);
    clearInterval(drop_nano2_timer);
    clearInterval(drop_amino_timer);
    clearInterval(drop_na2co3_timer);
    clearInterval(drop_millon_timer);
    clearInterval(drop_acetic_timer);
    clearInterval(drop_h2so4_timer);
    clearInterval(drop_lead_timer);
    clearInterval(smoke_anim_timer);
    clearInterval(water_anim_timer);
    scope.result_txt = true;
    ninhydrin_flag = false;
    boiling_flag = false;
    naoh_flag = false;
    hno3_flag = false;
    millon_flag = false;
    lead_flag = false;
    xanthoproteic_flag = false;
    acetic_flag = false;
    nano2_flag = false;
    sulphanilic_flag = false;
    pauly_diazo_flag = false;
    millon_reagent_flag = false;
    unknown_solution_flag = false;
    scope.result_txt = true;  
    getChild("smoke_anim").visible = false;
    getChild("testtube_blue_solution").visible = false;
    getChild("testtube_yellow_solution").visible = false;
    getChild("yellow_white_merged").visible = false;
    getChild("testtube_solution").visible = true;     
    getChild("yellow_solution_anim").alpha = 0;
    getChild("orange_solution_anim").alpha = 0;
    getChild("black_solution_anim").alpha = 0;
    getChild("red_solution_anim").alpha = 0;
    getChild("millon_solution_anim").alpha = 0;   
    getChild("yellow_solution_anim").x = 250;
    getChild("orange_solution_anim").x = 250;
    getChild("black_solution_anim").x = 250;
    getChild("red_solution_anim").x = 250;
    getChild("millon_solution_anim").x = 250;  
    getChild("testtube_solution").x = 250;
    getChild("testtube_solution").y = 470;
    mask_solution_rect.x = 250;
    mask_solution_rect.y = 595;
    getChild("testtube").x = 248;
    getChild("testtube").y = 448;
    getChild("water_bath_closer").x = 572;
    getChild("water_bath_closer").y = 428;    
    testtube_shaking_count = 0;
    getChild("clock_needle").rotation = 0;
    boiling_rect.mouseEnabled = false;
}
/** Testtube movement for boiling the solution */
function testtubeSolutionBoiling(scope) { 
    boiling_rect.mouseEnabled = false;
    var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
        y: getChild("testtube").y-155
    }, 2000); /** Testtube move from the testtube stand */
    if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
            y: getChild("yellow_white_merged").y-155
        }, 2000); /** Yellow color solution move from the testtube stand */
        getChild("testtube_solution").visible = false;
    } else {
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
            y: getChild("testtube_solution").y-155
        }, 2000); /** Testtube solution move from the testtube stand */
    }    
    var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
        y: mask_solution_rect.y-155
    }, 2000).call(testtubeBoiling); /** Testtube mask rect move from the testtube stand */
}
/** Testtube movement for boiling the solution */
function testtubeBoiling(scope) {    
    var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
        x: getChild("testtube").x-205, y: getChild("testtube").y+45
    }, 2000); /** Testtube move to the top place of burner */
    if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
            x: getChild("yellow_white_merged").x-205, y: getChild("yellow_white_merged").y+45
        }, 2000).call(function() { displayClock(scope)}); /** Yellow color solution move to the top place of burner */
    } else {                 
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
            x: getChild("testtube_solution").x-205, y: getChild("testtube_solution").y+45
        }, 2000).call(function() { displayClock(scope)}); /** Testtube solution move to the top place of burner */
    }    
    var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
        x: mask_solution_rect.x-205, y: mask_solution_rect.y+45
    }, 2000).call(testtubeShakingLeft); /** Testtube mask rect move to the top place of burner */
}
/** Testtube shaking left function */
function testtubeShakingLeft(scope) {
    testtube_shaking_count++;
    var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
        x: getChild("testtube").x-7.5
    }, 500); /** Testtube left movement */
    if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
            x: getChild("yellow_white_merged").x-7.5
        }, 500); /** Yellow color solution left movement */
    } else {
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
            x: getChild("testtube_solution").x-7.5
        }, 500); /** Testtube solution left movement */
    }    
    var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
        x: mask_solution_rect.x-6
    }, 500).call(testtubeShakingRight); /** Testtube mask rect left movement */
}
/** Testtube shaking right function */
function testtubeShakingRight(scope) {
    /** The testtubeShakingLeft function is calling after testtubeShakingRight function, this is repeating when the
    testtube shaking count reaches 3 else the testtube move to the water beaker */
    if ( testtube_shaking_count <= 3 ) {
        var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
            x: getChild("testtube").x+8
        }, 500); /** Testtube right movement */
        if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
            var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
                x: getChild("yellow_white_merged").x+8
            }, 500); /** Yellow color solution right movement */
        } else {
            var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
                x: getChild("testtube_solution").x+8
            }, 500); /** Testtube solution right movement */
        }        
        var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
            x: mask_solution_rect.x+6
        }, 500).call(testtubeShakingLeft);  /** Testtube mask rect right movement */
    } else {
        getChild("clock").visible = false;
        getChild("clock_needle").visible = false;
        getChild("clock_text").text = "";
        testtubeCooling(); /** Testtube cooling function */
    }    
}
/** Testtube cooling function */
function testtubeCooling() {
    var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
        x: getChild("testtube").x+110
    }, 2000); /** Testtube move to the top place of water beaker */
    if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
            x: getChild("yellow_white_merged").x+110
        }, 2000); /** Yellow color solution move to the top place of water beaker */
    } else {
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
            x: getChild("testtube_solution").x+110
        }, 2000); /** Testtube solution move to the top place of water beaker */
    }     
    var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
        x: mask_solution_rect.x+110
    }, 2000).call(testtubeInBeaker); /** Testtube mask rect move to the top place of water beaker */
}
/** Testtube cooling function */
function testtubeInBeaker() {
    var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
        y: getChild("testtube").y+50
    }, 2000); /** Testtube move to the top place of water */
    if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
            y: getChild("yellow_white_merged").y+50
        }, 2000); /** Yellow color solution move to the top place of water */
    } else {
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
            y: getChild("testtube_solution").y+50
        }, 2000); /** Testtube solution move to the top place of water */
    }    
    var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
        y: mask_solution_rect.y+50
    }, 2000).call(testtubeMovingWaterAnimation); /** Testtube mask rect move to the top place of water */
}
/** Testtube touching with the water function */
function testtubeMovingWaterAnimation() {
    water_anim_timer = setInterval(waterAnimation, 400); /** Water animation function running when the testtube touch with water */
    var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
        y: getChild("testtube").y+60
    }, 1500); /** Testtube dip to the water */
    if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
            y: getChild("yellow_white_merged").y+60
        }, 1500); /** Yellow color solution dip to the water */
    } else {
        water_anim_frame = 0;
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
            y: getChild("testtube_solution").y+60
        }, 1500); /** Testtube solution dip to the water */
    }    
    var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
        y: mask_solution_rect.y+60
    }, 1500).call(testtubeFromBeaker); /** Testtube mask rect dip to the water */
}
/** Testtube movement from beaker function */
function testtubeFromBeaker() {
    var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
        y: getChild("testtube").y-100
    }, 1500); /** Testtube move from the water beaker */
    if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
            y: getChild("yellow_white_merged").y-100
        }, 1500); /** Yellow color solution move from the water beaker */
    } else {
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
            y: getChild("testtube_solution").y-100
        }, 1500); /** Testtube solution move from the water beaker */
    }
    var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
        y: mask_solution_rect.y-100
    }, 1500).call(testtubeMovingToStand); /** Testtube mask move from the water beaker */
}
/** Testtube movement to the stand function */
function testtubeMovingToStand() {
    var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
        x: 249
    }, 2000); /** Testtube move to the top place of stand */
    if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
            x: 251
        }, 2000); /** Yellow color solution move to the top place of stand */
    } else {
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
            x: 251
        }, 2000); /** Testtube solution move to the top place of stand */
    }
    var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
        x: 251
    }, 2000).call(testtubeInStand); /** Testtube mask move to the top place of the stand */
}
/** Testtube move to stand function */
function testtubeInStand() {
    var testtube_boiling_tween = createjs.Tween.get(getChild("testtube")).to({
        y: 448
    }, 2000); /** Testtube move to the stand */
    if ( xanthoproteic_flag ) { /** If the test is Xanthoproteic acid test */
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("yellow_white_merged")).to({
            y: 545
        }, 2000); /** Yellow color solution move to the stand */
    } else {
        var testtube_solution_boiling_tween = createjs.Tween.get(getChild("testtube_solution")).to({
            y: 470
        }, 2000); /** Testtube solution move to the stand */
    }
    var testtube_mask_boiling_tween = createjs.Tween.get(mask_solution_rect).to({
        y: mask_solution_rect.y+100
    }, 2000); /** Testtube mask move to the stand */
    boiling_flag = true;
}
/** Dropper mousedown and pressmove events function */
function dropperMousedownPressmove(dropper_solution, dropper_x, dropper_y, soln_x, soln_y) {
    getChild("dropper").visible = true;
    getChild(dropper_solution).visible = true;
    getChild("dropper").x = dropper_x;
    getChild("dropper").y = dropper_y;
    getChild(dropper_solution).x = soln_x;
    getChild(dropper_solution).y = soln_y;
    dropper_solution_mask.x = getChild("dropper").x+3;
    dropper_solution_mask.y = getChild("dropper").y+45;
    getChild("dropper").on("mousedown", function(evt) { /** Dropper mouse down function */
        this.parent.addChild(this);
        this.offset = {
            x: this.x - evt.stageX,
            y: this.y - evt.stageY
        };
    });
    getChild("dropper").on("pressmove", function(evt) { /** Dropper press move function */
        this.y = evt.stageY + this.offset.y;
        this.x = evt.stageX + this.offset.x;
        getChild(dropper_solution).x = getChild("dropper").x+3;
        getChild(dropper_solution).y = getChild("dropper").y+30;
        dropper_solution_mask.x = getChild("dropper").x+3;
        dropper_solution_mask.y = getChild("dropper").y+45;
        milk_beaker_current_x = evt.stageX; /** Assigning the current x and y value to a variable */
        milk_beaker_current_y = evt.stageY;
    });   
}
/** Drag function of dropper */
function dragDropper(scope, rect, dropper_solution, drop, dropper_x, dropper_y, soln_x, soln_y, timer, count) {
    rect.mouseEnabled = false;  
    boiling_rect.mouseEnabled = false;  
    water_bath_rect.mouseEnabled = false;
    /** Function for dropper mousedown and pressmove events */
    dropperMousedownPressmove(dropper_solution, dropper_x, dropper_y, soln_x, soln_y); 
    getChild("dropper").on("pressup", function(event) { /** Dropper press up function */
        /** Hit function of dropper with hit_solution_rect */
        var hit_obj = hit_solution_rect.globalToLocal(milk_beaker_current_x, milk_beaker_current_y);
        if ( hit_solution_rect.hitTest(hit_obj.x, hit_obj.y) ) { /** Dropping solution into milk animation function in a timer */ 
            getChild("dropper").mouseEnabled = false;           
            timer = setInterval(function() { 
                count++;                
                dropSolution(scope, count, dropper_solution, drop); /** Dropping solution animation function */   
                if ( count == 5 ) {
                    var increasing_milk_tween = createjs.Tween.get(mask_solution_rect).to({
                        y: mask_solution_rect.y-15
                    }, 4000); /** Increasing milk tween */
                }
                if ( dropper_solution_mask.y >= 434 ) {
                    clearInterval(timer); 
                    /** If the selected test is Ninhydrin Test */
                    if (ninhydrin_flag) {
                        if ( (rect == "unknown_solution_rect") & (ninhydrin_flag == true) & (unknown_solution_flag == false) ) {
                            unknown_solution_flag = true;
                            color_solution_anim_array = [];
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                        } else if ( (rect == "ninhydrin_rect") & (unknown_solution_flag == true) & (solution_on_water_bath_flag == false) ) {
                            water_bath_rect.mouseEnabled = true;
                            color_solution_anim_array = [];
                            boiling_rect.mouseEnabled = false;
                        }
                    }           
                    /** If the selected test is Xanthoproteic Test */
                    if (xanthoproteic_flag) {
                        if ( (rect == "unknown_solution_rect") & (xanthoproteic_flag == true) & (unknown_solution_flag == false) & (mask_solution_rect.y<581) ) {
                            unknown_solution_flag = true;
                            color_solution_anim_array = [];
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                        } else if ( (rect == "hno3_rect") & (unknown_solution_flag == true) & (boiling_flag == false)  & (mask_solution_rect.y<581) ) {
                            hno3_flag = true;
                            anim_frame = 0; 
                            boiling_rect.mouseEnabled = true;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = ["yellow_solution_anim"];  
                        } else if ( (rect == "naoh_rect") & (xanthoproteic_flag == true) & (boiling_flag == true) ) {
                            naoh_flag = true;
                            anim_frame = 0; 
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = ["orange_solution_anim", "color_less"];
                        }
                    }
                    /** If the selected test is Lead Sulphide Test */
                    if (lead_flag) {
                        if ( (rect == "unknown_solution_rect") & (unknown_solution_flag == false) & (mask_solution_rect.y<581) ) {
                            unknown_solution_flag = true;
                            color_solution_anim_array = [];
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                        } else if ( (rect == "naoh_rect") & (unknown_solution_flag == true) & (mask_solution_rect.y<566) & (boiling_flag == false) ) {
                            naoh_flag = true;
                            boiling_rect.mouseEnabled = true;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = [];  
                        } else if ( (rect == "lead_acetate_rect") & (naoh_flag == true) & (boiling_flag == true) ) {
                            anim_frame = 0; 
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = ["black_solution_anim"];
                        }
                    }
                    /** If the selected test is Pauly's Diazo Test */
                    if (pauly_diazo_flag) {
                        if ( (rect == "sulphanilic_rect") & (sulphanilic_flag == false) ) {
                            sulphanilic_flag = true;
                            color_solution_anim_array = [];
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                        } else if ( (rect == "nano2_rect") & (sulphanilic_flag == true) & (mask_solution_rect.y<581) ) {
                            nano2_flag = true;
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = [];  
                        } else if ( (rect == "amino_acid_rect") & (nano2_flag == true) & (mask_solution_rect.y<566) ) {
                            amino_acid_flag = true;
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = [""];
                        } else if ( (rect == "na2co3_rect") & (amino_acid_flag == true) ) {
                            anim_frame = 0; 
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = ["red_solution_anim", "color_less"];
                        }
                    }
                    /** If the selected test is Millon's Test */
                    if (millon_flag) {
                        if ( (rect == "unknown_solution_rect") & (unknown_solution_flag == false) & (mask_solution_rect.y<581) ) {
                            unknown_solution_flag = true;
                            color_solution_anim_array = [];
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                        } else if ( (rect == "millon_rect") & (unknown_solution_flag == true) & (mask_solution_rect.y<566) & (boiling_flag == false) ) {
                            millon_reagent_flag = true;
                            boiling_rect.mouseEnabled = true;
                            water_bath_rect.mouseEnabled = false;
                            hno3_rect.mouseEnabled = true;
                            color_solution_anim_array = [];  
                        } else if ( (rect == "hno3_rect") & (millon_reagent_flag == true) & (boiling_flag == true) & (mask_solution_rect.y<551) ) {
                            anim_frame = 0; 
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = ["millon_solution_anim"];
                        }
                    }
                    /** If the selected test is Hopkins Cole Test */
                    if (hopkins_flag) {
                        if ( (rect == "unknown_solution_rect") & (unknown_solution_flag == false) & (mask_solution_rect.y<581) ) {
                            unknown_solution_flag = true;
                            color_solution_anim_array = [];
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                        } else if ( (rect == "acetic_rect") & (unknown_solution_flag == true) & (mask_solution_rect.y<566) ) {
                            acetic_flag = true;
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = [];  
                        } else if ( (rect == "h2so4_rect") & (acetic_flag == true) & (mask_solution_rect.y<551) ) {
                            anim_frame = 0; 
                            boiling_rect.mouseEnabled = false;
                            water_bath_rect.mouseEnabled = false;
                            color_solution_anim_array = ["purple_ring_anim"];
                        }
                    }
                    qualitative_analysis_stage.removeChild(rect);
                    getChild("dropper").visible = false;                    
                    getChild(dropper_solution).visible = false;
                    getChild("drop_white").visible = false;    
                    /** Random element from the array color_solution_anim_array in a variable */             
                    random_color = Math.floor(Math.random() * color_solution_anim_array.length);
                    /** Solution animation function in a timer */
                    solution_anim_timer = setInterval(function() { 
                        solution_anim_count++;
                        colorSolutionAnimation(scope, solution_anim_count, color_solution_anim_array[random_color]); 
                    }, 500);                    
                } else {
                    getChild("dropper").visible = true;
                }
            }, 100);
        } else {
            getChild("dropper").x = dropper_x;
            getChild("dropper").y = dropper_y;
            getChild(dropper_solution).x = getChild("dropper").x+3;
            getChild(dropper_solution).y = getChild("dropper").y+30;
            dropper_solution_mask.x = getChild("dropper").x+3;
            dropper_solution_mask.y = getChild("dropper").y+45;
            clearInterval(timer);
        }
    });
}
/** Dropping solution to the testube milk */
function dropSolution(scope, count, dropper_solution, drop) {
    /** Set position and visibility of testtube, corresponding solution and the corresponding drop */
    getChild("dropper").x = 255;
    getChild("dropper").y = 345;
    getChild(dropper_solution).visible = true;
    getChild(dropper_solution).x = getChild("dropper").x+3;
    getChild(dropper_solution).y = getChild("dropper").y+30;
    dropper_solution_mask.x = getChild("dropper").x+3;
    dropper_solution_mask.y = getChild("dropper").y+45;
    getChild(drop).visible = true;
    dropper_solution_mask.y += count;
    if ( getChild(drop).y == 427 ) {
        var yellow_drop_tween = createjs.Tween.get(getChild(drop)).to({
            y: 550
        }, 500); /** Solution drop falling tween */
    } else if ( getChild(drop).y == 550 ) {
        getChild(drop).y = 427;
    } 
}
/** Solution dropping animation function */
function colorSolutionAnimation(scope, solution_anim_count, random_color) {
    if ( random_color == "purple_ring_anim" ) { /** Setting of animation width if the solution animation is purple ring */ 
        anim_width = 25;
    } else {
        anim_width = 26.991;  
    }    
    anim_frame++; /** Frame increment */
    if ( anim_frame < 10 ) { 
        if ( random_color != "color_less" ) {
            anim_object = getChild(random_color); /** Animation frames take as an object */
            getChild(random_color).visible = true;
            getChild(random_color).alpha = 1;
            anim_object.x = anim_object.x - anim_width; /** Changing of animation object x position */
        }
    } else if ( anim_frame == 10 ) {           
        clearInterval(solution_anim_timer);
        result(scope, random_color);
        /** If the animation color is yellow, a yellow white merged image displayed after the animation */
        if ( random_color == "yellow_solution_anim") {
            getChild("yellow_solution_anim").alpha = 0;
            getChild("yellow_white_merged").visible = true;
            boiling_rect.mouseEnabled = true;
        }
    }        
    scope.$apply();
}
/** Water animation function */
function waterAnimation() {
    water_anim_frame++; /** Frame increment */
    if ( water_anim_frame < 10 ) {
        getChild("water_anim").x = getChild("water_anim").x - water_anim_width; /** Changing of animation object x position */
    } else {
        clearInterval(water_anim_timer);
        getChild("water_anim").x = 120;
    }
}
/** Function for display the result after completing each test */
function result(scope, random_color) {
    if ( random_color == "orange_solution_anim" ) { /** If the random color is orange */
        scope.result_txt = false;
        scope.result_text = presence_of_aromatic; 
        scope.pauly_disable = false;        
    } else if ( random_color == "color_less" & xanthoproteic_flag == true ) { /** If the test is xanthoproteic test and random color is color less */
        scope.result_txt = false;
        scope.result_text = absence_of_aromatic;
        scope.lead_disable = false;
    } else if ( random_color == "black_solution_anim" ) { /** If the random color is black */
        scope.result_txt = false;
        scope.result_text = presence_of_cysteine; 
    } else if ( random_color == "red_solution_anim" & pauly_diazo_flag == true ) { /** If the random color is red and test is pauly's diazo test */
        scope.result_txt = false;
        scope.result_text = presence_of_tyrosine; 
        scope.millon_disable = false;
    } else if ( random_color == "color_less" & pauly_diazo_flag == true ) { /** If the test is pauly's diazo test and random color is color less */
        scope.result_txt = false;
        scope.result_text = presence_of_tryptophan;
        scope.hopkins_disable = false;
    } else if ( random_color == "millon_solution_anim" & millon_flag == true ) { /** If the random color is red and test is millon's test */
        scope.result_txt = false;
        scope.result_text = presence_of_tyrosine_millon; 
    } else if ( random_color == "purple_ring_anim" & hopkins_flag == true ) { /** If the animation is purple ring and test is hopkin's cole test */
        getChild("testtube_solution").visible = true;
        scope.result_txt = false;
        scope.result_text = presence_of_violet_tryptophan; 
    }
}
/** Reset the experiment in the reset button event */
function resetExperiment() {
    window.location.reload();
}