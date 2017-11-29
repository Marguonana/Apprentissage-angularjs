mod.controller("mainController", function($scope, musiciansFactory){
    $scope.musicians = musiciansFactory.getMusicians();

    $scope.deleteMusician = function(e){
        musiciansFactory.deleteMusician(e);
    }

    $scope.addMusician = function(musician){

        musiciansFactory.addMusician(musician);

        $scope.newMusician.fullName = '';
        $scope.newMusician.instrument = '';
    }

});

