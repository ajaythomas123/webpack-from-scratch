import React from 'react';
import { createRoot } from 'react-dom/client';
import { greetPage } from "../../utils/loggers";

const pageName = 'Main App-> Main Page';
console.log(`Printed in page: ${pageName}`);
greetPage(pageName);

const MainApp = ({ page }) => {
    return <h1>React Heading: {page}</h1>
}

// Do not create the root directly with document.body. Will be changed in future commit;
const root = createRoot(document.body);
root.render(<MainApp page={pageName} />);