$('button').click(()=>{
    var text = $('input').val();
    if(text === "")
        alert("Please enter data into search field!");
    else{
        $('#exampleModalLabel').html('Showing Results for "'+text+'"')
        var resUrl='https://api.giphy.com/v1/gifs/search?api_key=YCoOG6AUeE6c3q2jCklR0lxwqLq40Iyc&q='+text+'&limit=12&offset=0&rating=G&lang=en';
        $.ajax(
            {
                url:resUrl,
                type:'GET',
                success: (res)=>{
                    var col=0;
                    var outputHTML1=outputHTML2=outputHTML3=outputHTML4="";
                    res.data.forEach((item)=> {
                        var gifUrl = item.images.fixed_height.url;
                        var gifMarkup=`<div class="col-sm-4"><a href=${gifUrl}> <img class="gifimg" src="${gifUrl}"></a></div>`;

                        if(col<3)
                        {
                            outputHTML1+=gifMarkup;
                             $('#gifArea1').html(outputHTML1);
                              col++;
                        } 
                        else if(col>=3 && col<6 )
                        {
                            outputHTML2+=gifMarkup;
                            $('#gifArea2').html(outputHTML2);
                            col++;
                        }
                        else if(col>=6 && col<9)
                        {
                            outputHTML3+=gifMarkup;
                            $('#gifArea3').html(outputHTML3);
                            col++;
                        }
                        else if(col>=9 && col < 12)
                        {
                            outputHTML4+=gifMarkup;
                            $('#gifArea4').html(outputHTML4);
                            col++;
                        }
                    });
                    $('#MoreResults').attr('href',`https://giphy.com/search/${text}`);
                }
            }
        );
    }
});
