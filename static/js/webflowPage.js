// Assuming the base path is always http://127.0.0.1:5173/invierno/
const path = window.location.pathname.split("/").pop();

let dataValue;

switch (path) {
  case "": // portada
    dataValue = "64f1216f6fa1f35dfc39f31c";
    break;

  case "inicio":
    dataValue = "64a850fe735357144db7d970";

    break;

  case "cobertor-invernal":
    dataValue = "64dc21d2eae0994a77621e17";
    break;

  case "cobertor-everest":
    dataValue = "64a85dfc06be134e42a991db";
    break;

  case "cobertor-austral":
    dataValue = "64d84b1f226dbec0656d27ec";
    break;

  case "cobertor-nordico":
    dataValue = "64de29c942ca70530c8e255f";
    break;

  case "cobertor-ligero":
    dataValue = "64dee59c6d67f4862145d849";
    break;

  case "cojines":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "almohadas-abrazables":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "batas":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "pijamas":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "hoodies":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "puffs":
    dataValue = "64a850fe735357144db7d970";
    break;

  case "tapetes":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "rodapies":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "sabanas":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "fundas-de-almohadas":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "adornos-de-pared":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "vialite":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "cortinas":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "mascotas":
    dataValue = "64a850fe735357144db7d970";
    break;

  case "cocina":
    dataValue = "64df524707e6565f76493778";
    break;

  case "navidad":
    dataValue = "64df900454b968a39c43471f";
    break;

  case "fundas-de-sillon":
    dataValue = "64df524707e6565f76493778";
    break;

  case "almohadas":
    dataValue = "6510d7089473faa75ea81bcd";
    break;

  case "protectores-de-colchon":
    dataValue = "6510d7089473faa75ea81bcd";
    break;

  // Add more cases as required
  // case 'another-path':
  //   dataValue = 'another-data-value';
  //   break;
  default:
    dataValue = "64f1216f6fa1f35dfc39f31c"; // Default value or no value if it's not one of the predefined paths
}

if (dataValue) {
  document.documentElement.setAttribute("data-wf-page", dataValue);
}
