import { render, fireEvent } from "@testing-library/react";
import Counter from "./counter";

describe(Counter, () => {
  it("muestra el valor inicial correctamente", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("incrementa el contador al hacer click en 'Incrementar'", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBttn = getByRole("button", { name: "Incrementar" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBttn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  it("reduce el contador al hacer click en 'Reducir'", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBttn = getByRole("button", { name: "Reducir" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });

  it("reinicia el contador al hacer click en 'Reiniciar'", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const restartBttn = getByRole("button", { name: "Reiniciar" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(restartBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });

  it("cambia el signo del contador al hacer click en 'Cambiar signo'", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const switchBttn = getByRole("button", { name: "Cambiar signo" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-50);
  });
});
