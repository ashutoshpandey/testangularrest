// checks if user is not logged in, redirect to login page
angular.module('main').factory('authInterceptorService', ['$q', '$window', function($q, $window) {
    return {
        responseError: function(rejection) {
            if (rejection.status === 403) {
                $window.location.href = '/login';
            }

            return $q.reject(rejection);
        }
    };
}]);

// define all angularjs paths here
angular.module('main').config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
        $httpProvider.interceptors.push('authInterceptorService');

        $routeProvider.
        when('/accomodation', {
            templateUrl: 'front/templates/accomodation/list.html',
            controller: 'AccomodationCtrl'
        }).
        when('/accomodation/create', {
            templateUrl: 'front/templates/accomodation/create.html',
            controller: 'AccomodationCtrl'
        }).
        when('/accomodation/view/:id', {
            templateUrl: 'front/templates/accomodation/view.html',
            controller: 'AccomodationCtrl'
        }).
        when('/accomodation/edit/:id', {
            templateUrl: 'front/templates/accomodation/edit.html',
            controller: 'AccomodationCtrl'
        }).
        when('/accomodation-type', {
            templateUrl: 'front/templates/accomodation-type/list.html',
            controller: 'AccomodationTypeCtrl'
        }).
        when('/accomodation-type/create', {
            templateUrl: 'front/templates/accomodation-type/create.html',
            controller: 'AccomodationTypeCtrl'
        }).
        when('/accomodation-type/view/:id', {
            templateUrl: 'front/templates/accomodation-type/view.html',
            controller: 'AccomodationTypeCtrl'
        }).
        when('/accomodation-type/edit/:id', {
            templateUrl: 'front/templates/accomodation-type/edit.html',
            controller: 'AccomodationTypeCtrl'
        }).
        when('/country', {
            templateUrl: 'front/templates/country/list.html',
            controller: 'CountryCtrl'
        }).
        when('/country/create', {
            templateUrl: 'front/templates/country/create.html',
            controller: 'CountryCtrl'
        }).
        when('/country/view/:id', {
            templateUrl: 'front/templates/country/view.html',
            controller: 'CountryCtrl'
        }).
        when('/country/edit/:id', {
            templateUrl: 'front/templates/country/edit.html',
            controller: 'CountryCtrl'
        }).
        when('/doctor', {
            templateUrl: 'front/templates/doctor/list.html',
            controller: 'DoctorCtrl'
        }).
        when('/doctor/create', {
            templateUrl: 'front/templates/doctor/create.html',
            controller: 'DoctorCtrl'
        }).
        when('/doctor/view/:id', {
            templateUrl: 'front/templates/doctor/view.html',
            controller: 'DoctorCtrl'
        }).
        when('/doctor/edit/:id', {
            templateUrl: 'front/templates/doctor/edit.html',
            controller: 'DoctorCtrl'
        }).
        when('/hra', {
            templateUrl: 'front/templates/hra/list.html',
            controller: 'HRACtrl'
        }).
        when('/hra/create', {
            templateUrl: 'front/templates/hra/create.html',
            controller: 'HRACtrl'
        }).
        when('/hra/view/:id', {
            templateUrl: 'front/templates/hra/view.html',
            controller: 'HRACtrl'
        }).
        when('/hra/edit/:id', {
            templateUrl: 'front/templates/hra/edit.html',
            controller: 'HRACtrl'
        }).
        when('/hra-question', {
            templateUrl: 'front/templates/hra-question/list.html',
            controller: 'HRAQuestionCtrl'
        }).
        when('/hra-question/create', {
            templateUrl: 'front/templates/hra-question/create.html',
            controller: 'HRAQuestionCtrl'
        }).
        when('/hra-question/view/:id', {
            templateUrl: 'front/templates/hra-question/view.html',
            controller: 'HRAQuestionCtrl'
        }).
        when('/hra-question/edit/:id', {
            templateUrl: 'front/templates/hra-question/edit.html',
            controller: 'HRAQuestionCtrl'
        }).
        when('/medical-quotation/create/:id', {
            templateUrl: 'front/templates/medical-quotation/create.html',
            controller: 'MedicalQuotationCtrl'
        }).
        when('/news', {
            templateUrl: 'front/templates/news/list.html',
            controller: 'NewsCtrl'
        }).
        when('/news/create', {
            templateUrl: 'front/templates/news/create.html',
            controller: 'NewsCtrl'
        }).
        when('/news/view/:id', {
            templateUrl: 'front/templates/news/view.html',
            controller: 'NewsCtrl'
        }).
        when('/news/edit/:id', {
            templateUrl: 'front/templates/news/edit.html',
            controller: 'NewsCtrl'
        }).
        when('/news-category', {
            templateUrl: 'front/templates/news-category/list.html',
            controller: 'NewsCategoryCtrl'
        }).
        when('/news-category/create', {
            templateUrl: 'front/templates/news-category/create.html',
            controller: 'NewsCategoryCtrl'
        }).
        when('/news-category/view/:id', {
            templateUrl: 'front/templates/news-category/view.html',
            controller: 'NewsCategoryCtrl'
        }).
        when('/news-category/edit/:id', {
            templateUrl: 'front/templates/news-category/edit.html',
            controller: 'NewsCategoryCtrl'
        }).
        when('/organization', {
            templateUrl: 'front/templates/organization/list.html',
            controller: 'OrganizationCtrl'
        }).
        when('/organization/create', {
            templateUrl: 'front/templates/organization/create.html',
            controller: 'OrganizationCtrl'
        }).
        when('/organization/view/:id', {
            templateUrl: 'front/templates/organization/view.html',
            controller: 'OrganizationCtrl'
        }).
        when('/organization/edit/:id', {
            templateUrl: 'front/templates/organization/edit.html',
            controller: 'OrganizationCtrl'
        }).
        when('/organization-type', {
            templateUrl: 'front/templates/organization-type/list.html',
            controller: 'OrganizationTypeCtrl'
        }).
        when('/organization-type/create', {
            templateUrl: 'front/templates/organization-type/create.html',
            controller: 'OrganizationTypeCtrl'
        }).
        when('/organization-type/view/:id', {
            templateUrl: 'front/templates/organization-type/view.html',
            controller: 'OrganizationTypeCtrl'
        }).
        when('/organization-type/edit/:id', {
            templateUrl: 'front/templates/organization-type/edit.html',
            controller: 'OrganizationTypeCtrl'
        }).
        when('/patient', {
            templateUrl: 'front/templates/patient/list.html',
            controller: 'PatientCtrl'
        }).
        when('/patient/create', {
            templateUrl: 'front/templates/patient/create.html',
            controller: 'PatientCtrl'
        }).
        when('/patient/view/:id', {
            templateUrl: 'front/templates/patient/view.html',
            controller: 'PatientCtrl'
        }).
        when('/patient/edit/:id', {
            templateUrl: 'front/templates/patient/edit.html',
            controller: 'PatientCtrl'
        }).
        when('/patient-hra-question', {
            templateUrl: 'front/templates/patient-hra-question/list.html',
            controller: 'PatientHRAQuestionCtrl'
        }).
        when('/patient-hra-question/create', {
            templateUrl: 'front/templates/patient-hra-question/create.html',
            controller: 'PatientHRAQuestionCtrl'
        }).
        when('/patient-hra-question/view/:id', {
            templateUrl: 'front/templates/patient-hra-question/view.html',
            controller: 'PatientHRAQuestionCtrl'
        }).
        when('/patient-hra-question/edit/:id', {
            templateUrl: 'front/templates/patient-hra-question/edit.html',
            controller: 'PatientHRAQuestionCtrl'
        }).
        when('/referral', {
            templateUrl: 'front/templates/referral/list.html',
            controller: 'ReferralCtrl'
        }).
        when('/referral/create/:id', {
            templateUrl: 'front/templates/referral/create.html',
            controller: 'ReferralCtrl'
        }).
        when('/referral/view/:id', {
            templateUrl: 'front/templates/referral/view.html',
            controller: 'ReferralCtrl'
        }).
        when('/role', {
            templateUrl: 'front/templates/role/list.html',
            controller: 'RoleCtrl'
        }).
        when('/role/create', {
            templateUrl: 'front/templates/role/create.html',
            controller: 'RoleCtrl'
        }).
        when('/role/view/:id', {
            templateUrl: 'front/templates/role/view.html',
            controller: 'RoleCtrl'
        }).
        when('/role/edit/:id', {
            templateUrl: 'front/templates/role/edit.html',
            controller: 'RoleCtrl'
        }).
        when('/speciality', {
            templateUrl: 'front/templates/speciality/list.html',
            controller: 'SpecialityCtrl'
        }).
        when('/speciality/create', {
            templateUrl: 'front/templates/speciality/create.html',
            controller: 'SpecialityCtrl'
        }).
        when('/speciality/view/:id', {
            templateUrl: 'front/templates/speciality/view.html',
            controller: 'SpecialityCtrl'
        }).
        when('/speciality/edit/:id', {
            templateUrl: 'front/templates/speciality/edit.html',
            controller: 'SpecialityCtrl'
        }).
        when('/ticket', {
            templateUrl: 'front/templates/ticket/list.html',
            controller: 'TicketCtrl'
        }).
        when('/ticket/create', {
            templateUrl: 'front/templates/ticket/create.html',
            controller: 'TicketCtrl'
        }).
        when('/ticket/view/:id', {
            templateUrl: 'front/templates/ticket/view.html',
            controller: 'TicketCtrl'
        }).
        when('/ticket/edit/:id', {
            templateUrl: 'front/templates/ticket/edit.html',
            controller: 'TicketCtrl'
        }).
        when('/ticket-type', {
            templateUrl: 'front/templates/ticket-type/list.html',
            controller: 'TicketTypeCtrl'
        }).
        when('/ticket-type/create', {
            templateUrl: 'front/templates/ticket-type/create.html',
            controller: 'TicketTypeCtrl'
        }).
        when('/ticket-type/view/:id', {
            templateUrl: 'front/templates/ticket-type/view.html',
            controller: 'TicketTypeCtrl'
        }).
        when('/ticket-type/edit/:id', {
            templateUrl: 'front/templates/ticket-type/edit.html',
            controller: 'TicketTypeCtrl'
        }).
        when('/user', {
            templateUrl: 'front/templates/user/list.html',
            controller: 'UserCtrl'
        }).
        when('/user/create', {
            templateUrl: 'front/templates/user/create.html',
            controller: 'UserCtrl'
        }).
        when('/user/view/:id', {
            templateUrl: 'front/templates/user/view.html',
            controller: 'UserCtrl'
        }).
        when('/user/edit/:id', {
            templateUrl: 'front/templates/user/edit.html',
            controller: 'UserCtrl'
        }).
        when('/dashboard', {
            templateUrl: 'front/templates/dashboard.html',
            controller: 'DashboardCtrl'
        }).
        otherwise({
            redirectTo: '/dashboard'
        });
    }])
    .run(['$rootScope', '$location', 'SessionServ', function($rootScope, $location, SessionServ) {
        if (!SessionServ.isLogged()) {
            $location.path('/');
        }
    }]);

// directive for file upload
angular.module('main').directive('fileModel', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);