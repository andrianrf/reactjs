import "./App.css";
import React from "react";

export default function App() {
  return (
    <div>
      <ol>
        <li>
          ES7 React/Redux/GraphQL (untuk autocreate komponen react) : Shift+P
          &gt; ES7 &gt; function / class &gt; rcc
        </li>
        <li>
          ESLint (untuk menstandarisasikan code)
          <br />
          npm install -g eslint
          <br />
          eslint --init (check syntax, find problems, and enforcecode style;
          Javascript Modules; React; No; Browser; Use a popular style; Airbnb;
          JSON; Y;) .eslintrc.json
          <br />
          install ESLint extension for vscode
          <br />
          eslint src/ (untuk mengecek sourcecode)
          <br />
          eslint src/ --fix (untuk auto membetulkan code)
          <br />
          settings.json ("editor.codeActionsOnSave": &#123;
          "source.fixAll.eslint": true &#125;) .eslintrc.json ("rules": &#123;
          "no-console": "off" &#125;) (untuk exclude rule)
        </li>
        <li>Prettier - Code formatter (untuk memformat code)</li>
        <li>Bracket Pair Colorizer (untuk mewarnai sub bracket)</li>
      </ol>
    </div>
  );
}
