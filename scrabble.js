



angular.module('myapp', ['dndLists'])


angular.module('myapp').controller('SimpleDemoController', ['$scope', function($scope) {

  $scope.tilebank = [
                {name: "", type: "man", points: 0},
                {name: "", type: "man", points: 0},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "E", type: "man", points: 1},
                {name: "A", type: "man", points: 1},
                {name: "A", type: "man", points: 1},
                {name: "A", type: "man", points: 1},
                {name: "A", type: "man", points: 1},
                {name: "A", type: "man", points: 1},
                {name: "A", type: "man", points: 1},
                {name: "A", type: "man", points: 1},
                {name: "A", type: "man", points: 1},
                {name: "A", type: "man", points: 1},
                {name: "I", type: "man", points: 1},
                {name: "I", type: "man", points: 1},
                {name: "I", type: "man", points: 1},
                {name: "I", type: "man", points: 1},
                {name: "I", type: "man", points: 1},
                {name: "I", type: "man", points: 1},
                {name: "I", type: "man", points: 1},
                {name: "I", type: "man", points: 1},
                {name: "I", type: "man", points: 1},
                {name: "O", type: "man", points: 1},
                {name: "O", type: "man", points: 1},
                {name: "O", type: "man", points: 1},
                {name: "O", type: "man", points: 1},
                {name: "O", type: "man", points: 1},
                {name: "O", type: "man", points: 1},
                {name: "O", type: "man", points: 1},
                {name: "O", type: "man", points: 1},
                {name: "N", type: "man", points: 1},
                {name: "N", type: "man", points: 1},
                {name: "N", type: "man", points: 1},
                {name: "N", type: "man", points: 1},
                {name: "N", type: "man", points: 1},
                {name: "N", type: "man", points: 1},
                {name: "R", type: "man", points: 1},
                {name: "R", type: "man", points: 1},
                {name: "R", type: "man", points: 1},
                {name: "R", type: "man", points: 1},
                {name: "R", type: "man", points: 1},
                {name: "R", type: "man", points: 1},
                {name: "T", type: "man", points: 1},
                {name: "T", type: "man", points: 1},
                {name: "T", type: "man", points: 1},
                {name: "T", type: "man", points: 1},
                {name: "T", type: "man", points: 1},
                {name: "T", type: "man", points: 1},
                {name: "L", type: "man", points: 1},
                {name: "L", type: "man", points: 1},
                {name: "L", type: "man", points: 1},
                {name: "L", type: "man", points: 1},
                {name: "S", type: "man", points: 1},
                {name: "S", type: "man", points: 1},
                {name: "S", type: "man", points: 1},
                {name: "S", type: "man", points: 1},
                {name: "U", type: "man", points: 1},
                {name: "U", type: "man", points: 1},
                {name: "U", type: "man", points: 1},
                {name: "U", type: "man", points: 1},
                {name: "D", type: "man", points: 2},
                {name: "D", type: "man", points: 2},
                {name: "D", type: "man", points: 2},
                {name: "D", type: "man", points: 2},
                {name: "G", type: "man", points: 2},
                {name: "G", type: "man", points: 2},
                {name: "G", type: "man", points: 2},
                {name: "B", type: "man", points: 3},
                {name: "B", type: "man", points: 3},
                {name: "C", type: "man", points: 3},
                {name: "C", type: "man", points: 3},
                {name: "M", type: "man", points: 3},
                {name: "M", type: "man", points: 3},
                {name: "P", type: "man", points: 3},
                {name: "P", type: "man", points: 3},
                {name: "F", type: "man", points: 4},
                {name: "F", type: "man", points: 4},
                {name: "H", type: "man", points: 4},
                {name: "H", type: "man", points: 4},
                {name: "V", type: "man", points: 4},
                {name: "V", type: "man", points: 4},
                {name: "W", type: "man", points: 4},
                {name: "W", type: "man", points: 4},
                {name: "Y", type: "man", points: 4},
                {name: "Y", type: "man", points: 4},
                {name: "K", type: "man", points: 5},
                {name: "J", type: "man", points: 8},
                {name: "X", type: "man", points: 8},
                {name: "Q", type: "man", points: 10},
                {name: "Z", type: "man", points: 10}

        ]


  $scope.lists = [
        // {
        //     label: "Men",
        //     allowedTypes: ['man'],
        //     max: 4,
        //     people: [
        //         {name: "Bob", type: "man"},
        //         {name: "Charlie", type: "man"},
        //         {name: "Dave", type: "man"}
        //     ]
        // },
        // {
        //     label: "Women",
        //     allowedTypes: ['woman'],
        //     max: 4,
        //     people: [
        //         {name: "B", type: "woman"},
        //         {name: "Eve", type: "woman"},
        //         {name: "Peggy", type: "woman"}
        //     ]
        // },
        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "B", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        },
        {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
        {
            label: "some",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        }
    ];


 $scope.lists1 = [
        // {
        //     label: "Men",
        //     allowedTypes: ['man'],
        //     max: 4,
        //     people: [
        //         {name: "Bob", type: "man"},
        //         {name: "Charlie", type: "man"},
        //         {name: "Dave", type: "man"}
        //     ]
        // },
        // {
        //     label: "Women",
        //     allowedTypes: ['woman'],
        //     max: 4,
        //     people: [
        //         {name: "B", type: "woman"},
        //         {name: "Eve", type: "woman"},
        //         {name: "Peggy", type: "woman"}
        //     ]
        // },
        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "B", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        },
        {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
        {
            label: "some",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        }
    ];  


     $scope.lists2 = [
        // {
        //     label: "Men",
        //     allowedTypes: ['man'],
        //     max: 4,
        //     people: [
        //         {name: "Bob", type: "man"},
        //         {name: "Charlie", type: "man"},
        //         {name: "Dave", type: "man"}
        //     ]
        // },
        // {
        //     label: "Women",
        //     allowedTypes: ['woman'],
        //     max: 4,
        //     people: [
        //         {name: "B", type: "woman"},
        //         {name: "Eve", type: "woman"},
        //         {name: "Peggy", type: "woman"}
        //     ]
        // },
        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "B", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        },
        {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
        {
            label: "some",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        }
    ]; 

     $scope.lists3 = [

        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "B", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        },
        {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
        {
            label: "some",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        }
    ];  

        $scope.lists4 = [

        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "B", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        },
        {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
        {
            label: "some",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        }
    ]; 
            $scope.lists5 = [

        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "B", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        },
        {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
        {
            label: "some",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "B", type: "woman"},
            ]
        }
    ];  


$scope.frombanks = [

        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
            ]
        },
        {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        },
         {
            label: "diff",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
               
            ]
        }
    ]; 

    function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
            while (0 !== currentIndex) {

    // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

    // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
            }

        return array;
    }

    shuffle($scope.tilebank);

    var temp ={};

    for (var i=0; i<$scope.frombanks.length; i++){
        temp = $scope.tilebank.pop();
        $scope.frombanks[i].people.push(temp);
    }

    $scope.replenish = function () {
        for (var j=0; j<$scope.frombanks.length; j++){
            if ($scope.frombanks[j].people == false && $scope.tilebank.length != 0) {
               temp = $scope.tilebank.pop();
               $scope.frombanks[j].people.push(temp); }
        }
    }



    // Model to JSON for demo purpose
    $scope.$watch('lists', function(lists) {
        $scope.modelAsJson = angular.toJson(lists, true);
    }, true);

}]);

