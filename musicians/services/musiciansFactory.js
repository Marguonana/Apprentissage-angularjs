mod.factory("musiciansFactory", function(){

    var factory = {}; // on creer un objet factory qu'on retournera par la suite

    factory.musicians = [
        {id: 0,fullName: 'Jimi N',instrument: 'guitare'},  
        {id: 1,fullName: 'Vertou',instrument: 'bass'},  
        {id: 2,fullName: 'Da Kel',instrument: 'trompette'},  
        {id: 3,fullName: 'Bou',instrument: 'flute'}
    ];

    factory.getMusicians = function(){
        return factory.musicians;
    }

    factory.addMusician = function(musician){
        this.prepareMusician(musician);
        this.musicians.push({id:musician.id, fullName: musician.fullName, instrument: musician.instrument});

    }

    factory.prepareMusician= function(musician){
        musician.id = factory.musicians.length;
        return musician;
    }

    factory.deleteMusician = function(e){
        console.log("index de "+ e.fullName+ " est: " + this.musicians.indexOf(e));
        this.musicians.splice(this.musicians.indexOf(e),1);
       // console.log('appel de fonction');
    }

    return factory;
   // us garantie plancher 
});