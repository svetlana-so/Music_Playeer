export const getIconStyle = (isHovered: boolean) => ({
    fill: isHovered ? 'white' : '',
    cursor: 'pointer',
    filter: isHovered ? 'drop-shadow(0 0 10px white)' : 'none',
});