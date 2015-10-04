



angular.module('myapp', ['dndLists'])


angular.module('myapp').controller('SimpleDemoController', ['$scope', function($scope) {

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
        //         {name: "Alice", type: "woman"},
        //         {name: "Eve", type: "woman"},
        //         {name: "Peggy", type: "woman"}
        //     ]
        // },
        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "Alice", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "Alice", type: "woman"},
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
               {name: "Alice", type: "woman"},
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
        //         {name: "Alice", type: "woman"},
        //         {name: "Eve", type: "woman"},
        //         {name: "Peggy", type: "woman"}
        //     ]
        // },
        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "Alice", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "Alice", type: "woman"},
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
               {name: "Alice", type: "woman"},
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
        //         {name: "Alice", type: "woman"},
        //         {name: "Eve", type: "woman"},
        //         {name: "Peggy", type: "woman"}
        //     ]
        // },
        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "Alice", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "Alice", type: "woman"},
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
               {name: "Alice", type: "woman"},
            ]
        }
    ]; 

     $scope.lists3 = [

        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "Alice", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "Alice", type: "woman"},
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
               {name: "Alice", type: "woman"},
            ]
        }
    ];  

        $scope.lists4 = [

        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "Alice", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "Alice", type: "woman"},
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
               {name: "Alice", type: "woman"},
            ]
        }
    ]; 
            $scope.lists5 = [

        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
                {name: "Alice", type: "man"},
               
            ]
        },
        {
            label: "ScrabbleElem",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               {name: "Alice", type: "woman"},
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
               {name: "Alice", type: "woman"},
            ]
        }
    ];  

    // Model to JSON for demo purpose
    $scope.$watch('lists', function(lists) {
        $scope.modelAsJson = angular.toJson(lists, true);
    }, true);

}]);

