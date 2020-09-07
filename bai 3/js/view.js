const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'welcomeScreen':
            document.getElementById('app')
                .innerHTML = components.welcomeScreen;
            document.getElementById('redirect-to-project')
                .addEventListener('click', () => {
                    view.setActiveScreen('projectScreen')
                })
            document.getElementById('redirect-to-work')
                .addEventListener('click', () => {
                    view.setActiveScreen('projectScreen')
                })
            break;
        case 'projectScreen':
            document.getElementById('app')
                .innerHTML = components.projectScreen;
            document.getElementById('redirect-to-welcome')
                .addEventListener('click', () => {
                    view.setActiveScreen('welcomeScreen')
                })

            break;


    }
}