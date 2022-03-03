Realizza la funzione `int moltiplicazioneEff(int n, int m)` sapendo che
$n \odot m = 
\begin{cases}
  n                           &\text{se } m = 0 \\
  (2 \cdot n) \odot (m / 2) & \text{se pari}(m)\\ 
  n + \left( n \odot \left( m - 1 \right) \right) &\text{altrimenti }
\end{cases}$.