import { Data, animate, Override, Animatable } from "framer"

const data = Data({ left: Animatable(40) })

export const Scale: Override = () => {
    return {
        left: data.left,
        onTap() {
            animate.spring(data.left, 20)
        },
    }
}
