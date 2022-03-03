Realizza la funzione `int moltiplicazione(int m, int n)` sapendo che
$n \odot m = 
\begin{cases}
    0 &\text{se } m = 0 \\
    n + \left( n \odot \left( m - 1 \right) \right) &\text{altrimenti }
\end{cases}$.