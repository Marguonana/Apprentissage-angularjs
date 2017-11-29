mod.directive('musician', function(){
    return {
        restrict: 'E', // sert à dire qu'il s'agit d'un element. Voir angularjs doc pour les autres
        templateUrl: 'templates/musician.html',
        replace: true,
        scope: {
            artist: '=greatMusician', // on créer l'attribut great-Musician. '=' sert a qu'on fait communiquer avec l'element parent
            // Dans la template on sera obliger d'utiliser l'objet avec le nom "artist"
            deleteMusician : '&'
                }
    }
});