export const fetchUser = () => {
    const userInfo = 
        localStorage.getItem('allmanos_user') !== "undefined" 
        ? (
            JSON.parse(localStorage.getItem('allmanos_user'))
        ) : (
            localStorage.clear()
        );
    return userInfo
}