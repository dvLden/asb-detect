const AndroidSBDetect = (function () {
    /**
     * Detect Android Stock-Browser
     */
    const ua = window.navigator.userAgent;
    const isStock = (
        ua.indexOf('Mozilla/5.0') > -1 &&
        ua.indexOf('Android') > -1 &&
        ua.indexOf('AppleWebKit') > -1 &&
        ua.indexOf('Version') > -1
    );

    /**
     * Prevent access on successful detection
     * And redirect to official schema URL of Android PlayStore
     * To download Google Chrome
     */
    if (isStock) {
        alert("You are using Android Stock-Browser. To access our web app, you need to download Google Chrome. Click OK and you'll be redirected for download.");

        window.location.href = 'market://details?id=com.android.chrome';
    }
})();

export default AndroidSBDetect;
