$(document).ready(function(){

  var username = 'mgm702';
  var repouri  = 'https://api.github.com/users/'+username+'/repos';
  var events = 'https://api.github.com/users/'+username+'/events/public';

  var repositories;
  $.getJSON(repouri, function(json){
    repositories = json;
    outputRepoContent(repositories);
  });

  //Document ready closing script.
});
function outputRepoContent(repositories) {
  var repoOutput = '';
  if(repositories.length === 0) { repoOutput = '<p>No repos found unfortunately <i class="fa fa-frown-o fa-4x"></i> !</p>'; }
  else {

    for(i = 0; i < repositories.length; i++)
    {
        //repoOutput +=
        repoOutput += '<a href="'+repositories[i].html_url+'" target="_blank"><div class="col-lg-3 text-center repo">';
        repoOutput += '<div class="row"><div class="col-lg-4 text-center"><i class="fa fa-code-fork fa-4x"></i></div>';
        repoOutput += '<div class="col-lg-8"><h4>' + repositories[i].name + '</h4></div></div>';
        repoOutput += '<div class="row"><div class="col-lg-12 repo-info"><p>' + repositories[i].description + '</p></div></div>';
        repoOutput += '</a></div>';
      //End of the overall for loop
    }
  //End of the else statement for repository ourput
  }
  $('#gh_repo').html(repoOutput);
}

function requestJSON(url, callback) {
  $.ajax({
    url: url,
    complete: function(xhr) {
      callback.call(null, xhr.responseJSON);
    }
  });
}
