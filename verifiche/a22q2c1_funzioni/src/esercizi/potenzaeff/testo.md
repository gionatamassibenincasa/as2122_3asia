Realizza la funzione `int potenzaEff(int n, int m)` secondo il modello. Non ci sono limiti.
$n^m = \begin{cases}
  1                             & \text{se } m = 0\\
  \left(n^2\right)^{\frac{m}{2}}  & \text{se pari}(m)\\
  n \cdot \left( n^{m-1} \right)  & \text{altrimenti}
\end{cases}
$