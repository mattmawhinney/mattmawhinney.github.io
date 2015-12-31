$('#mc-form').ajaxChimp({
    url: '//github.us12.list-manage.com/subscribe/post?u=e84cb3b9b9a5553fa38c3fa40&amp;id=f9b3bb1e9b',
    callback: callbackFunction
});


function callbackFunction (resp) {
    if (resp.result === 'success') {
        console.log(resp.msg);
       $('#email-alert').addClass("alert alert-danger")append(resp.msg);
    }
}