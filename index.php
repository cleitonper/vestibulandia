<!DOCTYPE html>

<html lang="pt-br">
  <head>
   <link rel="stylesheet" href="lib/icomoon/icons.css">
    <link href="css/styles.css" rel="stylesheet">
	 
	<meta charset="utf-8" />
	  
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
  </head>
  
  <body>
    <header>
	  <h1>Vestibulandia</h1>
	  
	  <input type="checkbox" id="botao-menu"/>
	  <label for="botao-menu" class="abre-menu"></label>
      <label for="botao-menu" class="cortina"></label>

	  <nav id="menu">
		<ul>
		  <li><a href="index.php?pagina=inicio">Inicio</a></li>
		  <li>
			<a href="index.php?pagina=aulas">Aulas</a>
			
			<ul>
			  <li><a href="index.php?pagina=matematica-zero">Matematica Zero</a></li>
			  <li><a href="index.php?pagina=matematica">Matematica</a></li>
			  <li><a href="index.php?pagina=quimica">Quimica</a></li>
			  <li><a href="index.php?pagina=fisica">Fisica</a></li>
			</ul>
		  </li>
		  <li><a href="index.php?pagina=artigos">Artigos</a></li>
		  <li><a href="index.php?pagina=contato">Contato</a></li>
		</ul>
	  </nav>
	  
	  <a href="#" class="icon-question"></a>
	</header>
	
	<main class="clearfix">
		<?php
			include "paginas/paginas.php";
		?>
	</main>
	<footer class="clearfix"> 
	  <h4>Vestibulandia ♥</h4>
	</footer>
  </body>
</html>		
