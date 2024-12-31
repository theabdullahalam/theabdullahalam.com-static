window.addEventListener('load', function () {
    let iframe = document.querySelector("#cusdis_thread iframe");
    if (iframe) {
        let observer = new MutationObserver(() => {
            let scrollHeight = iframe.contentWindow.document.body.scrollHeight;
            iframe.style.height = scrollHeight + "px";
        });
        observer.observe(iframe.contentWindow.document.body, { childList: true, subtree: true });
    }
});