



angular.module('myapp', ['dndLists'])


angular.module('myapp').controller('SimpleDemoController', ['$scope', function($scope) {

  $scope.lists = [
        {
            label: "Men",
            allowedTypes: ['man'],
            max: 4,
            people: [
                {name: "Bob", type: "man"},
                {name: "Charlie", type: "man"},
                {name: "Dave", type: "man"}
            ]
        },
        {
            label: "Women",
            allowedTypes: ['woman'],
            max: 4,
            people: [
                {name: "Alice", type: "woman"},
                {name: "Eve", type: "woman"},
                {name: "Peggy", type: "woman"}
            ]
        },
        {
            label: "People",
            allowedTypes: ['man', 'woman'],
            max: 1,
            people: [
               
            ]
        }
    ];

    // Model to JSON for demo purpose
    $scope.$watch('lists', function(lists) {
        $scope.modelAsJson = angular.toJson(lists, true);
    }, true);

}]);

