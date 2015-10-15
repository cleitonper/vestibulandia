setTimeout(function onYouTubeIframeAPIReady()
{
    player1 = new YT.Player('novo-video01',
    {
        videoId: 'jsKhGAJfesk',
        playerVars: { 'autoplay': 0, 'controls': 1 },
    });
    
    player2 = new YT.Player('novo-video02',
    {
        videoId: 'e6SvmoacmGM',
        playerVars: { 'autoplay': 0, 'controls': 1 },
    });
    
    player3 = new YT.Player('novo-video03',
    {
        videoId: 'CMhq8_jab24',
        playerVars: { 'autoplay': 0, 'controls': 1 },
    });
    
    player4 = new YT.Player('novo-video04',
    {
        videoId: 'Zby9if2hXIA',
        playerVars: { 'autoplay': 0, 'controls': 1 },
    });
    
    /************************************************************************/
    /************************************************************************/
    
    video01 = new YT.Player('video01',
    {
        playerVars: { 'autoplay': 0, 'controls': 1 },
        events:
        {
            'onReady': onPlayerReady,
        }
    });
    
    video02 = new YT.Player('video02',
    {
        playerVars: { 'autoplay': 0, 'controls': 1 },
        events:
        {
            'onReady': onPlayerReady,
        }
    });
    
    video03 = new YT.Player('video03',
    {
        playerVars: { 'autoplay': 0, 'controls': 1 },
        events:
        {
            'onReady': onPlayerReady,
        },
        'suggestedQuality': 'hd720'
    });
    
    video04 = new YT.Player('video04',
    {
        videoId: 'Zby9if2hXIA',
        playerVars: { 'autoplay': 0, 'controls': 1 },
    });
    
    
    
    
    function onPlayerReady(event)
    {
        /**
        * Carregamento da Playlist
        * Matemática Zero
        */
        video01.loadPlaylist
        ({
            'listType':'playlist',
            'list': 'PLEdrU_rPPGOaDiQvyuNeylyp05pwrxNMW',
            'index': '0',
            'suggestedQuality': 'hd720'
        });
        
        
        
        /**
        * Carregamento da Playlist
        * Matemática
        */
        video02.loadPlaylist
        ({
            'listType':'playlist',
            'list': 'PLEdrU_rPPGOaDiQvyuNeylyp05pwrxNMW',
            'index': '0',
            'suggestedQuality': 'hd720'
        });
        
        
        /**
        * Carregamento da Playlist
        * Matemática Quimica
        */
        video03.loadPlaylist
        ({
            'listType':'playlist',
            'list': 'PLEdrU_rPPGOaDiQvyuNeylyp05pwrxNMW',
            'index': '0',
            'suggestedQuality': 'hd720'
        });
        
        video01.addEventListener('onStateChange', function(event)
        {
            if(event.data == 1)
            {
                video01.stopVideo();
            }
        });
        
        video02.addEventListener('onStateChange', function(event)
        {
            if(event.data == 1)
            {
                video02.stopVideo();
            }
        });
        
        video03.addEventListener('onStateChange', function(event)
        {
            if(event.data == 1)
            {
                video03.stopVideo();
            }
        });
    }
}, 1000);
