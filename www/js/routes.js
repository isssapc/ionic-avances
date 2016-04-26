angular.module('app.routes')
        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                    .state('tabs.obras', {
                        url: '/obras',
                        views: {
                            'tab-obras': {
                                templateUrl: 'templates/obras.html',
                                controller: 'obrasCtrl as ctrl'
                            }
                        }
                    })

                    .state('tabs.notificaciones', {
                        url: '/notificaciones',
                        views: {
                            'tab-notificaciones': {
                                templateUrl: 'templates/notificaciones.html',
                                controller: 'notificacionesCtrl'
                            }
                        }
                    })

                    .state('tabs', {
                        url: '/home',
                        templateUrl: 'templates/tabs.html',
                        abstract: true
                    })

                    .state('tabs.lotes', {
                        url: '/lotes/:id_obra',
                        views: {
                            'tab-obras': {
                                templateUrl: 'templates/lotes.html',
                                controller: 'lotesCtrl as ctrl'
                            }
                        }
                    })

                    .state('tabs.avances', {
                        url: '/avances/:id_lote',
                        views: {
                            'tab-obras': {
                                templateUrl: 'templates/partidas.html',
                                controller: 'avancesCtrl as ctrl'
                            }
                        }
                    })

                    .state('controlDeObras', {
                        url: '/login',
                        templateUrl: 'templates/controlDeObras.html',
                        controller: 'controlDeObrasCtrl'
                    });

            $urlRouterProvider.otherwise('/home/obras');



        });