export const handleTheme = () => {
    const darkButton = document.querySelector('.mode__controller')
    const html = document.querySelector('html')

    const preferences = JSON.parse(localStorage.getItem('dark__mode'))

    if (preferences) {
        html.classList.add('dark__mode')
        darkButton.src = './src/assets/sun.svg'
    } else {
        html.classList.remove('dark__mode')
        darkButton.src = './src/assets/moon.svg'
    }

    darkButton.addEventListener('click', () => {
        html.classList.toggle('dark__mode')

        if (html.classList.contains('dark__mode')) {
            localStorage.setItem('dark__mode', true)
            darkButton.src = './src/assets/sun.svg'
        } else {
            localStorage.setItem('dark__mode', false)
            darkButton.src = './src/assets/moon.svg'
        }
    })
}