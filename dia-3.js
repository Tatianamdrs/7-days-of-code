function normalizestr(str) {
  return str
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// 1ª decisão – FrontEnd ou BackEnd
let area;
while (true) {
  let escolha = prompt("Você quer seguir para a área de FrontEnd ou BackEnd?");
  if (normalizestr(escolha) === "frontend") {
    alert("Legal, FrontEnd é uma ótima área!");
    let frontChoice = prompt("Você quer estudar React ou Vue?");
    alert(`Show! Você escolheu aprender ${frontChoice}.`);
    area = `FrontEnd com ${frontChoice}`;
    break;
  } else if (normalizestr(escolha) === "backend") {
    alert("Ótimo, BackEnd é uma área muito boa");
    let backChoice = prompt("Você quer estudar C# ou Java?");
    alert(`Massa! Você escolheu aprender ${backChoice}.`);
    area = `BackEnd com ${backChoice}`;
    break;
  } else {
    alert("Desculpa, não entendi o que você falou. Vamos tentar de novo?");
  }
}

// 2ª decisão – especializar ou fullstack
let fullStack = prompt(
  "Digite 1 se você preferir se especializar na área escolhida ou 2 se pretende migrar para o FullStack"
);
if (fullStack === "1") {
  alert(`Incrível! Você vai se aprofundar em ${area}.`);
} else if (fullStack === "2") {
  alert(
    `Uau! Você vai ampliar horizontes e se tornar FullStack. Força nessa jornada!`
  );
} else {
  alert("Opção não reconhecida, mas tudo bem, o importante é seguir estudando!");
}

// 3ª parte – lista dinâmica de tecnologias
let tecnologias = [];
while (true) {
  let tech = prompt("Qual tecnologia você gostaria de aprender?");
  if (tech) {
    tecnologias.push(tech);
    alert(`Legal! ${tech} parece uma ótima tecnologia para aprender.`);
  }

  let mais = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (sim/não)");
  if (normalizestr(mais) !== "sim") {
    break;
  }
}

// Mensagem final
if (tecnologias.length > 0) {
  alert(
    `Muito bom! Você escolheu a área ${area}, sua opção de carreira foi ${
      fullStack === "1" ? "especializar" : "fullstack"
    }, e ainda quer aprender: ${tecnologias.join(", ")}. Bora estudar!`
  );
} else {
  alert(
    `Muito bom! Você escolheu a área ${area} e sua opção de carreira foi ${
      fullStack === "1" ? "especializar" : "fullstack"
    }.`
  );
}
