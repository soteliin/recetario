import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Letras({ le }) {
  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?f=`;
  return (
    <li class="page-item">
      <a class="page-link" href={URL+le}>
        {le}
      </a>
    </li>
  );
}
