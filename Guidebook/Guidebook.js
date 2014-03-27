var guidebookConfig = function($routerProvider){
	$routerProvider
	  .when('/',{
	  	controller:'ChaptersController',
	  	templateUrl:'view/chapters.html'
	  })
	  .when('/chapters/:chapterId',{
	  	controller:'ChaptersController',
	  	templateUrl:'view/chapters.html'
	  })
	  .when('/addNote/:chapterId'),{
	  	controller:'AddNoteController',
	  	templateUrl:'view/addNote.html'
	  })
      .when('/deleteNote/:chapterId/:noteId',{
      	controller:'deleteNoteController',
      	templateUrl:'view/addNote.html'
      });
};
var Guidebook = angular.module('Guidebook',[]).
config(guidebookConfig);