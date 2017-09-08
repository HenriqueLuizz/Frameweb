(function(){
  angular.module('primeiraApp').component('field',{
    bindings:{
      id:'@',
      label:'@',
      grid:'@',
      placeholder:'@',
      type:'@',
      model:'=',
      readonly:'<',
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
      <div class="form-group">
        <label for="{{$ctrl.id}}">{{$ctrl.label}}</label>
        <input id="{{$ctrl.id}}" class="form-control" placeholder="{{$ctrl.placeholder}}"
          type="{{$ctrl.type}}" ng-model="$ctrl.model" ng-readonly="$ctrl.readonly" />
      </div>
    </div>
    `
  })
})()
