import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Letras from "./Letras";

export default function Todos() {
  const [abecedario, setAbecedario] = useState([
    { letra: "a" },
    { letra: "b" },
    { letra: "c" },
    { letra: "d" },
    { letra: "e" },
    { letra: "f" },
    { letra: "g" },
    { letra: "h" },
    { letra: "i" },
    { letra: "j" },
    { letra: "k" },
    { letra: "l" },
    { letra: "m" },
    { letra: "n" },
    { letra: "o" },
    { letra: "p" },
    { letra: "q" },
    { letra: "r" },
    { letra: "s" },
    { letra: "t" },
    { letra: "u" },
    { letra: "v" },
    { letra: "w" },
    { letra: "x" },
    { letra: "y" },
    { letra: "z" },
  ]);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {abecedario.map((letra) => {
            console.log(letra.letra);
            return <Letras le={letra.letra} />;
          })}
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
