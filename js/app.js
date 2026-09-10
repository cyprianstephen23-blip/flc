// Page routes
const routes = {
    '#home': () => renderHome(),
    '#about': () => renderAbout(),
    '#construction': () => renderConstruction(),
    '#camp': () => renderCamp(),
    '#supply': () => renderSupply(),
    '#contact': () => renderContact()
};

// Loads page based on hash
function router() {
    const hash = window.location.hash || '#home';
    const renderFunction = routes[hash] || routes['#home'];

    const appContainer = document.getElementById('app');
    appContainer.innerHTML = '';
    renderFunction();
    window.scrollTo(0, 0);
}

// Listen for hash changes
window.addEventListener('hashchange', router);

// Init app
window.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();  // ← Added
    router();
});
