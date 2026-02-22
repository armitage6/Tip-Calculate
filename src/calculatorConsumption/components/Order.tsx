import type { OrderItem } from "../types/menu.type"
import { Tip } from "./Tip"
import { Total } from "./Total"


interface Props {
    order: OrderItem[];
    subTotal: number;
    total: number;
    tipTotal: number
    tip: number
    handledClickChecked: (value: number) => void
    handledClickDelete: (value: number) => void
    handledSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}


export const Order = ({ order, subTotal, total, tipTotal, tip, handledClickChecked, handledClickDelete, handledSubmit }: Props) => {
    return (
        <>
            <div className="order-main">
                {order.length === 0 ? (

                    <div>
                        <p className="empty-order text-center">No existen Ordenes</p>
                        <Tip
                            handledClickChecked={handledClickChecked}
                            tip={tip}
                        />
                        <Total
                            subTotal={subTotal}
                            total={total}
                            tipTotal={tipTotal}
                        />


                        <button className="btn-submit" type="submit">Guardar Orden</button>

                    </div>
                ) : (



                    <form onSubmit={(e) => handledSubmit(e)}>
                        <h2>Consumo</h2>
                        <div className="container-order">
                            {order.map((item) => (
                                <div className="order" key={item.id}>
                                    <div className="info-order">
                                        <div className="name">{item.name}<span className="price-order"> $30.00</span></div>
                                        <div className="quantity-info">
                                            Cantidad:
                                            <span className="quantity"> {item.quantity}  </span>
                                            -
                                            <span className="price-total"> $ {item.price * item.quantity}</span>
                                        </div>
                                    </div>
                                    <button
                                        className="btn-delete"
                                        onClick={() => handledClickDelete(item.id)}
                                    >X</button>
                                </div>
                            ))}
                        </div>


                        <Tip
                            handledClickChecked={handledClickChecked}
                            tip={tip}
                        />
                        <Total
                            subTotal={subTotal}
                            total={total}
                            tipTotal={tipTotal}
                        />


                        <button className="btn-submit" type="submit">Guardar Orden</button>
                    </form>
                )}





            </div >

        </>
    )
}
