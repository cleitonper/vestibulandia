<!DOCTYPE html>

<html ng-app="vestibulandia">
  <head>
   <link rel="stylesheet" href="lib/icomoon/icons.css">
    <link href="css/styles.css" rel="stylesheet">
	 
	<meta charset="utf-8" />
	  
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
	
	
	<script src="lib/angular/angular.min.js"></script>
	<script src="lib/angular/angular-route.min.js"></script>
	
	<script src="lib/youtube/youtube-iframe-api.js"></script>
	
	<script src="js/scripts.js"></script>
	
	<script src="js/rotas.js"></script>
  </head>
  
  <body>
    <header>
	  <h1>Vestibulandia</h1>
	  
	  <input type="checkbox" id="botao-menu"/>
	  <label for="botao-menu" class="abre-menu"></label>
      <label for="botao-menu" class="cortina"></label>

	  <nav id="menu">
		<ul>
		  <li><a ng-class="{active: activetab == '/'}" href="#/">Inicio</a></li>
		  <li>
			<a ng-class="{active: activetab == '/aulas'}" href="#/aulas">Aulas</a>
			
			<ul>
			  <li><a  ng-class="{active: activetab == '/aulas/matematica-zero'}" href="#/aulas/matematica-zero">Matematica Zero</a></li>
			  <li><a  ng-class="{active: activetab == '/aulas/matematica'}" href="#/aulas/matematica">Matematica</a></li>
			  <li><a  ng-class="{active: activetab == '/aulas/quimica'}" href="#/aulas/quimica">Quimica</a></li>
			  <li><a  ng-class="{active: activetab == '/aulas/fisica'}" href="#/aulas/fisica">Fisica</a></li>
			</ul>
		  </li>
		  <li><a ng-class="{active: activetab == '/artigos'}" href="#/artigos">Artigos</a></li>
		  <li><a ng-class="{active: activetab == '/contato'}" href="#/contato">Contato</a></li>
		</ul>
	  </nav>
	  
	  <a href="#" class="icon-question"></a>
	</header>
	
	<main class="clearfix" ng-view>
	  
	</main>
	<footer class="clearfix"> 
	  <h4>Vestibulandia ♥</h4>
	</footer>
  </body>
</html>		
