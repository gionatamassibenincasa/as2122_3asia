Realizza la funzione \`float radq(float x)\` che realizza il metodo di
Erone di Alessandria per il calcolo della radice quadrata con una tolleranza
sul valore del quadrato di 0,001.

Con un abuso sulla notazione, si consideri l'applicazione ricorsiva della funzione $\sqrt{\cdot}$:

$\sqrt{x} = n
\begin{cases}
   y &\text{se }  = |y * y - x| < 10^-3 \\
   x = \frac{y + \frac{x}{y}}{2} &\text{altrimenti }
\end{cases}$.
