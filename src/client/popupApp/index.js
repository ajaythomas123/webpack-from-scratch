import { greetPage } from "../../utils/loggers";
import { createH1 } from "../../utils/domHelpers";

const pageName = 'Popup App-> Main Page';
console.log(`Printed in page: ${pageName}`);
document.body.appendChild(createH1(`You're in ${pageName}`));
greetPage(pageName);