<template>
    <div>
        <br>
        <p class="fancy3D">SITE MAP</p>
        <nav class="nav">
			<ul>
				<li>
					<a href="#">Introduction</a>
					<ul>
						<li>
							<a href="#">Projects</a>
							<ul>
								<li>
									<a href="#">Fall</a>
									<ul>
										<li>
											<a href="#">Algorithmic Art</a>
											<ul>
												<li>
													<a href="#">Module 3 Animation</a>
													<ul>
														<li>
															<a href="#">Smart Fire Detection</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<a href="#">Spring</a>
									<ul>
										<li>
											<a href="#">Personal Portfolio</a>
											<ul>
												<li>
													<a href="#">Interactive Campus Map</a>
													<ul>
														<li>
															<a href="#">Final Portfolio</a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">Revisions</a>
							<ul>
								<li>
									<a href="#">Module 1</a>
									<ul>
										<li>
											<a href="#">Module 2</a>
											<ul>
												<li>
													<a href="#">Module 4</a>
												</li>
											</ul>
										</li>
									</ul>
								</li>
							</ul>
						</li>
						<li>
							<a href="#">Research</a>
							<ul>
								<li>
									<a href="#">Fall 2019</a>
									<ul>
										<li>
											<a href="#">Spring 2020</a>
										</li>
									</ul>
								</li>
							</ul>
						</li>
                        <li>
							<a href="#">Conclusion</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  position: relative;
  margin: 0;
  padding: 0;
  
  border: 0 none;
    
  -webkit-transition: all ease .4s;
  -moz-transition: all ease .4s;
    transition: all ease .4s;
}

html,
body {
  width: 100%;
  height: 100%;
    
  background: RGBA(0, 58, 97, 1);

  
  font-size: 18px;
}

h1 {
  padding-top: 40px;
    
  color: #ccc;
  text-align: center;
  font-size: 1.8rem;
     
    text-shadow: rgba(0,0,0,0.6) 1px 0, rgba(0,0,0,0.6) 1px 0, rgba(0,0,0,0.6) 0 1px, rgba(0,0,0,0.6) 0 1px;
}

.nav {
  margin: 20px auto;
  width: 1200px; /* Adjust this for centering */
  min-height: auto;
}

.nav ul {
  position: relative;
  padding-top: 20px; 
}

.nav li {
  position: relative;
  padding: 20px 3px 0 3px; 
  float: left; 
  
  text-align: center;
  list-style-type: none; 
}

.nav li::before, .nav li::after{
  content: '';
  position: absolute; 
  top: 0; 
  right: 50%;
  width: 50%; 
  height: 20px;
  border-top: 1px solid #ccc;
}

.nav li::after{
  left: 50%;
  right: auto; 
  
  border-left: 1px solid #ccc;
}

.nav li:only-child::after, .nav li:only-child::before {
  content: '';
  display: none;
}

.nav li:only-child{ padding-top: 0;}
.nav li:first-child::before, .nav li:last-child::after{
  border: 0 none;
}

.nav li:last-child::before{
  border-right: 1px solid #ccc;
  border-radius: 0 5px 0 0;
}

.nav li:first-child::after{
    border-radius: 5px 0 0 0;
}
.nav ul ul::before{
  content: '';
  position: absolute; top: 0; left: 50%;
  border-left: 1px solid #ccc;
  width: 0; 
  height: 20px;
}

.nav li a{
  display: inline-block;
  padding: 10px 25px;
  
  border-radius: 5px;
  border: 1px solid #ccc;
  
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  color: #ccc;
  font-family: 'Montserrat';
  font-size: 16px;
  background: white;
  color: black;
}

.nav li a:hover, .nav li a:hover+ul li a {
  color: white;
  background: none;   
  border: 1px solid #94a0b4;
}

.nav li a:hover+ul li::after, 
.nav li a:hover+ul li::before, 
.nav li a:hover+ul::before, 
.nav li a:hover+ul ul::before{
  content: '';
  border-color: #94a0b4;
}
</style>