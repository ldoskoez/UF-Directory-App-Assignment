angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
    var newListing = {
    "code": $scope.code,
    "name": $scope.name
    };
      $scope.listings.push(newListing);
    };
      
    $scope.deleteListing = function(listing) {
      var deleteListingObj = $scope.listings.indexOf(listing);
      if(deleteListingObj != -1)
        $scope.listings.splice(deleteListingObj), 1);
    };
    
    $scope.showDetails = function(index) {
    $scope.detailedInfo = $scope.filteredListings[index]
    };
  }
]);
