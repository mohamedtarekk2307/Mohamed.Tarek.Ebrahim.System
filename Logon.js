const users = {
    "Tarek": { pass: "2468", role: "full_access" },
    "Tareksm": { pass: "2468", role: "no_script" },
    "TarekCIB": { pass: "2468", role: "no_social" }
};

window.showLoginPage = function() {
    $('#main-app-section').hide();
    $('#login-section').css('display', 'flex');
}

function applyPermissions(role) {
    $('#login-btn').hide();
    $('#logout-btn').show();
    $('.lang-toggle').css('display', 'flex');

    $('#nav-complaint').show();
    $('#nav-complaint-tool').show();
    $('#nav-request').show();
    $('#nav-social').show();
    $('#nav-script').show();
    $('#nav-Email').show();


    if (role === "no_script") {
        $('#nav-script').hide();
        $('#nav-complaint-tool').hide();
    } else if (role === "no_social") {
        $('#nav-social').hide();
        $('#nav-complaint-tool').hide();
    }

}

$(document).ready(function() {


    if ($('#typed-logo').length) {
        new Typed('#typed-logo', {
            strings: ["Mohamed Tarek Ebrahim"],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 1500,
            startDelay: 500,
            loop: true,
            showCursor: true,
            cursorChar: ''
        });
    }


    function showMainContent(userRole) {
        $('#login-section').hide();
        $('#main-app-section').show();

        if (userRole) {
            applyPermissions(userRole);
        } else {
            $('#nav-complaint, #nav-complaint-tool, #nav-request, #nav-social').hide();
            $('#login-btn').show();
            $('#logout-btn').hide();
            $('.lang-toggle').hide();
        }

    }

    window.checkLogin = function() {
        const username = $('#Username').val();
        const password = $('#password-input').val();
        const errorEl = $('#login-error');

        const user = users[username];

        if (user && user.pass === password) {
            errorEl.text('');
            sessionStorage.setItem('isLoggedIn', 'true');
            sessionStorage.setItem('userRole', user.role);

            showMainContent(user.role);
            showPage('home');
        } else {
            errorEl.text('Incorrect username or password.');
            sessionStorage.removeItem('isLoggedIn');
            sessionStorage.removeItem('userRole');
        }
    };

    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const userRole = sessionStorage.getItem('userRole');

    if (isLoggedIn && userRole) {
        showMainContent(userRole);
    } else {

        $('#login-section').hide();
        $('#main-app-section').show();
        $('#nav-complaint, #nav-complaint-tool, #nav-request, #nav-social').hide();
    }

    $('#logout-btn').on('click', function() {
        sessionStorage.removeItem('isLoggedIn');
        sessionStorage.removeItem('userRole');
        location.reload();
    });

    $('#blind-input').on('change', function() {
        const passwordInput = $('#password-input');
        passwordInput.attr('type', $(this).is(':checked') ? 'password' : 'text');
    });
    $('#blind-input').trigger('change');
});