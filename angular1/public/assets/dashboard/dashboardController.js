(function(){
  angular.module('primeiraApp').controller('DashboardCtrl',[
  '$http',
  DashboardController
])

function DashboardController($http){
  const vm = this
  vm.getSummary = function(){
    const url = 'http://localhost:3004/api/billingSummary'
    $http.get(url).then(function(response) {
      //pegar o credt e debt do backend
      const {credit = 0,debt = 0} = response.data
      vm.credit = credit
      vm.debt = debt
      vm.total = credit - debt
    })
  }
  vm.getSummary()
}
})()
