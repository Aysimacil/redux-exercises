import { type } from "@testing-library/user-event/dist/type"
import {INCREMENT , DECREMENT, CLEAR} from "../types/counterType"

export const increment =() => {
    return {type: INCREMENT}
}
export const decrement =() => {
    return {type: DECREMENT}
}
export const clear =() => {
    return {type: CLEAR}
}