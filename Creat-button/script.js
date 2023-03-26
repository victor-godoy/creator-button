const controles = document.getElementById("controles");
const css = document.querySelector(".css");
const btn = document.querySelector(".btn");
controles.addEventListener("change", handlechange);

const handleStyle = {
  element: btn,

  backgroundColor(value) {
    this.element.style.backgroundColor = value;
    // esta sendo referenciado usando o this e mudando o style = valor
  },

  height(value) {
    this.element.style.height = value + "px";
  },

  width(value) {
    this.element.style.width = value + "px";
  },

  texto(value) {
    this.element.innerText = value;
  },

  color(value) {
    this.element.style.color = value;
  },

  border(value) {
    this.element.style.border = value;
  },

  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },

  fontFamily(value) {
    this.element.style.fontFamily = value;
  },

  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

function handlechange(event) {
  const name = event.target.name; // onde estou mudando
  const value = event.target.value; // valor que estou mudando

  handleStyle[name](value);
  salveValue(name, value);
  showCss();
}

// LocalStorage ele é um objeto

function salveValue(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const proprieties = Object.keys(localStorage); // vai retornar uma array com todas as chaves ( no caso são as propriedades que eu editei   )

  proprieties.forEach((propertie) => {
    handleStyle[propertie](localStorage[propertie]);
    // estou pegando a propriedade e ((localStorage[propertie])) = valor que eu quero ativar
    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}
setValues();

function showCss() {
  css.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
