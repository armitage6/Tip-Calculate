const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

interface Props {
    handledClickChecked: (value: number) => void
    tip: number
}



export const Tip = ({ handledClickChecked, tip }: Props) => {
    return (
        <div className="main-option">
            <h3>Propina:</h3>
            {tipOptions.map((item) => (
                <div className="option" key={item.id}>

                    <label htmlFor={item.id}>{item.label}</label>
                    <input
                        type="radio"
                        name="tip"
                        id={item.id}
                        value={item.value}
                        onChange={(e) => handledClickChecked(+e.target.value)}
                        checked={item.value === tip}
                    />


                </div>
            ))}

        </div>
    )
}
