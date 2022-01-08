// Libs
import PropTypes from "prop-types"
import classnames from "classnames"

// CSS Module
import styles from "./FlexContainer.module.css"

export const ORIENTATION = {
    HORIZONTAL: "container--horizontal",
    VERTICAL: "container--vertical",
}

export function FlexContainer({ children, orientation=ORIENTATION.HORIZONTAL }) {
    const rootClassName = classnames(styles.container, styles[orientation]);

    return <div className={rootClassName}>
        {children}
    </div>
}

FlexContainer.propTypes = {
    /**
     * Children JSX Elements
     */
    children: PropTypes.node.isRequired,

    /**
     * Flex orientation (row or column)
     */
    orientation: PropTypes.oneOf(Object.values(ORIENTATION))
}