app.controller('HomeController', ['$scope', function ($scope) {
    // $scope.testAbout = 'This is The test.'
    $scope.news = [{
        title: 'Title of the news',
        subTitle: 'Subtitle',
        content: 'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for' +
            ' their tiny stature, and even others for their massive size.' +
            ' Many people also have their own barometers for what makes a cute dog.'
    }, {
        title: 'Title of the news 2',
        subTitle: 'Subtitle 2',
        content: 'I think the problem is because you have not specified any controller for your ng-view and also you have to set your base URL correctly.' +
            ' I think the problem is because you have not specified any controller for your ng-view and also you have to set your base URL correctly.'
    }
    ]

    $scope.showNews = function (body) {
        console.log('This is the content from the click : ', body)
        $scope.modalTitle = body.title;
        $scope.modalSubtitle = body.subTitle;
        $scope.modalContent = body.content;
    }
}])