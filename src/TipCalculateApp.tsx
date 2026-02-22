import { useReducer } from "react"
import { Order } from "./calculatorConsumption/components/Order"
import { Header } from "./components/Header"
import { Menu } from "./components/Menu"
import { calculatorReducer, getInitialState } from "./calculatorConsumption/reducer/calcualtor.reducer"
import type { MenuItem } from "./calculatorConsumption/types/menu.type"

export const TipCalculateApp = () => {

    const [state, dispatch] = useReducer(calculatorReducer, getInitialState())

    const { order, subTotal, total, tipTotal, tip } = state;

    const handledClickMenu = (menu: MenuItem) => {
        dispatch({ type: 'ADD_ORDER', payload: menu })
    }

    const handledClickChecked = (value: number) => {
        dispatch({ type: 'SELECT_TIP', payload: value })
    }

    const handledClickDelete = (id: number) => {
        dispatch({ type: 'DELETE_ORDER', payload: id })
    }

    const handledSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({ type: 'POST_ORDER', payload: getInitialState() })
    }

    return (
        <>
            <Header />

            <div className="container app-layaut">
                <Menu handledClickMenu={handledClickMenu} />
                <Order
                    order={order}
                    subTotal={subTotal}
                    total={total}
                    handledClickChecked={handledClickChecked}
                    tip={tip}
                    tipTotal={tipTotal}
                    handledClickDelete={handledClickDelete}
                    handledSubmit={handledSubmit}
                />
            </div>


        </>
    )
}
