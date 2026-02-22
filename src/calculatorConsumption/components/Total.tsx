import { formatCurrency } from "../helpers/formatCurrency";



interface Props {
    subTotal: number;
    total: number;
    tipTotal: number;
}

export const Total = ({ subTotal, total, tipTotal }: Props) => {
    return (
        <div className="main-total">
            <h3>Totales y Propina:</h3>

            <div>Subtotal a pagar: <span>{formatCurrency(subTotal)}</span></div>
            <div>Propina: <span>{formatCurrency(tipTotal)}</span></div>
            <div>Total a Pagar: <span>{formatCurrency(total)}</span></div>

        </div>
    )
}
