import type { MenuItem, OrderItem } from "../types/menu.type";


export interface CalculatorState {

    order: OrderItem[];
    subTotal: number;
    tip: number;
    tipTotal: number;
    total: number
    orderLength: number;
}


export type CalculatorAction =
    | { type: 'ADD_ORDER', payload: MenuItem }
    | { type: 'SELECT_TIP', payload: number }
    | { type: 'DELETE_ORDER', payload: number }
    | { type: 'POST_ORDER', payload: CalculatorState }




export const getInitialState = (): CalculatorState => {


    return {
        order: [],
        subTotal: 0,
        tip: 0,
        tipTotal: 0,
        total: 0,
        orderLength: 0
    }
}


export const calculatorReducer = (
    state: CalculatorState,
    action: CalculatorAction
): CalculatorState => {

    switch (action.type) {

        case 'ADD_ORDER': {

            const poss = state.order.findIndex((item) => item.id === action.payload.id)
            let updateOrder;
            if (poss >= 0) {
                updateOrder = state.order.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        }
                    }

                    return item;
                })



            } else {
                updateOrder = [
                    ...state.order,
                    { ...action.payload, quantity: 1 },
                ]


            }

            const subTotal = updateOrder.reduce((total, actual) => total + (actual.quantity * actual.price), 0)

            const tipTotal = state.subTotal * state.tip;
            const total = subTotal + tipTotal;

            return {
                ...state,
                order: updateOrder,
                subTotal,
                tipTotal,
                total,
            };
        }
        case 'SELECT_TIP': {

            const tipTotal = state.subTotal * action.payload;


            return {
                ...state,
                tip: action.payload,
                tipTotal,
                total: state.subTotal + tipTotal,
            }
        }

        case 'DELETE_ORDER': {


            const updateOrders = state.order.filter((item) => item.id !== action.payload);
            const subTotal = updateOrders.reduce((total, actual) => total + (actual.quantity * actual.price), 0)

            const tipTotal = state.subTotal * state.tip;
            const total = subTotal + tipTotal;

            let tip = state.tip;
            if (updateOrders.length === 0) {
                tip = 0;
            }

            return {
                ...state,
                order: updateOrders,
                subTotal,
                tipTotal,
                tip,
                total
            }

        }
        case 'POST_ORDER': {


            return action.payload;
        }


        default:
            return state;
    }
}


