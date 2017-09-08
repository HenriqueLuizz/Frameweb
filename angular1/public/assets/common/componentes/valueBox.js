(function(){
  angular.module('primeiraApp').component('valueBox', {
    bindings:{
      grid:'@',
      colorClass:'@',
      value:'@',
      text:'@',
      iconClass:'@',
    },
    controller:[
      'gridSystem',
      function(gridSystem) {
        //O $onInit é utilizado para garantir que execute a function somente depois que os bindings estiverem inicializados
        this.$onInit = () => this.gridClasses = gridSystem.toCssClasses(this.grid)
      }
    ],
    template:`
    <div class="{{$ctrl.gridClasses}}">
      <div class="small-box {{$ctrl.colorClass}}">
        <div class="inner">
          <h3>{{$ctrl.value}}</h3>
          <p>{{$ctrl.text}}</p>
        </div>
        <div class="icon">
          <i class="fa {{$ctrl.iconClass}}"></i>
        </div>
      </div>
    </div>
    `
  })  
})()
