Guidebook.controller('AddNoteController',
	function($scope,$location,$routeparams,Notemodel){
		var chapterId = $routeParams.chapterId;
		$scope.cancel = function(){
			$location.path('/chapter/'+chapterId);
        }
        $scope.createNote = function(){
        	Notemodel.addNote(chapterId, $scope.note.content);
        	$location.path('/chapter/'+chapterId);
        }

	});
Guidebook.controller('DeleteNoteController',
	function($scope,$location,$routeParams, Notemodel){
		var chapterId = $routeParams.chapterId;
		Notemodel.deleteNote(chapterId,$routeParams.noteId);
		$location.path('/chapter/'+chapterId);
	}
});