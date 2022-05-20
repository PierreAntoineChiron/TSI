#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;

//Un Fragment Shader minimaliste
void main (void)
{
  //Couleur du fragment
  //Couleur du fragment
  float x=gl_FragCoord.x/800.0 - 0.5;
  float y=gl_FragCoord.y/800.0 - 0.5; //Diviser par 1600 pour MAC
  if(x*x + 2*y*y > 0.05*0.05)
    color = vec4(0.0,1.0,0.0,1.0);
  else
    color = vec4(0.0,0.0,1.0,1.0);
}