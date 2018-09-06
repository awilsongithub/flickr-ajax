var tag;
var flickrAPI = 'https://api.flickr.com/services/feeds/photos_public.gne';
flickrAPI += '?jsoncallback=?'; // add this to url for jsonp requests

$(document).ready(function(){
    registerHandlers();
})

function registerHandlers(){
    $('button').click(function(){
        tag = $(this).text();
        getPics(tag);
    })
    $('#search-form').submit(function(evt){
        evt.preventDefault();
        tag = $('#search').val();
        getPics(tag);
    })
}

function getPics(){
    var data = {
        tags: tag,
        format: 'json'
    }
    $.getJSON(flickrAPI, data).done(showPics);
}

function showPics(data){
    console.log(data);
    $('.collection').empty();
    $.each(data.items, function(i, item){
        var li = '<li class="collection-item avatar">';
        li += '<img src="' + item.media.m + '" ';
        li += 'class="circle">';
        li += '<span class="title">' + tag + ' ' + i;
        li += '</span></li>';
        $('.collection').append(li);
    })
    return false;
}
