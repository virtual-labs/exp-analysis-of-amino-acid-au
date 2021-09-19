(function(){
    angular
    .module('users',['FBAngular','ui.bootstrap','dialogs.main','pascalprecht.translate'])
    .controller('UserController', [
        '$mdSidenav', '$mdBottomSheet', '$log', '$q','$scope','$element','Fullscreen','$mdToast','$animate','$translate','dialogs',
        UserController
    ])
    .config(['dialogsProvider','$translateProvider',function(dialogsProvider,$translateProvider){
        dialogsProvider.useBackdrop('static');
        dialogsProvider.useEscClose(false);
        dialogsProvider.useCopy(false);
        dialogsProvider.setSize('sm');
        $translateProvider.translations(language,{DIALOGS_ERROR:(_("Error")),DIALOGS_ERROR_MSG:(_("Wrong order of steps. Try again!")),DIALOGS_CLOSE:(_("Okay"))}),$translateProvider.preferredLanguage(language);
    }]);

    /**
    * Main Controller for the Angular Material Starter App
    * @param $scope
    * @param $mdSidenav
    * @param avatarsService
    * @constructor
    */
    function UserController( $mdSidenav, $mdBottomSheet, $log, $q, $scope, $element, Fullscreen, $mdToast, $animate, $translate, dialogs) {
        $scope.toastPosition = {
            bottom: true,
            top: false,
            left: true,
            right: false
        };
        $scope.toggleSidenav = function(ev) {
            $mdSidenav('right').toggle();
        };
        $scope.getToastPosition = function() {
            return Object.keys($scope.toastPosition)
            .filter(function(pos) { return $scope.toastPosition[pos]; })
            .join(' ');
        };
        $scope.showActionToast = function() {     
            var toast = $mdToast.simple()
            .content(help_array[0])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
        
            var toast1 = $mdToast.simple()
            .content(help_array[1])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
          
            var toast2 = $mdToast.simple()
            .content(help_array[2])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());
            
            var toast3 = $mdToast.simple()
            .content(help_array[3])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast4 = $mdToast.simple()
            .content(help_array[4])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast5 = $mdToast.simple()
            .content(help_array[5])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast6 = $mdToast.simple()
            .content(help_array[6])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast7 = $mdToast.simple()
            .content(help_array[7])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast8 = $mdToast.simple()
            .content(help_array[8])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast9 = $mdToast.simple()
            .content(help_array[9])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast10 = $mdToast.simple()
            .content(help_array[10])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast11 = $mdToast.simple()
            .content(help_array[11])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast12 = $mdToast.simple()
            .content(help_array[12])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast13 = $mdToast.simple()
            .content(help_array[13])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast14 = $mdToast.simple()
            .content(help_array[14])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast15 = $mdToast.simple()
            .content(help_array[15])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast16 = $mdToast.simple()
            .content(help_array[16])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast17 = $mdToast.simple()
            .content(help_array[17])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast18 = $mdToast.simple()
            .content(help_array[18])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast19 = $mdToast.simple()
            .content(help_array[19])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast20 = $mdToast.simple()
            .content(help_array[20])
            .action(help_array[22])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            var toast21 = $mdToast.simple()
            .content(help_array[21])
            .action(help_array[23])
            .hideDelay(15000)
            .highlightAction(false)
            .position($scope.getToastPosition());

            $mdToast.show(toast).then(function() {
                $mdToast.show(toast1).then(function() {
                    $mdToast.show(toast2).then(function() {
                        $mdToast.show(toast3).then(function() {
                            $mdToast.show(toast4).then(function() {
                                $mdToast.show(toast5).then(function() {
                                    $mdToast.show(toast6).then(function() {
                                        $mdToast.show(toast7).then(function() {
                                            $mdToast.show(toast8).then(function() {
                                                $mdToast.show(toast9).then(function() {
                                                    $mdToast.show(toast10).then(function() {
                                                        $mdToast.show(toast11).then(function() {
                                                            $mdToast.show(toast12).then(function() {
                                                                $mdToast.show(toast13).then(function() {
                                                                    $mdToast.show(toast14).then(function() {
                                                                        $mdToast.show(toast15).then(function() {
                                                                            $mdToast.show(toast16).then(function() {
                                                                                $mdToast.show(toast17).then(function() {
                                                                                    $mdToast.show(toast18).then(function() {
                                                                                        $mdToast.show(toast19).then(function() {
                                                                                            $mdToast.show(toast20).then(function() {
                                                                                                $mdToast.show(toast21).then(function() {
                                                                                                });
                                                                                            });
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });     
        };
  
        var self = this;
        self.selected     = null;
        self.users        = [ ];
        self.toggleList   = toggleUsersList;

        $scope.showVariables = false; /** I hides the 'Variables' tab */
        $scope.isActive = true;
        $scope.isActive1 = true; 

        /** All buttons disable except ninhydrin button initially */
        $scope.correct_ans_txt = false; 
        $scope.wrong_ans_txt = false;
        $scope.xanthoproteic_disable = true;
        $scope.pauly_disable = true;
        $scope.millon_disable = true;
        $scope.hopkins_disable = true;
        $scope.lead_disable = true;
        $scope.back_disable = true;
        $scope.result_txt = true;

        $scope.goFullscreen = function () {
            /** Full screen */
            if (Fullscreen.isEnabled())
                Fullscreen.cancel();
            else
                Fullscreen.all();
            /** Set Full screen to a specific element (bad practice) */
            /** Full screen.enable( document.getElementById('img') ) */
        };
        
        $scope.toggle = function () {
            $scope.showValue=!$scope.showValue;
            $scope.isActive = !$scope.isActive;
        };  
        $scope.toggle1 = function () {
            $scope.showVariables=!$scope.showVariables;
            $scope.isActive1 = !$scope.isActive1;
        };

        /** Function for the button Ninhydrin Test */
        $scope.ninhydrinTest = function() {
            ninhydrinTestEvent($scope, dialogs); /** Function defined in experiment.js file */    
        }

        /** Function for the button Xanthoproteic Test */
        $scope.xanthoproteicTest = function() {
            xanthoproteicEvent($scope, dialogs); /** Function defined in experiment.js file */    
        }

        /** Function for the button Pauly's Diazo Test */
        $scope.paulyDiazoTest = function() {
            paulysDiazoEvent($scope, dialogs); /** Function defined in experiment.js file */    
        }

        /** Function for the button Millon's Test */
        $scope.millonTest = function() {
            millonTestEvent($scope, dialogs); /** Function defined in experiment.js file */    
        }

        /** Function for the button Hopkin's Cole Test */
        $scope.hopkinsTest = function() {
            hopkinColeTestEvent($scope, dialogs); /** Function defined in experiment.js file */    
        }

         /** Function for the button Lead Sulphide Test */
        $scope.leadTest = function() {
            leadTestEvent($scope, dialogs); /** Function defined in experiment.js file */    
        }
      
        /** Function for the button Reset */
        $scope.reset = function() {
            resetExperiment(); /** Function defined in experiment.js file */
        }
        
        /**
        * First hide the bottom sheet IF visible, then
        * hide or Show the 'left' sideNav area
        */
        function toggleUsersList() {
            $mdSidenav('right').toggle();
        }
    }
})();