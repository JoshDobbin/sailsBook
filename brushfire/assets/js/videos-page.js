angular.module('brushfire_videosPage', [])
    .config(function($sceDelegateProvider) { //#A
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            '*://www.youtube.com/**'
        ]);
    });
angular.module('brushfire_videosPage').controller('PageCtrl', [ //#B
    '$scope', '$timeout',
    function($scope, $timeout) {
        $scope.videosLoading = true; //#C
        $timeout(function afterRetrievingVideos() { //#D
            var _videos = [{
                title: 'PSY - GANGNAM STYLE (강남스타일) M/V',
                src: 'https://www.youtube.com/embed/9bZkp7q19f0'
            }, {
                title: 'Justin Bieber - Baby ft. Ludacris',
                src: 'https://www.youtube.com/embed/kffacxfA7G4'
            }, {
                title: 'Charlie bit my finger - again !',
                src: 'https://www.youtube.com/embed/_OBlgSz8sSM'
            }];
            $scope.videosLoading = false; //#E
            $scope.videos = _videos; //#F
        }, 750); //#G
    }
]);
