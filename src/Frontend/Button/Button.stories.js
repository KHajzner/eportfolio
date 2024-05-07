import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Button } from "./Button";

export const reactRouterDecorator = () =>
{
  return(
    <MemoryRouter>
      <Routes>
        <Route elemenet={<Button/>}/>
      </Routes>
    </MemoryRouter>
  );
};

export default {
  title: 'Example/Button',
  component: reactRouterDecorator,
};


