import { menuItems } from "../calculatorConsumption/api/db"
import type { MenuItem } from "../calculatorConsumption/types/menu.type"


interface Props {
    handledClickMenu: (menu: MenuItem) => void

}

export const Menu = ({ handledClickMenu }: Props) => {
    return (
        <div className="main-menu container">
            <h2>Menú</h2>

            <div className="container-menus ">

                {
                    menuItems.map((item) => (
                        <div className="menu" key={item.id} onClick={() => handledClickMenu(item)}>
                            <span className="name-menu"> {item.name}</span>
                            <p className="price">$<span>{item.price}</span></p>
                        </div>
                    ))
                }

            </div>

        </div>
    )
}
