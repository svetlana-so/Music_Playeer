export const getIconStyle = (isHovered: boolean, showFavorites: boolean) => ({
    fill: isHovered ? 'white' : (showFavorites ? 'red' : ''),
    cursor: 'pointer',
    filter: isHovered ? 'drop-shadow(0 0 10px white)' : 'none',
});