(function(angular, undefined) {
  angular.module("meApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"company",
		"admin",
		"abc"
	]
})

;
})(angular);