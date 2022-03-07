Si vuole calcolare il reciproco del valore $x$, $\frac{1}{x}$.
È noto che si può calcolare usando solo moltiplicazioni e differenze
tra numeri con la virgola, applicando in un ciclo la formula:
$x_{k+1} = x_k \cdot (2 - \nu \cdot x_k).$

Si scriva la funzione `double reciproco(double x)` che calcola il reciproco
di un numero x usando 10 iterazioni e stima iniziale del reciproco $x_0 = \frac{1.0}{25}$.
      