export const leftAnimation = {
    hidden: {
        opacity: 0,
        translateX: -200
    },
    visible: {
        opacity: 1,
        translateX: 0,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.6, 
            ease: "easeOut",
            delay: 0.1 
        }
    }
}