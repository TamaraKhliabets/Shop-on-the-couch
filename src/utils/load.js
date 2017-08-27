export default url => {
    return new Promise((res, req) => {
        const success = new XMLHttpRequest();
        success.open('GET', url, true);

        success.addEventListener('load', () => {
            success.status >= 200 && success.status < 400
            ? res(success.responseText)
                :req(new Error(`Request Failed: ${success.statusText}`));
        });

        success.addEventListener('error', () => {
            req(new Error('Network Error'));
        });

        success.send();
    });
};