import * as React from "react"
import { increment, decrement, input, focusOnly, smFont, notavailable } from "./numeric-input.module.css"
export function NumericInput({
  onIncrement,
  onDecrement,
  className,
  disabled,
  available,
  ...props
}) {
  return (
    <div className="d-flex align-items-center">
      <span className="pe-2 Aftika_Bold">Qty</span>
      <div className="d-flex border px-3 py-1 ">
        <div>
          <button
            className={`${decrement} ${focusOnly} ${notavailable}`}
            aria-label="Decrement"
            onClick={onDecrement}
          >
            <span className={smFont}>-</span>
          </button>
        </div>
        <div>
          <input
            type="numeric"
            className={`${focusOnly} ${input}`}
            {...props}
          />
        </div>
        <div>
          <button
            className={`${increment} ${focusOnly} ${notavailable}`}
            aria-label="Increment"
            onClick={onIncrement}
          >
            <span className={smFont}>+</span>
          </button>
        </div>
      </div>
    </div>
  )
}
